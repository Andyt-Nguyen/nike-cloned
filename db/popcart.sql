select * from users
join cart
on users.id = cart.customer_id
join nikeproducts
on nikeproducts.id = cart.product_id
where users.id = $1
