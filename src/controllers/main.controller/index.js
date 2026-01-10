class MainController {
    constructor(){}

    index (req, res, next) {
        return res.status(200).json({ Api: 'Online'});
    }

}

module.exports = new MainController();