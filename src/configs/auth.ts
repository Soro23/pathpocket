export const authConfig = {
    email: {
        enabled: true,
        withoutPassword: false,
    },
    social: {
        enabled: false,
        providers: {
            google: {
                enabled: true,
            },
            facebook: {
                enabled: true,
            },
            github: {
                enabled: true,
            },
            apple: {
                enabled: true,
            },
            twitter: {
                enabled: true,
            },
        }
    }
}