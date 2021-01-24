export class VinaSignIn {
    email;
    password;
}

export class VinaSignUp {
    firstName;
    lastName;
    email;
    password;
}

export class VinaControl {
    id;
    type;
    name;
    label;
    defaultValue;
    autoComplete;
    options;
}

// Khung chương trình khoá học
export class TemplateCourse {
    id;
    type;
    name;
    description;

    static create(data) {
        return Object.assign(new TemplateCourse(), data)
    }
}

// Giáo án bài học
export class TemplateLesson {
    id;
    courseId;
    name;
    description;

    static create(data) {
        return Object.assign(new TemplateLesson(), data)
    }
}

// Lịch của 1 bài học
export class ExecutedLesson {
    id;
    templateLessonId;
    // Thời gian lesson được lên lịch
    planStartDateTime;
    // Thời gian lesson được dự kiến kết thúc
    planEndDateTime;
}

// Sự điểm danh
export class Participation {
    id;
    executedLessonId;
    // Người dự bài giảng có thể là học viên / giáo viên/ trợ giảng
    participantId;
    status;
    reason;
}

// Khai giảng 1 khoá học (lớp học)
export class ExecutedCourse {
    id;
    courseId;
    name;
    description;
}

// Sự tham gia khoá học
export class Enrollment {
    id;
    executedCourseId;
    participantId;
}

// Thanh viên, có thể là học viên hoặc trợ giảng hoặc giáo viên
export class Participant {
    id;
    name;
    firstName;
    lastName;
    // STUDENT || TEACHER || TEACHING_ASSISTANT
    type;

    static create(data) {
        return Object.assign(new Participant(), data)
    }
}