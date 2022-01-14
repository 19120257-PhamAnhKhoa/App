pipeline {
  agent any
  environment {
    DOCKER_IMAGE = "19120257/19120257"
  }
  stages {
    stage("build") {
      environment {
        DOCKER_TAG="${GIT_BRANCH.tokenize('/').pop()}-${GIT_COMMIT.substring(0,7)}"
      }
      steps {
        bat "docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} . "
        bat "docker tag ${DOCKER_IMAGE}:${DOCKER_TAG} ${DOCKER_IMAGE}:latest"
        withCredentials([string(credentialsId: 'docker-pwd', variable: 'dockerhubPwd')]) {
            bat "docker login -u 19120257 -p ${dockerhubPwd}"
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