pipeline {
    agent {
      kubernetes {
        defaultContainer 'webtoitio'
        yamlFile 'Jenkins.pod.yaml'
      }
    }

    environment {
        BUILD_VERSION = sh(returnStdout: true, script: 'gitversion').trim()
    }

    options {
        timeout(time: 30, unit: 'MINUTES')
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

        stage("test") {
            steps {
                sh "yarn test:jenkins"
            }
            post {
                always {
                    junit "junit.xml"
                }
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
                    branch pattern: "release-v\\d+.\\d+", comparator: "REGEXP"
                    tag "v*"
                }
            }
            steps {
                sh "tar -zcf ${BUILD_VERSION}.tar.gz -C public ."
                withCredentials([[$class: 'FileBinding', credentialsId: 'gcloud-service-auth', variable: 'GOOGLE_APPLICATION_CREDENTIALS']]) {
                    sh "gcloud auth activate-service-account --key-file=${GOOGLE_APPLICATION_CREDENTIALS}"
                    sh "gcloud config set project infrastructure-220307"
                    sh "FILEEXT=tar.gz toitarchive ${BUILD_VERSION}.tar.gz toit-web toit.io ${BUILD_VERSION}"
                }
            }
        }
    }
}
