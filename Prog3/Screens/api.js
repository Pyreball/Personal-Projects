
const processStudents = (user) => {
    return {
        name: `${user.name.first} ${user.name.last}`,
        number: user.phone,
        image: user.picture.medium,
    }
}

const addKeys = (val, key) => ({ key, ...val })

export const fetchStudents = async (num) => {
    try {
        const response = await fetch('https://randomuser.me/api/?results='+ num +'&nat=us');
        const {results} = await response.json();
        return results.map(processStudents).map(addKeys);
    }
    catch (err) {
        console.log(err);
    }

}
