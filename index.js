const express = require('express')
const bodyParser = require('body-parser')
const path = require('path');
const massive = require('massive');
const cors = require('cors');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const session = require('express-session');
const conn = massive.connectSync({connectionString:"postgres://postgres:@localhost:4321/products"});
const app = module.exports = express();



app.use(session({
  resave: true, //Without this you get a constant warning about default values
  saveUninitialized: true, //Without this you get a constant warning about default values
  secret: 'supersecretsecret'
}))
app.use(passport.initialize());
app.use(passport.session());



app.use(express.static(path.join(__dirname + '/public')));
app.set("db", conn);
const db = app.get('db');
app.use(bodyParser.json());
app.use(cors());




passport.use(new Auth0Strategy({
  domain:       "andythenuge.auth0.com",
  clientID:     "Q6AHdV6svawL5PGboUN8FoOW2Ew5YPSt",
  clientSecret: "7ss1ck_jptNZ8A17AX6pNMOZ5KIAs1qAH1ZYTrHa966U7Y-VXBi-sGUbpF_20TGx",
  callbackURL:  'http://localhost:3000/auth/callback'
},


function(accessToken, refreshToken, extraParams, profile, done) {
  // console.log(profile);
  db.getUserByAuthId([profile.id], function(err, user) {
    user = user[0];
		// console.log(profile);
    if (!user) { //if there isn't one, we'll create one!
    console.log('CREATING USER');
    if (profile.name.familyName && profile.name.givenName) {
      var data =
      [
        profile.displayName,
        profile.id
      ]

    } else {

      var data =
      [
        profile.displayName,
        profile.id
      ]

    }
    db.createUserByAuth(data, function(err, user) {
      console.log('USER CREATED', user);
      return done(err, user[0]); // GOES TO SERIALIZE USER
    })
  } else { //when we find the user, return it
    // console.log('FOUND USER', user);
    return done(err, user);
  }
})
}
));

//THIS IS INVOKED ONE TIME TO SET THINGS UP
passport.serializeUser(function(userA, done) {
  // console.log('serializing', userA);
  //Things you might do here :
  //Serialize just the id, get other information to add to session,
  done(null, userA); //PUTS 'USER' ON THE SESSION
});

//USER COMES FROM SESSION - THIS IS INVOKED FOR EVERY ENDPOINT
passport.deserializeUser(function(userB, done) {

  //Things you might do here :
  // Query the database with the user id, get other information to put on req.user
  done(null, userB); //PUTS 'USER' ON REQ.USER
});



app.get('/auth', passport.authenticate('auth0'));


app.get('/auth/callback',
passport.authenticate('auth0', {successRedirect: '/#!/'}), function(req, res) {
  // console.log(req.user);
  res.status(200).send(req.user);
})

app.get('/auth/me', function(req, res) {
  // console.log(req.user);
  if (!req.user) return res.sendStatus(404);
  //THIS IS WHATEVER VALUE WE GOT FROM userC variable above.
  res.status(200).send(req.user);
})

app.get('/auth/logout', function(req, res) {
  console.log('at the server')
  req.logout();
  res.redirect('/');
})

app.get('/username', function(req, res){
	db.login(function(err, username){
		res.send(username)
	});
});


// Endpoints
app.get('/allshoes', function(req, res){
	db.getAllProds(function(err, shoes){
		res.send(shoes)
	})
});

//Shopping Cart
app.post('/history', function(req,res){
	db.addtohistory([req.body.user_id, req.body.product_id], function(err,history){
		if (err) {
			console.log(err);
		}
		res.send(history);
	});
});


////////////
//NikeMen//
//////////
app.get('/nikemshoes', function(req, res){
	db.mensproducts(function(err, shoes){
		res.send(shoes);
	});
});

app.get('/nikemlsshoes', function(req,res){
	db.menslifestyle(function(err, shoes){
		// console.log(shoes);
		res.send(shoes);
	});
});

app.get('/nikemrnshoes', function(req, res){
	db.mensrunning(function(err, shoes){
		res.send(shoes);
	});
});

app.get('/nikembshoes', function(req, res){
	db.mensbasketball(function(err, shoes){
		res.send(shoes);
	});
});

app.get('/nikemsshoes', function(req, res){
	db.menssoccer(function(err, shoes){
		res.send(shoes);
	});
});

app.get('/niketgshoes', function(req, res){
	db.menstraining(function(err, shoes){
		res.send(shoes);
	});
});



//////////////
//NikeWomen//
////////////
app.get('/nikewshoes', function(req, res){
	db.womensproducts(function(err, shoes){
		res.send(shoes);
	});
});

app.get('/nikewlsshoes', function(req, res){
	db.womenslifestyle(function(err, shoes){
		res.send(shoes)
	});
});

app.get('/nikewrnshoes', function(req, res){
	db.womensrunning(function(err, shoes){
		res.send(shoes);
	});
});

app.get('/nikewbshoes', function(req, res){
	db.womensbasketball(function(err, shoes){
		res.send(shoes);
	});
});

app.get('/nikewsshoes',function(req, res){
	db.womenssoccer(function(err, shoes){
		res.send(shoes);
	});
});

app.get('/nikewtgshoes', function(req, res){
	db.womenstraining(function(err, shoes){
		res.send(shoes);
	});
});



/////////////
//Nike Boys/
///////////
app.get('/nikebshoes', function(req, res){
	db.boyproducts(function(err, shoes){
		res.send(shoes);
	});
});

app.get('/nikeblsshoes', function(req, res){
	db.boyslifestyle(function(err, shoes){
		res.send(shoes);
	});
});

app.get('/nikebrunning', function(req, res){
	db.boysrunning(function(err, shoes){
		// console.log(shoes);
		res.send(shoes);
	})
})

app.get('/nikebbasketball', function(req, res){
	db.boysbasketball(function(err, shoes){
		res.send(shoes);
	})
})

app.get('/nikebsoccer', function(req, res){
	db.boyssoccer(function(err, shoes){
		res.send(shoes);
	})
})

app.get('/niketraining', function(req, res){
	db.boystraining(function(err, shoes){
		res.send(shoes);
	})
})




/////////////
//NikeGirl//
///////////
app.get('/nikegshoes', function(req, res){
	db.girlproducts(function(err, shoes){
		// console.log('INDEX', shoes);
		res.send(shoes)
	});
});

app.get('/nikeglsshoes', function(req, res){
	db.girllifestyle(function(err, shoes){
		res.send(shoes);
	});
});

app.get('/nikegrnshoes', function(req, res){
	db.girlrunning(function(err, shoes){
		res.send(shoes);
	})
});

app.get('/nikegbshoes', function(req, res){
	db.girlbasketball(function(err, shoes){
		res.send(shoes);
	})
});

app.get('/nikegsshoes', function(req, res){
	db.girlsoccer(function(err, shoes){
		res.send(shoes);
	})
});

app.get('/nikegjshoes', function(req, res){
	db.girljordan(function(err, shoes){
		res.send(shoes);
	});
});




app.listen(3000, function(){
	console.log('The service is now running...');
});
