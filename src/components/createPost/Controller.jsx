export const validatePosting = (title, content) => {
    let errors = [];
    if (title === '') {
        errors.push('Title cannot be empty');
    }
    if (content === '') {
        errors.push('Content of post cannot be empty');
    }
    return errors;
};
