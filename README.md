heinzelmannchen-gen-ask
======================

This generator creates data using inquirer.
It will prompt you for the defined properties.

If you use this generator in a .heinzelrc, you need to configurate a db-connection.

Example .heinzelrc
------------------

```json
{
    "domains": {
        // ...
    },
    "generators": {
        "heinzelmannchen-gen-ask": {
            "npm": "heinzelmannchen-gen-ask",
            "config": {
                "ask": [{
                    "type": "input",
                    "name": "table_name",
                    "message": "Enter table name"
                }]
            }
        }
    },
    "templates": {
        // ...
    }
}
```
