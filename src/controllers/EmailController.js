const nodemailer = require('nodemailer')

module.exports = {
    sendEmail(req, res) {
        const { name } = req.params
        const user = ''     // definir e-mail
        const pass = ''     // definir senha
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            secure: true,
            port: 465,
            auth: {
                user: user,
                pass: pass
            }
        })
        transporter.sendMail({
            from: user,
            to: '',      // definir e-mail destino
            subject: 'Confirmação',
            text: `Olá, ${name}. Obrigado pelo envio das informações!`
        }).then(info => {
            res.send(info)
        }).catch(error => {
            res.send(error)
        })
    }
}