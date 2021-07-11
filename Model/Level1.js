const level1 = new Level( 
    [new Chicken(),
     new Chicken(),
     new Chicken(),
     new Chicken(),
    new Endboss],


[new Cloud,


],

[new Render('img/5.Fondo/Capas/5.cielo_1920-1080px.png', -2*719),
new Render('img/5.Fondo/Capas/3.Fondo3/1.png', -2*719), 
new Render('img/5.Fondo/Capas/2.Fondo2/1.png', -2*719),
new Render('img/5.Fondo/Capas/1.suelo-fondo1/1.png', -2*719),

    new Render('img/5.Fondo/Capas/5.cielo_1920-1080px.png', -1*719),
    new Render('img/5.Fondo/Capas/3.Fondo3/2.png', -1*719), 
    new Render('img/5.Fondo/Capas/2.Fondo2/2.png', -1*719),
    new Render('img/5.Fondo/Capas/1.suelo-fondo1/2.png', -1*719),

    new Render('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 0*719),
    new Render('img/5.Fondo/Capas/3.Fondo3/1.png', 0*719), 
    new Render('img/5.Fondo/Capas/2.Fondo2/1.png', 0*719),
    new Render('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 0*719),

    new Render('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 1*719),
    new Render('img/5.Fondo/Capas/3.Fondo3/2.png', 1*719), 
    new Render('img/5.Fondo/Capas/2.Fondo2/2.png', 1*719),
    new Render('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 1*719),

    new Render('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 2*719),
    new Render('img/5.Fondo/Capas/3.Fondo3/1.png', 2*719), 
    new Render('img/5.Fondo/Capas/2.Fondo2/1.png', 2*719),
    new Render('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 2*719),
       
    new Render('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 3*719),
    new Render('img/5.Fondo/Capas/3.Fondo3/2.png', 3*719), 
    new Render('img/5.Fondo/Capas/2.Fondo2/2.png', 3*719),
    new Render('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 3*719),

    new Render('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 4*719),
    new Render('img/5.Fondo/Capas/3.Fondo3/1.png', 4*719), 
    new Render('img/5.Fondo/Capas/2.Fondo2/1.png', 4*719),
    new Render('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 4*719)]
);



function drawBachgroundImages(){
    for (let i = -100; i < 100; i++) {
        const element = array[i];
        [new Render('img/5.Fondo/Capas/5.cielo_1920-1080px.png', i*719),
        new Render('img/5.Fondo/Capas/3.Fondo3/1.png', i*719), 
        new Render('img/5.Fondo/Capas/2.Fondo2/1.png', i*719),
        new Render('img/5.Fondo/Capas/1.suelo-fondo1/1.png', i*719),
        
            new Render('img/5.Fondo/Capas/5.cielo_1920-1080px.png', (i+1)*719),
            new Render('img/5.Fondo/Capas/3.Fondo3/2.png', (i+1)*719), 
            new Render('img/5.Fondo/Capas/2.Fondo2/2.png', (i+1)*719),
            new Render('img/5.Fondo/Capas/1.suelo-fondo1/2.png', (i+1)*719),
        ]  
    }
}