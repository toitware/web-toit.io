pipeline {
    agent {
      kubernetes {
      yaml """
kind: Pod
metadata:
  name: agent
spec:
  containers:
  - name: webtoitio
    image: 465068080952.dkr.ecr.eu-west-1.amazonaws.com/jenkins-console-toolchain:20210204155459
    command:
    - cat
    tty: true
"""
      }
    }

    options {
      timeout(time: 30, unit: 'MINUTES')
    }

    stages {
        stage("install") {
            steps {
                container("webtoitio") {
                    sh "yarn install"
                }
            }
        }

        stage("lint") {
            steps {
                container("webtoitio") {
                    sh "yarn lint"
                }
            }
        }

        stage("build") {
            steps {
                container("webtoitio") {
                    sh "yarn build"
                }
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
                container("webtoitio") {
                    def BUILD_VERSION = sh(returnStdout: true, script: 'gitversion').trim()
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
}
