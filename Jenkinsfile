pipeline{

	agent any

	
	stages {

		stage('Kill') {
			steps {
				sh 'docker stop $(docker ps -a -q)' 
			}
		}
		stage('Prune') {
			steps { 
				sh 'docker system prune -a -f'
			}
		}
		stage('Build') {
			steps {
				sh 'docker build -t valuestory.io .'
			}
		}
		stage('Deploy') {
			steps {
				sh 'docker run -p 9000:3000 -d --name valuestory valuestory.io'
			}
		}

	}

}
