let problemstab = {
	data: function () {
		return {
			listeProblems: null,
			addProblemOn: false,
			addButton: "Ajouter un problème"
		}
	},
	methods: {
		addProblemClicked() {
			if (this.addProblemOn) {
				this.addProblemOn = false
				this.addButton = "Ajouter un problème"
			} else {
				this.addProblemOn = true
				this.addButton = "Valider votre problème"
			}
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
			</tr>
			<tr v-show="addProblemOn">
			  <th scope="row"><input type="text" placeholder="Entrez l'intitulé"></th>
			  <td><input type="text" placeholder="Entrez les détails"></td>
			  <td align="center">XXX</td>
			  <td align="center">XXX</td>
			  <td align="center">XXX</td>
			  <td align="center">XXX</td>
			  <td align="center">XXX</td>
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
