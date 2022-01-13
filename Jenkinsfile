pipeline {

  agent none

  environment {
    DOCKER_IMAGE = "19120257/19120257"

  }

  stages {
     stage('SCM Checkout')
    {
        git credentialsId: '73330172-b6fd-4edd-986c-e1a61a1a457d', url: 'https://github.com/Yami91001/App'
    }
    stage('Build Docker Image')
    {
        sh 'docker build -t ${DOCKER_IMAGE}:latest . '
    }
  }

  post {
    success {
      echo "SUCCESSFUL"
    }
    failure {
      echo "FAILED"
    }
  }
}