

export default class HomeController {
    /**
     * name
     */
    public index(req, res) {
        return res.json({
            method: 'HomeController'
        })
    }
}