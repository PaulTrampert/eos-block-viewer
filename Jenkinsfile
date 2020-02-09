def getImageTag(branch) {
  return branch == 'master' ? 'latest' : branch
}

pipeline {
  agent any

  environment {
    BASE_IMAGE = 'node:lts'
    CI = 'true'
    DOCKER_REPO = "docker.ptrampert.com"
    DOCKER_REPO_CREDENTIALS = "nexus"
    IMAGE_TAG = getImageTag(BRANCH_NAME)
    IMAGE_NAME = "$DOCKER_REPO/eos-image-viewer"
  }

  options {
    buildDiscarder(logRotator(numToKeepStr:'5'))
  }

  stages {
    stage("Install dependencies") {
      agent {
        docker {
          image BASE_IMAGE
          args "-e HOME=$HOME"
          reuseNode true
        }
      }

      steps {
        sh "npm install"
      }
    }

    stage("Test") {
      agent {
        docker {
          image BASE_IMAGE
          args "-e HOME=$HOME"
          reuseNode true
        }
      }

      steps {
        sh "npm run test-ci"
      }

      post {
        always {
          junit 'junit.xml'
          cobertura coberturaReportFile: 'coverage/cobertura-coverage.xml'
        }
      }
    }

    stage('Build and Publish') {
      steps {
        lock("${IMAGE_NAME}") {
          withDockerRegistry(url: "https://${DOCKER_REPO}", credentialsId: DOCKER_REPO_CREDENTIALS) {
            sh "docker build -t ${IMAGE_NAME}:${IMAGE_TAG} ."
            sh "docker push ${IMAGE_NAME}:${IMAGE_TAG}"
            sh "docker rmi ${IMAGE_NAME}:${IMAGE_TAG}"
          }
        }
      }
    }
  }
  post {
    changed {
      mail to: 'paul.trampert@ptrampert.com', subject: "Build status of ${env.JOB_NAME} changed to ${currentBuild.result}", body: "Build log may be found at ${env.BUILD_URL}"
    }
    always {
      deleteDir()
    }
  }
}