const yup = require('yup');

const schema = yup.object().shape({
    name: yup.number().required(),
    password: yup.string()
});


(async () => {
    try {
        await schema.validate({
            name: 1,
            password: '12ew456'
        });
        console.log("ready")
    } catch (ex) {
        console.log(ex.name);
        console.log(ex.message);
        console.log(ex)
    }
})()


// required
// type = required
// path = llave que falta

// error en tipo
// type = typeError
// path = llave que tiene el error
// params.type = tipo esperado

// error en email
// type = email
// path = llave que tiene el error

// error en min
// type = min
// path = llave que tiene el error
// params.min = valor minimo

// error en max
// type = max
// path = llave que tiene el error
// params.max = valor maximo