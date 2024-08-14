let course = {
    name: 'JavaScript for Beginners',
    duration: 3,
    sections: 5
}

for (const key in course) {
    console.log(course[key]);
}

