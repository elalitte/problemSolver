let problemstab = {
	data: function () {
		return {
			listeProblems: null,
			addProblemOn: false,
			addButton: "Ajouter un problème",
			intitule: "",
			detail: "",
			leProbleme: ""
		}
	},
	methods: {
		addProblemClicked(e) {
			var self=this
			if (self.addProblemOn) {
				self.addProblemOn = false
				self.addButton = "Ajouter un problème"
				e.preventDefault();
				if ( self.intitule == "" || self.detail == "" ) {
				}
				else {
				axios.post('/create.php', { "description": self.intitule, "details": self.detail, "reality": 0, "urgency": 0, "leader": "", "team": "", "dueDate": "" })
				.then(response => (self.output = response.data))
				.catch(function (error) {
					self.output = error;
				});
				// On met à jour la variable listeProblems en allant réinterroger la base
				// pour mettre à jour la page avec les nouvelles infos 
				axios.get('/read.php').then(response => (self.listeProblems = response.data))
				self.intitule = ""
				self.detail = ""
				}
			} else {
				self.addProblemOn = true
				self.addButton = "Valider votre problème"
			}
		},
		deleteProblem(problem) {
			self=this
			this.leProbleme=problem
			axios.post('/delete.php', {test: "5"})
			.then(response => {})
			.catch(e => {
			  this.errors.push(e)
			})
			axios.get('/read.php').then(response => (self.listeProblems = response.data))
		}
	},
	mounted () {
		axios.get('/read.php').then(response => (this.listeProblems = response.data))
	},
	template: `
	<div>
		<div class="row">
		  <table class="table table-bordered">
			<thead>
			<tr>
			  <th scope="col">Intitulé court</th>
			  <th scope="col">Détails</th>
			  <th scope="col">Partage</th>
			  <th scope="col">Urgence</th>
			  <th scope="col">Leader</th>
			  <th scope="col">Team</th>
			  <th scope="col">Délai</th>
			  <th scope="col"></th>
			</tr>
			</thead>
			<tbody>
			<tr v-for="problem in listeProblems" :key="problem.id">
			  <th scope="row">{{ problem.description }}</th>
			  <td>{{ problem.details }}</td>
			  <td align="center">{{ problem.reality }}<button type="button" class="btn btn-primary btn-sm">Votez !</button></td>
			  <td align="center">{{ problem.urgency }}</td>
			  <td>{{ problem.leader }}</td>
			  <td>{{ problem.team }}</td>
			  <td>{{ problem.dueDate }}</td>
			  <td class="trash" @click="deleteProblem(problem)"><i class="fas fa-trash-alt"></i></td>
			</tr>
			<tr v-show="addProblemOn">
			  <th scope="row"><input type="text" v-model="intitule" placeholder="Entrez l'intitulé"></th>
			  <td><input type="text" v-model="detail" placeholder="Entrez les détails"></td>
			  <td align="center">XXX</td>
			  <td align="center">XXX</td>
			  <td align="center">XXX</td>
			  <td align="center">XXX</td>
			  <td align="center">XXX</td>
			  <td class="trash" align="center">X</td>
			</tr>
			</tbody>
		  </table>
		</div>
	    <div class="row float-right">
		  <button type="button" id="addPb" class="btn" :class="{ 'btn-danger': addProblemOn, 'btn-primary': !addProblemOn }" @click="addProblemClicked">{{ addButton }}</button>
		</div>
	</div>`
}

var app = new Vue({
	el: '#app',
	components: {
		problemstab
	},
	data: {
		message: 'Hello Vue !'
	}
})
