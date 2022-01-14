pipeline {
  agent any
  environment {
    DOCKER_IMAGE = "darkhunter91001/19120257"
  }

  stages {
    stage("build") {
      environment {
        DOCKER_TAG="${GIT_BRANCH.tokenize('/').pop()}-${GIT_COMMIT.substring(0,7)}"
      }
      steps {
        bat "docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} . "
        bat "docker tag ${DOCKER_IMAGE}:${DOCKER_TAG} ${DOCKER_IMAGE}:latest"
        withCredentials([usernamePassword(credentialsId: 'docker-hub', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
            bat 'echo $DOCKER_PASSWORD | docker login --username $DOCKER_USERNAME --password-stdin'
            bat "docker push ${DOCKER_IMAGE}:${DOCKER_TAG}"
            bat "docker push ${DOCKER_IMAGE}:latest"
        }

        //clean to save disk
        bat "docker image rm ${DOCKER_IMAGE}:${DOCKER_TAG}"
        bat "docker image rm ${DOCKER_IMAGE}:latest"
      }
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