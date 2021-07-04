function TeacherService() {
    this.getTeacherListAPI = function() {
        return axios({
            url: `https://60db09f4801dcb0017290db1.mockapi.io/api/teachers`,
            method: "GET"
        })
    }
}