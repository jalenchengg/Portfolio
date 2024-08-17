type AnimationVariants = {
    initial: {
        opacity: number;
        rotateX?: number;
        translateY?: number;
        translateX?: number;
        y?: number;
    };
    enter: (i: number) => {
        opacity: number;
        rotateX?: number;
        translateY?: number;
        translateX?: number;
        y?: number;
        transition: {
            duration: number;
            delay?: number;
            ease: number[];
            opacity?: {
                duration: number;
            };
        };
    };
    exit: {
        opacity: number;
        transition: {
            duration: number;
            type?: string;
            ease: number[] | string;
        };
    };
};

export const perspective: AnimationVariants = {
    initial: {
        opacity: 0,
        rotateX: 90,
        translateY: 80,
        translateX: -20,
    },
    enter: (i: number) => ({
        opacity: 1,
        rotateX: 0,
        translateY: 0,
        translateX: 0,
        transition: {
            duration: 0.65, 
            delay: 0.5 + (i * 0.1), 
            ease: [.215,.61,.355,1],
            opacity: { duration: 0.35 }
        }
    }),
    exit: {
        opacity: 0,
        transition: { duration: 0.5, type: "linear", ease: [0.76, 0, 0.24, 1] }
    }
};

export const slideIn: AnimationVariants = {
    initial: {
        opacity: 0,
        y: 20
    },
    enter: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { 
            duration: 0.5,
            delay: 0.75 + (i * 0.1), 
            ease: [.215,.61,.355,1]
        }
    }),
    exit: {
        opacity: 0,
        transition: { duration: 0.5, type: "tween", ease: "easeInOut" }
    }
};
