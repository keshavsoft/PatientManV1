const doctors = [
    {
        id: 1,
        name: "Dr. Keshav Nalam",
        degree: "MDS - Periodontology and Oral Implantology, BDS",
        speciality: "Dentist",
        location: "Florida, USA",
        img: "../assets/img/doctors/doctor-thumb-01.jpg",
        service1: "Dental Fillings",
        service2: "Whitening",
        likes: "98%",
        feedback: "17 Feedback",
        rating: "(17)",
        price: "$300 - $1000"
    },
    {
        id: 2,
        name: "Dr. Meghana Degala",
        degree: "BDS, MDS - Oral & Maxillofacial Surgery",
        speciality: "Dentist",
        location: "New York, USA",
        img: "../assets/img/doctors/doctor-thumb-02.jpg",
        service1: "Dental Fillings",
        service2: "Whitening",
        likes: "100%",
        feedback: "35 Feedback",
        rating: "(35)",
        price: "$50 - $300"
    }
];

let StartFunc = ({ inResponseAsJson }) => {
    LocalFuncForLoop({ inDoctorsArray: inResponseAsJson });
};


const LocalFuncForLoop = ({ inDoctorsArray }) => {

    const template = document.getElementById("doctorTemplate");
    const container = document.getElementById("doctorContainer");

    inDoctorsArray.forEach(doc => {
        const clone = template.content.cloneNode(true);

        clone.querySelector(".doctor-img-src").src = doc.img;
        clone.querySelector(".doctor-name").textContent = doc.DoctorName;
        clone.querySelector(".doctor-degree").textContent = doc.degree;
        clone.querySelector(".doctor-speciality").textContent = doc.speciality;
        clone.querySelector(".doctor-location").append(doc.location);
        clone.querySelector(".right-location").textContent = doc.location;
        clone.querySelector(".service1").textContent = doc.service1;
        clone.querySelector(".service2").textContent = doc.service2;
        clone.querySelector(".likes").textContent = doc.likes;
        clone.querySelector(".feedback").textContent = doc.feedback;
        clone.querySelector(".doctor-rating").textContent = doc.rating;
        clone.querySelector(".price").textContent = doc.price;

        const jVarLocalBookAppointmentClass = clone.querySelector(".BookAppointmentClass");
        jVarLocalBookAppointmentClass.href += `?${doc.id}`;
        console.log("aaaaaaaaaa : ", jVarLocalBookAppointmentClass.href);

        // debugger;

        container.appendChild(clone);
    });

};

export { StartFunc };