export const validateStepOne = (email, password, blog) => {
    let errors = [];

    if (!email || email.length === 0) {
        errors.push('Email is required');
    }
    if (!password || password.length <= 7) {
        errors.push('Password must contain at least 8 char');
    }
    if (!blog || blog.length === 0) {
        errors.push('Blog name is required');
    }

    return errors;
};

export const validateStepTwo = age => {
    let errors = [];

    if (isNaN(age)) {
        errors.push('Your age must be a valid number');
    } else if (age < 18 || age > 80) {
        errors.push('Age must be between 18-80');
    }

    return errors;
};

export const validateGoogle = (blogName, age) => {
    if (age < 18 || age > 80) {
        return 'Age must be between 18-80';
    }
    if (blogName && blogName?.length < 2 && blogName?.length > 64) {
        return 'Blog name must contain between 2-64 characters';
    }
    return '';
};
