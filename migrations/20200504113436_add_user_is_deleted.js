exports.up = knex => {
  return knex.schema.table("user", table => {
    table.boolean("is_deleted").defaultTo(false);
  });
};

exports.down = knex => {
  return knex.schema.table("user", table => {
    table.dropColumn("is_deleted");
  });
};
