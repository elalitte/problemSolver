<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  <link rel="stylesheet" href="css/style.css">
  <title>Problem solver</title>
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
</head>
<body>
  <div id="app" class="container">
	<div id="ontop"></div>
	<div id="top">
	  <h1>Collective Problem Solver</h1>
	</div>
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
		<tr>
		  <th scope="row">{{ message }}</th>
		  <td>La salle manque de luminosité et il faudrait trouver une solution simple et à coût réduit pour l'améliorer</td>
		  <td align="center">10<button type="button" class="btn btn-primary btn-sm">Votez !</button></td>
		  <td align="center">7</td>
		  <td>EL</td>
		  <td>MF, MD, CL</td>
		  <td>15 mars 2020</td>
		</tr>
		<tr>
		  <th scope="row">Absences des étudiants</th>
		  <td>Les élèves sont souvent absents et nous n'avons pas trouvé de solution miracle pour empêcher cela</td>
		  <td>10</td>
		  <td>7</td>
		  <td>JC</td>
		  <td>HL, TO, MI</td>
		  <td>25 février 2021</td>
		</tr>
		</tbody>
	  </table>
	</div>
  </div>
  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
  <script src="js/app.js"></script>
</body>
</html>
