function getBlogs(){
    let blogs = [
        {
            title: "Pirmas",
            image: "https://picsum.photos/500/300?random=1",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut mollitia labore recusandae quae magnam harum repellendus impedit, officia aliquid ullam corporis saepe ea id obcaecati. Aspernatur provident distinctio necessitatibus modi."
        },
        {
            title: "Antras",
            image: "https://picsum.photos/500/300?random=2",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut mollitia labore recusandae quae magnam harum repellendus impedit, officia aliquid ullam corporis saepe ea id obcaecati. Aspernatur provident distinctio necessitatibus modi."
        },
        {
            title: "Trečias",
            image: "https://picsum.photos/500/300?random=3",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut mollitia labore recusandae quae magnam harum repellendus impedit, officia aliquid ullam corporis saepe ea id obcaecati. Aspernatur provident distinctio necessitatibus modi."
        },
        {
            title: "Pirmas",
            image: "https://picsum.photos/500/300?random=1",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut mollitia labore recusandae quae magnam harum repellendus impedit, officia aliquid ullam corporis saepe ea id obcaecati. Aspernatur provident distinctio necessitatibus modi."
        },
        {
            title: "Antras",
            image: "https://picsum.photos/500/300?random=2",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut mollitia labore recusandae quae magnam harum repellendus impedit, officia aliquid ullam corporis saepe ea id obcaecati. Aspernatur provident distinctio necessitatibus modi."
        },
        {
            title: "Trečias",
            image: "https://picsum.photos/500/300?random=3",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut mollitia labore recusandae quae magnam harum repellendus impedit, officia aliquid ullam corporis saepe ea id obcaecati. Aspernatur provident distinctio necessitatibus modi."
        }
    ];

    return blogs;
}

function getTop3Blogs(){
    let blogs = getBlogs();

    let newBlogs = [];

    for (let index = 0; index < 3; index++) {
        const blog = blogs[index];
        newBlogs.push(blog);
    }

    return newBlogs;
}