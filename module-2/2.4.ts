{
    // interface - generic

    interface Developer <T, X = null> {
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number
        }
        smartWatch: T;
        bike? : X
    }

    type EmilabWatch = {
        brand: string;
        model: string;
        display: string;
    }

    const poorDeveloper : Developer <EmilabWatch> = {
        name: "Poor Dev",
        computer: {
            brand: "Asus",
            model: 'X-255UR',
            releaseYear: 2013
        },
        smartWatch: {
            brand: 'Emilab',
            model: 'kw66',
            display: 'OLED'
        }
    }


    interface AppleWatch {
        brand: string,
        model: string,
        heartTrack: boolean;
        sleepTrack: boolean;
    }
    interface YamahaBike {
        model: string;
        engineCapacity: string
    }
    const richDeveloper : Developer<AppleWatch, YamahaBike> = {
        name: "Rich Dev",
        computer: {
            brand: "HP",
            model: 'X-something',
            releaseYear: 2018,
        },
        smartWatch: {
            brand: 'Emilab',
            model: 'kw66',
            heartTrack: true,
            sleepTrack: true,
        },
        bike: {
            model: "Yamaha",
            engineCapacity: '100cc'
        }
    }
    



    // 
}