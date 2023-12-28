export const authConfig = {
    email: {
        enabled: true,
        withoutPassword: false,
    },
    social: {
        enabled: true,
        providers: {
            google: {
                enabled: true,
            },
            facebook: {
                enabled: false,
            },
            github: {
                enabled: false,
            },
            apple: {
                enabled: false,
            },
            twitter: {
                enabled: false,
            },
        }
    }
}