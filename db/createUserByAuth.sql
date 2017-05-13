insert into login (email, authid)
values ($1, $2) returning email, authid
