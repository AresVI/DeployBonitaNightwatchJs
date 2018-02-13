module.exports = {
    // url: 'http://bonita:8080/bonita/login.jsp',
    url: 'http://localhost:35407/bonita/login.jsp',
    elements: {
        username: {
            selector: '#username'
        },
        password: {
            selector: '#password'
        },
        submit: {
            selector: '#LoginForm > div.formactions > input[type="submit"]'
        }
    }
};