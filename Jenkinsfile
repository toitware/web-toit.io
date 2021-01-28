pipeline {

    agent {
        docker {
            image 'gcr.io/infrastructure-220307/jenkins-console-toolchain:20210128123443'
            label 'docker'
            args '-v /home/jenkins/agent:/home/jenkins/.cache/ -u jenkins'
            reuseNode true
        }
    }

    options {
      timeout(time: 30, unit: 'MINUTES')
    }

    environment {
        BUILD_VERSION = sh(returnStdout: true, script: 'gitversion').trim()
    }

    stages {
        stage("install") {
            steps {
                sh "yarn install"
            }
        }

        stage("lint") {
            steps {
                sh "yarn lint"
            }
        }

        stage("build") {
            steps {
                sh "yarn build"
            }
        }

        stage("upload") {
            when {
                anyOf {
                    branch 'master'
                }
            }
            steps {
                sh "tar -zcf ${BUILD_VERSION}.tar.gz -C public ."
                sh "echo -n ${BUILD_VERSION} > LATEST"
                withCredentials([[$class: 'FileBinding', credentialsId: 'gcloud-service-auth', variable: 'GOOGLE_APPLICATION_CREDENTIALS']]) {
                    sh "gcloud auth activate-service-account --key-file=${GOOGLE_APPLICATION_CREDENTIALS}"
                    sh "gcloud config set project infrastructure-220307"
                    sh "gsutil cp ${BUILD_VERSION}.tar.gz gs://toit-web/toit.io/${BUILD_VERSION}.tar.gz"
                    sh "gsutil cp LATEST gs://toit-web/toit.io/LATEST"
                }
            }
        }
    }
}
