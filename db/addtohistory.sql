insert into history
(customer_id, product_id)
values ($1,$2) returning customer_id, product_id
