const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
    try {
        const woopa = await prisma.explorer.upsert({
            where: { name: 'Woopa' },
            update: {},
            create: {
                name: 'Woopa',
                username: 'ajolonauta',
                mission: 'Node'
            },
        });

        const woopa1 = await prisma.explorer.upsert({
            where: { name: 'Woopa1' },
            update: {},
            create: {
                name: 'Woopa1',
                username: 'ajolonauta1',
                mission: 'Node'
            },
        });

        const woopa2 = await prisma.explorer.upsert({
            where: { name: 'Woopa 2' },
            update: {},
            create: {
                name: 'Woopa 2',
                username: 'ajolonauta2',
                mission: 'Java'
            },
        });

        const woopa3 = await prisma.explorer.upsert({
            where: { name: 'Woopa 3' },
            update: {},
            create: {
                name: 'Woopa 3',
                username: 'ajolonauta3',
                mission: 'Node'
            },
        });
        const woopa4 = await prisma.explorer.upsert({
            where: { name: 'Woopa 4' },
            update: {},
            create: {
                name: 'Woopa 4',
                username: 'ajolonauta4',
                mission: 'Node'
            },
        });
        const woopa5 = await prisma.explorer.upsert({
            where: { name: 'Woopa 5' },
            update: {},
            create: {
                name: 'Woopa 5',
                username: 'ajolonauta5',
                mission: 'Node'
            },
        });
        const woopa6 = await prisma.explorer.upsert({
            where: { name: 'Woopa 6' },
            update: {},
            create: {
                name: 'Woopa 6',
                username: 'ajolonauta6',
                mission: 'Node'
            },
        });

        console.log('Create 7 explorers');
    } catch (e) {
        console.error(e);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
})();

(async function main() {
    try {
        const ajolonauta = await prisma.ajolonauta.upsert({
            where: { name: 'Oscar' },
            update: {},
            create: {
                name: 'Oscar',
                lang: 'español',
                missionCommander: 'Carlo'
            },
        });
        const ajolonauta1 = await prisma.ajolonauta.upsert({
            where: { name: 'Luis' },
            update: {},
            create: {
                name: 'Luis',
                lang: 'Ingles',
                missionCommander: 'Carlo'
            },
        });
        const ajolonauta2 = await prisma.ajolonauta.upsert({
            where: { name: 'Alex' },
            update: {},
            create: {
                name: 'Alex',
                lang: 'español',
                missionCommander: 'Carlo'
            },
        });
        const ajolonauta3 = await prisma.ajolonauta.upsert({
            where: { name: 'Juan' },
            update: {},
            create: {
                name: 'Juan',
                lang: 'Ingles',
                missionCommander: 'Carlo'
            },
        });

        console.log('Create 4 explorers');
    } catch (e) {
        console.error(e);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
})();

(async function main() {
    try {
        const missionCommander = await prisma.MissionCommander.upsert({
            where: { name: 'Carlo gilmar' },
            update: {},
            create: {
                name: 'Carlo gilmar',
                username: 'carlogilmar',
                mainStack: 'Backend'
            },
        });

        const missionCommander1 = await prisma.MissionCommander.upsert({
            where: { name: 'Fernanda Ochoa' },
            update: {},
            create: {
                name: 'Fernanda Ochoa',
                username: 'FernandaOchoa',
                mainStack: 'Backend'
            },
        });

        const missionCommander2 = await prisma.MissionCommander.upsert({
            where: { name: 'Juan Rodrigo' },
            update: {},
            create: {
                name: 'Juan Rodrigo',
                username: 'romarpla',
                mainStack: 'Frontend'
            },
        });
        

        console.log('Create 4 explorers');
    } catch (e) {
        console.error(e);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
})();