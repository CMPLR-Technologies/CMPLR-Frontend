export const validatePosting = (title, content) => {
    let errors = [];
    if (content === '') {
        errors.push('Content of post cannot be empty');
    }
    return errors;
};
