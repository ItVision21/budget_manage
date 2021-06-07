import { sold, credit, debit,source } from "../package.json";
// ...
//
Vue.use(form_budget, {
  sold,
  credit,
  debit,
  source,
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  }
});


//creation du table
var con = mysql.createConnection({
  host: "",
  user: "",
  password: "",
  database: "itvision"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE budget (sold real(25), debit real(25)), credit real(25)), source vatchar(25))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table crée ");
  });
});

// insertion du données 


con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "insert into budget (sold , debit , credit , source )  values (sold, credit , debit , source)";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("changement bien affecté");
    });
  });


  
// selectioné la dernière modification depuis la table budget

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM budget ORDER BY ID DESC LIMIT 1 ", function (err, result, fields) {
      if (err) throw err;
      const result=result;
    });
  });

  result.credit=result.credit+credit;
  result.source=source;

  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "insert into budget (credit , source )  values ( result.credit , result.source)";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("changement bien affecté");
    });
  });