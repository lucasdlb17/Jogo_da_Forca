var palavras = ["jogo", "mapa", "saco", "santo", "grave", "bolso", "nuvem", "ninja", "besta", "planta", "fresco", "macaco", "panela", "tortura", "cavalo", "escola", "bancada", "bobeira", "cadeira", "celular", "carteira", "cachorro", "cachoeira"];
var palavra = palavras[getRandom()];
var fase = 0;

function começou(){
    if(palavra.length == 4)
    {
        document.getElementById('word1').innerHTML = '_ ';
        document.getElementById('word2').innerHTML = '_ ';
        document.getElementById('word3').innerHTML = '_ ';
        document.getElementById('word4').innerHTML = '_ ';
    }
    else if(palavra.length == 5)
    {
        document.getElementById('word1').innerHTML = '_ ';
        document.getElementById('word2').innerHTML = '_ ';
        document.getElementById('word3').innerHTML = '_ ';
        document.getElementById('word4').innerHTML = '_ ';
        document.getElementById('word5').innerHTML = '_ ';
    }
    else if(palavra.length == 6)
    {
        document.getElementById('word1').innerHTML = '_ ';
        document.getElementById('word2').innerHTML = '_ ';
        document.getElementById('word3').innerHTML = '_ ';
        document.getElementById('word4').innerHTML = '_ ';
        document.getElementById('word5').innerHTML = '_ ';
        document.getElementById('word6').innerHTML = '_ ';
    }
    else if(palavra.length == 7){
        
        document.getElementById('word1').innerHTML = '_ ';
        document.getElementById('word2').innerHTML = '_ ';
        document.getElementById('word3').innerHTML = '_ ';
        document.getElementById('word4').innerHTML = '_ ';
        document.getElementById('word5').innerHTML = '_ ';
        document.getElementById('word6').innerHTML = '_ ';
        document.getElementById('word7').innerHTML = '_ ';
    }
    else if(palavra.length == 8)
    {
        document.getElementById('word1').innerHTML = '_ ';
        document.getElementById('word2').innerHTML = '_ ';
        document.getElementById('word3').innerHTML = '_ ';
        document.getElementById('word4').innerHTML = '_ ';
        document.getElementById('word5').innerHTML = '_ ';
        document.getElementById('word6').innerHTML = '_ ';
        document.getElementById('word7').innerHTML = '_ ';
        document.getElementById('word8').innerHTML = '_ ';
    }
    else if(palavra.length == 9)
    {
        document.getElementById('word1').innerHTML = '_ ';
        document.getElementById('word2').innerHTML = '_ ';
        document.getElementById('word3').innerHTML = '_ ';
        document.getElementById('word4').innerHTML = '_ ';
        document.getElementById('word5').innerHTML = '_ ';
        document.getElementById('word6').innerHTML = '_ ';
        document.getElementById('word7').innerHTML = '_ ';
        document.getElementById('word8').innerHTML = '_ ';
        document.getElementById('word9').innerHTML = '_ ';
    }
}

function palavra_nova()
{
    location.reload();
}

function jogar(letra)
{
    if(palavra == palavras[0])
    {
        if(letra == 'j')
        {
            document.getElementById('word1').innerHTML = 'j';
        }
        else if(letra == 'o')
        {
            document.getElementById('word2').innerHTML = 'o';
            document.getElementById('word4').innerHTML = 'o';
        }
        else if(letra == 'g')
        {
            document.getElementById('word3').innerHTML = 'g';
        }
        else
        {
            fase++;
            document.getElementById('espaço').innerHTML = '<img src="'+fase+'.jpg" class="forca">';
            if(document.getElementById('espaço').innerHTML == '<img src="1.jpg" class="forca">')
            {
                setTimeout(function(){
                alert('Dica 1: É motivo de vício de muita gente.');
                }, 50);    
            }
            else if(document.getElementById('espaço').innerHTML == '<img src="4.jpg" class="forca">')
            {
                setTimeout(function(){
                    alert('Dica 2: É a sua atenção nesse momento.');
                    }, 50); 
            }
        }
        
    }

    if(palavra == palavras[1])
    {
        if(letra == 'm')
        {
            document.getElementById('word1').innerHTML = 'm';
        }
        else if(letra == 'a')
        {
            document.getElementById('word2').innerHTML = 'a';
            document.getElementById('word4').innerHTML = 'a';
        }
        else if(letra == 'p')
        {
            document.getElementById('word3').innerHTML = 'p';
        }
        else
        {
            fase++;
            document.getElementById('espaço').innerHTML = '<img src="'+fase+'.jpg" class="forca">';
            if(document.getElementById('espaço').innerHTML == '<img src="1.jpg" class="forca">')
            {
                setTimeout(function(){
                alert('Dica 1: É um instrumento utilizado para se localizar.');
                }, 50);    
            }
            else if(document.getElementById('espaço').innerHTML == '<img src="4.jpg" class="forca">')
            {
                setTimeout(function(){
                    alert('Dica 2: É um desenho representativo de uma região.');
                    }, 50); 
            }
        }
        
    }

    if(palavra == palavras[2])
    {
        if(letra == 's')
        {
            document.getElementById('word1').innerHTML = 's';
        }
        else if(letra == 'a')
        {
            document.getElementById('word2').innerHTML = 'a';
        }
        else if(letra == 'c')
        {
            document.getElementById('word3').innerHTML = 'c';
        }
        else if(letra == 'o')
        {
            document.getElementById('word4').innerHTML = 'o';
        }
        else
        {
            fase++;
            document.getElementById('espaço').innerHTML = '<img src="'+fase+'.jpg" class="forca">';
            if(document.getElementById('espaço').innerHTML == '<img src="1.jpg" class="forca">')
            {
                setTimeout(function(){
                alert('Dica 1: É o que muita gente enche quando querem incomodar.');
                }, 50);    
            }
            else if(document.getElementById('espaço').innerHTML == '<img src="4.jpg" class="forca">')
            {
                setTimeout(function(){
                    alert('Dica 2: Tambem é o que puxam quando querem bajular.');
                    }, 50); 
            }
        }
    
    }
    if(palavra == palavras[3])
    {
        if(letra == 's')
        {
            document.getElementById('word1').innerHTML = 's';
        }
        else if(letra == 'a')
        {
            document.getElementById('word2').innerHTML = 'a';
        }
        else if(letra == 'n')
        {
            document.getElementById('word3').innerHTML = 'n';
        }
        else if(letra == 't')
        {
            document.getElementById('word4').innerHTML = 't';
        }
        else if(letra == 'o')
        {
            document.getElementById('word5').innerHTML = 'o';
        }
        else
        {
            fase++;
            document.getElementById('espaço').innerHTML = '<img src="'+fase+'.jpg" class="forca">';
            if(document.getElementById('espaço').innerHTML == '<img src="1.jpg" class="forca">')
            {
                setTimeout(function(){
                alert('Dica 1: É adjetivo para alguém puro e inoscente.');
                }, 50);    
            }
            else if(document.getElementById('espaço').innerHTML == '<img src="4.jpg" class="forca">')
            {
                setTimeout(function(){
                    alert('Dica 2: É sinônimo de sagrado.');
                    }, 50); 
            }
        }
    
    }

    if(palavra == palavras[4])
    {
        if(letra == 'g')
        {
            document.getElementById('word1').innerHTML = 'g';
        }
        else if(letra == 'r')
        {
            document.getElementById('word2').innerHTML = 'r';
        }
        else if(letra == 'a')
        {
            document.getElementById('word3').innerHTML = 'a';
        }
        else if(letra == 'v')
        {
            document.getElementById('word4').innerHTML = 'v';
        }
        else if(letra == 'e')
        {
            document.getElementById('word5').innerHTML = 'e';
        }
        else
        {
            fase++;
            document.getElementById('espaço').innerHTML = '<img src="'+fase+'.jpg" class="forca">';
            if(document.getElementById('espaço').innerHTML == '<img src="1.jpg" class="forca">')
            {
                setTimeout(function(){
                alert('Dica 1: É algo que tem peso.');
                }, 50);    
            }
            else if(document.getElementById('espaço').innerHTML == '<img src="4.jpg" class="forca">')
            {
                setTimeout(function(){
                    alert('Dica 2: É o inverso de agudo.');
                    }, 50); 
            }
        }
    
    }

    if(palavra == palavras[5])
    {
        if(letra == 'b')
        {
            document.getElementById('word1').innerHTML = 'b';
        }
        else if(letra == 'o')
        {
            document.getElementById('word2').innerHTML = 'o';
            document.getElementById('word5').innerHTML = 'o';
        }
        else if(letra == 'l')
        {
            document.getElementById('word3').innerHTML = 'l';
        }
        else if(letra == 's')
        {
            document.getElementById('word4').innerHTML = 's';
        }
        else
        {
            fase++;
            document.getElementById('espaço').innerHTML = '<img src="'+fase+'.jpg" class="forca">';
            if(document.getElementById('espaço').innerHTML == '<img src="1.jpg" class="forca">')
            {
                setTimeout(function(){
                alert('Dica 1: É, normalmente, um compartimento de celular e carteira.');
                }, 50);    
            }
            else if(document.getElementById('espaço').innerHTML == '<img src="4.jpg" class="forca">')
            {
                setTimeout(function(){
                    alert('Dica 2: É costurado na parte interna da roupa.');
                    }, 50); 
            }
        }
    
    }

    if(palavra == palavras[6])
    {
        if(letra == 'n')
        {
            document.getElementById('word1').innerHTML = 'n';
        }
        else if(letra == 'u')
        {
            document.getElementById('word2').innerHTML = 'u';
        }
        else if(letra == 'v')
        {
            document.getElementById('word3').innerHTML = 'v';
        }
        else if(letra == 'e')
        {
            document.getElementById('word4').innerHTML = 'e';
        }
        else if(letra == 'm')
        {
            document.getElementById('word5').innerHTML = 'm';
        }
        else
        {
            fase++;
            document.getElementById('espaço').innerHTML = '<img src="'+fase+'.jpg" class="forca">';
            if(document.getElementById('espaço').innerHTML == '<img src="1.jpg" class="forca">')
            {
                setTimeout(function(){
                alert('Dica 1: É o que indica uma tempestade.');
                }, 50);    
            }
            else if(document.getElementById('espaço').innerHTML == '<img src="4.jpg" class="forca">')
            {
                setTimeout(function(){
                    alert('Dica 2: Se precipitar transforma-se em chuva.');
                    }, 50); 
            }
        }
    
    }

    if(palavra == palavras[7])
    {
        if(letra == 'n')
        {
            document.getElementById('word1').innerHTML = 'n';
            document.getElementById('word3').innerHTML = 'n';
        }
        else if(letra == 'i')
        {
            document.getElementById('word2').innerHTML = 'i';
        }
        else if(letra == 'j')
        {
            document.getElementById('word4').innerHTML = 'j';
        }
        else if(letra == 'a')
        {
            document.getElementById('word5').innerHTML = 'a';
        }
        else
        {
            fase++;
            document.getElementById('espaço').innerHTML = '<img src="'+fase+'.jpg" class="forca">';
            if(document.getElementById('espaço').innerHTML == '<img src="1.jpg" class="forca">')
            {
                setTimeout(function(){
                alert('Dica 1: É um assassino furtivo.');
                }, 50);    
            }
            else if(document.getElementById('espaço').innerHTML == '<img src="4.jpg" class="forca">')
            {
                setTimeout(function(){
                    alert('Dica 2: É mestre em jutsus.');
                    }, 50); 
            }
        }
    
    }

    if(palavra == palavras[8])
    {
        if(letra == 'b')
        {
            document.getElementById('word1').innerHTML = 'b';
        }
        else if(letra == 'e')
        {
            document.getElementById('word2').innerHTML = 'e';
        }
        else if(letra == 's')
        {
            document.getElementById('word3').innerHTML = 's';
        }
        else if(letra == 't')
        {
            document.getElementById('word4').innerHTML = 't';
        }
        else if(letra == 'a')
        {
            document.getElementById('word5').innerHTML = 'a';
        }
        else
        {
            fase++;
            document.getElementById('espaço').innerHTML = '<img src="'+fase+'.jpg" class="forca">';
            if(document.getElementById('espaço').innerHTML == '<img src="1.jpg" class="forca">')
            {
                setTimeout(function(){
                alert('Dica 1: É uma arma de longa distância.');
                }, 50);    
            }
            else if(document.getElementById('espaço').innerHTML == '<img src="4.jpg" class="forca">')
            {
                setTimeout(function(){
                    alert('Dica 2: Sua munição são dardos.');
                    }, 50); 
            }
        }
    
    }

    if(palavra == palavras[9])
    {
        if(letra == 'p')
        {
            document.getElementById('word1').innerHTML = 'p';
        }
        else if(letra == 'l')
        {
            document.getElementById('word2').innerHTML = 'l';
        }
        else if(letra == 'a')
        {
            document.getElementById('word3').innerHTML = 'a';
            document.getElementById('word6').innerHTML = 'a';
        }
        else if(letra == 'n')
        {
            document.getElementById('word4').innerHTML = 'n';
        }
        else if(letra == 't')
        {
            document.getElementById('word5').innerHTML = 't';
        }        
        else
        {
            fase++;
            document.getElementById('espaço').innerHTML = '<img src="'+fase+'.jpg" class="forca">';
            if(document.getElementById('espaço').innerHTML == '<img src="1.jpg" class="forca">')
            {
                setTimeout(function(){
                alert('Dica 1: É predominante em florestas.');
                }, 50);    
            }
            else if(document.getElementById('espaço').innerHTML == '<img src="4.jpg" class="forca">')
            {
                setTimeout(function(){
                    alert('Dica 2: É um organismo que faz fotossítese.');
                    }, 50); 
            }
        }
    
    }

    if(palavra == palavras[10])
    {
        if(letra == 'f')
        {
            document.getElementById('word1').innerHTML = 'f';
        }
        else if(letra == 'r')
        {
            document.getElementById('word2').innerHTML = 'r';
        }
        else if(letra == 'e')
        {
            document.getElementById('word3').innerHTML = 'e';
        }
        else if(letra == 's')
        {
            document.getElementById('word4').innerHTML = 's';
        }
        else if(letra == 'c')
        {
            document.getElementById('word5').innerHTML = 'c';
        }
        else if(letra == 'o')
        {
            document.getElementById('word6').innerHTML = 'o';
        }
        else
        {
            fase++;
            document.getElementById('espaço').innerHTML = '<img src="'+fase+'.jpg" class="forca">';
            if(document.getElementById('espaço').innerHTML == '<img src="1.jpg" class="forca">')
            {
                setTimeout(function(){
                alert('Dica 1: É uma pessoa que só aceita coisas específicas.');
                }, 50);    
            }
            else if(document.getElementById('espaço').innerHTML == '<img src="4.jpg" class="forca">')
            {
                setTimeout(function(){
                    alert('Dica 2: É adjetivo para ligeiramente frio.');
                    }, 50); 
            }
        }
    
    }

    if(palavra == palavras[11])
    {
        if(letra == 'm')
        {
            document.getElementById('word1').innerHTML = 'm';
        }
        else if(letra == 'a')
        {
            document.getElementById('word2').innerHTML = 'a';
            document.getElementById('word4').innerHTML = 'a';
        }
        else if(letra == 'c')
        {
            document.getElementById('word3').innerHTML = 'c';
            document.getElementById('word5').innerHTML = 'c';
        }
        else if(letra == 'o')
        {
            document.getElementById('word6').innerHTML = 'o';
        }
        else
        {
            fase++;
            document.getElementById('espaço').innerHTML = '<img src="'+fase+'.jpg" class="forca">';
            if(document.getElementById('espaço').innerHTML == '<img src="1.jpg" class="forca">')
            {
                setTimeout(function(){
                alert('Dica 1: É um animal primata.');
                }, 50);    
            }
            else if(document.getElementById('espaço').innerHTML == '<img src="4.jpg" class="forca">')
            {
                setTimeout(function(){
                    alert('Dica 2: É coberto de pelo e tem uma grande cauda.');
                    }, 50); 
            }
        }
    
    }

    if(palavra == palavras[12])
    {
        if(letra == 'p')
        {
            document.getElementById('word1').innerHTML = 'p';
        }
        else if(letra == 'a')
        {
            document.getElementById('word2').innerHTML = 'a';
            document.getElementById('word6').innerHTML = 'a';
        }
        else if(letra == 'n')
        {
            document.getElementById('word3').innerHTML = 'n';
        }
        else if(letra == 'e')
        {
            document.getElementById('word4').innerHTML = 'e';
        }
        else if(letra == 'l')
        {
            document.getElementById('word5').innerHTML = 'l';
        }
        else
        {
            fase++;
            document.getElementById('espaço').innerHTML = '<img src="'+fase+'.jpg" class="forca">';
            if(document.getElementById('espaço').innerHTML == '<img src="1.jpg" class="forca">')
            {
                setTimeout(function(){
                alert('Dica 1: É instrumento de cozinha.');
                }, 50);    
            }
            else if(document.getElementById('espaço').innerHTML == '<img src="4.jpg" class="forca">')
            {
                setTimeout(function(){
                    alert('Dica 2: É usado no fogão.');
                    }, 50); 
            }
        }
    
    }

    if(palavra == palavras[13])
    {
        if(letra == 't')
        {
            document.getElementById('word1').innerHTML = 't';
            document.getElementById('word4').innerHTML = 't';
        }
        else if(letra == 'o')
        {
            document.getElementById('word2').innerHTML = 'o';
        }
        else if(letra == 'r')
        {
            document.getElementById('wordr3').innerHTML = 'r';
            document.getElementById('wordr6').innerHTML = 'r';
        }
        else if(letra == 'u')
        {
            document.getElementById('word5').innerHTML = 'u';
        }
        else if(letra == 'a')
        {
            document.getElementById('word7').innerHTML = 'a';
        }
        else
        {
            fase++;
            document.getElementById('espaço').innerHTML = '<img src="'+fase+'.jpg" class="forca">';
            if(document.getElementById('espaço').innerHTML == '<img src="1.jpg" class="forca">')
            {
                setTimeout(function(){
                alert('Dica 1: É uma dor insuportável.');
                }, 50);    
            }
            else if(document.getElementById('espaço').innerHTML == '<img src="4.jpg" class="forca">')
            {
                setTimeout(function(){
                    alert('Dica 2: É uma maneira de arrancar alguma cofissão.');
                    }, 50); 
            }
        }
    
    }

    if(palavra == palavras[14])
    {
        if(letra == 'c')
        {
            document.getElementById('word1').innerHTML = 'c';
            
        }
        else if(letra == 'a')
        {
            document.getElementById('word2').innerHTML = 'a';
            document.getElementById('word4').innerHTML = 'a';
        }
        else if(letra == 'v')
        {
            document.getElementById('word3').innerHTML = 'v';
        }
        else if(letra == 'l')
        {
            document.getElementById('word5').innerHTML = 'l';
        }
        else if(letra == 'o')
        {
            document.getElementById('word6').innerHTML = 'o';
        }
        else
        {
            fase++;
            document.getElementById('espaço').innerHTML = '<img src="'+fase+'.jpg" class="forca">';
            if(document.getElementById('espaço').innerHTML == '<img src="1.jpg" class="forca">')
            {
                setTimeout(function(){
                alert('Dica 1: É um animal com casco.');
                }, 50);    
            }
            else if(document.getElementById('espaço').innerHTML == '<img src="4.jpg" class="forca">')
            {
                setTimeout(function(){
                    alert('Dica 2: É uma montaria.');
                    }, 50); 
            }
        }
    
    }

    if(palavra == palavras[15])
    {
        if(letra == 'e')
        {
            document.getElementById('word1').innerHTML = 'e';
        }
        else if(letra == 's')
        {
            document.getElementById('word2').innerHTML = 's';
        }
        else if(letra == 'c')
        {
            document.getElementById('word3').innerHTML = 'c';
        }
        else if(letra == 'o')
        {
            document.getElementById('word4').innerHTML = 'o';
        }
        else if(letra == 'l')
        {
            document.getElementById('word5').innerHTML = 'l';
        }
        else if(letra == 'a')
        {
            document.getElementById('word6').innerHTML = 'a';
        }
        else
        {
            fase++;
            document.getElementById('espaço').innerHTML = '<img src="'+fase+'.jpg" class="forca">';
            if(document.getElementById('espaço').innerHTML == '<img src="1.jpg" class="forca">')
            {
                setTimeout(function(){
                alert('Dica 1: É um pesadelo infantil.');
                }, 50);    
            }
            else if(document.getElementById('espaço').innerHTML == '<img src="4.jpg" class="forca">')
            {
                setTimeout(function(){
                    alert('Dica 2: É uma instituição de ensino.');
                    }, 50); 
            }
        }
    
    }

    if(palavra == palavras[16])
    {
        if(letra == 'b')
        {
            document.getElementById('word1').innerHTML = 'b';
        }
        else if(letra == 'a')
        {
            document.getElementById('word2').innerHTML = 'a';
            document.getElementById('word5').innerHTML = 'a';
            document.getElementById('word7').innerHTML = 'a';
        }
        else if(letra == 'n')
        {
            document.getElementById('word3').innerHTML = 'n';
        }        
        else if(letra == 'c')
        {
            document.getElementById('word4').innerHTML = 'c';
        }        
        else if(letra == 'd')
        {
            document.getElementById('word6').innerHTML = 'd';
        }
        else
        {
            fase++;
            document.getElementById('espaço').innerHTML = '<img src="'+fase+'.jpg" class="forca">';
            if(document.getElementById('espaço').innerHTML == '<img src="1.jpg" class="forca">')
            {
                setTimeout(function(){
                alert('Dica 1: É um tipo de mesa.');
                }, 50);    
            }
            else if(document.getElementById('espaço').innerHTML == '<img src="4.jpg" class="forca">')
            {
                setTimeout(function(){
                    alert('Dica 2: É voltada para trabalhar.');
                    }, 50); 
            }
        }
    
    }

    if(palavra == palavras[17])
    {
        if(letra == 'b')
        {
            document.getElementById('word1').innerHTML = 'b';
            document.getElementById('word3').innerHTML = 'b';
        }
        else if(letra == 'o')
        {
            document.getElementById('word2').innerHTML = 'o';
        }
        else if(letra == 'e')
        {
            document.getElementById('word4').innerHTML = 'e';
        }
        else if(letra == 'i')
        {
            document.getElementById('word5').innerHTML = 'i';
        }
        else if(letra == 'r')
        {
            document.getElementById('word6').innerHTML = 'r';
        }
        else if(letra == 'a')
        {
            document.getElementById('word7').innerHTML = 'a';
        }
        else
        {
            fase++;
            document.getElementById('espaço').innerHTML = '<img src="'+fase+'.jpg" class="forca">';
            if(document.getElementById('espaço').innerHTML == '<img src="1.jpg" class="forca">')
            {
                setTimeout(function(){
                alert('Dica 1: É o conteúdo de muitas mentes.');
                }, 50);    
            }
            else if(document.getElementById('espaço').innerHTML == '<img src="4.jpg" class="forca">')
            {
                setTimeout(function(){
                    alert('Dica 2: É o que faz um bobo.');
                    }, 50); 
            }
        }
    
    }

    if(palavra == palavras[18])
    {
        if(letra == 'c')
        {
            document.getElementById('word1').innerHTML = 'c';
        }
        else if(letra == 'a')
        {
            document.getElementById('word2').innerHTML = 'a';
            document.getElementById('word7').innerHTML = 'a';
        }
        else if(letra == 'd')
        {
            document.getElementById('word3').innerHTML = 'd';
        }
        else if(letra == 'e')
        {
            document.getElementById('word4').innerHTML = 'e';
        }
        else if(letra == 'i')
        {
            document.getElementById('word5').innerHTML = 'i';
        }
        else if(letra == 'r')
        {
            document.getElementById('word6').innerHTML = 'r';
        }
        else
        {
            fase++;
            document.getElementById('espaço').innerHTML = '<img src="'+fase+'.jpg" class="forca">';
            if(document.getElementById('espaço').innerHTML == '<img src="1.jpg" class="forca">')
            {
                setTimeout(function(){
                alert('Dica 1: É um assento.');
                }, 50);    
            }
            else if(document.getElementById('espaço').innerHTML == '<img src="4.jpg" class="forca">')
            {
                setTimeout(function(){
                    alert('Dica 2: É sério?');
                    }, 50); 
            }
        }
    }

    if(palavra == palavras[19])
    {
        if(letra == 'c')
        {
            document.getElementById('word1').innerHTML = 'c';
        }
        else if(letra == 'e')
        {
            document.getElementById('word2').innerHTML = 'e';
        }
        else if(letra == 'l')
        {
            document.getElementById('word3').innerHTML = 'l';
            document.getElementById('word5').innerHTML = 'l';
        }
        else if(letra == 'u')
        {
            document.getElementById('word4').innerHTML = 'u';
        }
        else if(letra == 'a')
        {
            document.getElementById('word6').innerHTML = 'a';
        }
        else if(letra == 'r')
        {
            document.getElementById('word7').innerHTML = 'r';
        }
        else
        {
            fase++;
            document.getElementById('espaço').innerHTML = '<img src="'+fase+'.jpg" class="forca">';
            if(document.getElementById('espaço').innerHTML == '<img src="1.jpg" class="forca">')
            {
                setTimeout(function(){
                alert('Dica 1: É indispensável para viver hoje em dia.');
                }, 50);    
            }
            else if(document.getElementById('espaço').innerHTML == '<img src="4.jpg" class="forca">')
            {
                setTimeout(function(){
                    alert('Dica 2: Todos tem perto de si.');
                    }, 50); 
            }
        }
    }

    if(palavra == palavras[20])
    {
        if(letra == 'c')
        {
            document.getElementById('word1').innerHTML = 'c';
        }
        else if(letra == 'a')
        {
            document.getElementById('word2').innerHTML = 'a';
            document.getElementById('word8').innerHTML = 'a';
        }
        else if(letra == 'r')
        {
            document.getElementById('word3').innerHTML = 'r';
            document.getElementById('word7').innerHTML = 'r';
        }
        else if(letra == 't')
        {
            document.getElementById('word4').innerHTML = 't';
        }
        else if(letra == 'e')
        {
            document.getElementById('word5').innerHTML = 'e';
        }
        else if(letra == 'i')
        {
            document.getElementById('word6').innerHTML = 'i';
        }
        else
        {
            fase++;
            document.getElementById('espaço').innerHTML = '<img src="'+fase+'.jpg" class="forca">';
            if(document.getElementById('espaço').innerHTML == '<img src="1.jpg" class="forca">')
            {
                setTimeout(function(){
                alert('Dica 1: É um compartimento de grana.');
                }, 50);    
            }
            else if(document.getElementById('espaço').innerHTML == '<img src="4.jpg" class="forca">')
            {
                setTimeout(function(){
                    alert('Dica 2: É uma mulher que intrega cartas.');
                    }, 50); 
            }
        }
    }

    if(palavra == palavras[21])
    {
        if(letra == 'c')
        {
            document.getElementById('word1').innerHTML = 'c';
            document.getElementById('word3').innerHTML = 'c';
        }
        else if(letra == 'a')
        {
            document.getElementById('word2').innerHTML = 'a';
        }        
        else if(letra == 'h')
        {
            document.getElementById('word4').innerHTML = 'h';
        }
        else if(letra == 'o')
        {
            document.getElementById('word5').innerHTML = 'o';
            document.getElementById('word8').innerHTML = 'o';
        }
        else if(letra == 'r')
        {
            document.getElementById('word6').innerHTML = 'r';
            document.getElementById('word7').innerHTML = 'r';
        }
        else
        {
            fase++;
            document.getElementById('espaço').innerHTML = '<img src="'+fase+'.jpg" class="forca">';
            if(document.getElementById('espaço').innerHTML == '<img src="1.jpg" class="forca">')
            {
                setTimeout(function(){
                alert('Dica 1: É motivo de vício de muita gente.');
                }, 50);    
            }
            else if(document.getElementById('espaço').innerHTML == '<img src="4.jpg" class="forca">')
            {
                setTimeout(function(){
                    alert('Dica 2: É a sua atenção nesse momento.');
                    }, 50); 
            }
        }
    }

    if(palavra == palavras[22])
    {
        if(letra == 'c')
        {
            document.getElementById('word1').innerHTML = 'c';
            document.getElementById('word3').innerHTML = 'c';
        }
        else if(letra == 'a')
        {
            document.getElementById('word2').innerHTML = 'a';
            document.getElementById('word9').innerHTML = 'a';
        }
        else if(letra == 'h')
        {
            document.getElementById('word4').innerHTML = 'h';
        }
        else if(letra == 'o')
        {
            document.getElementById('word5').innerHTML = 'o';
        }
        else if(letra == 'e')
        {
            document.getElementById('word6').innerHTML = 'e';
        }
        else if(letra == 'i')
        {
            document.getElementById('word7').innerHTML = 'i';
        }
        else if(letra == 'r')
        {
            document.getElementById('word8').innerHTML = 'r';
        }
        else
        {
            fase++;
            document.getElementById('espaço').innerHTML = '<img src="'+fase+'.jpg" class="forca">';
            if(document.getElementById('espaço').innerHTML == '<img src="1.jpg" class="forca">')
            {
                setTimeout(function(){
                alert('Dica 1: É motivo de vício de muita gente.');
                }, 50);    
            }
            else if(document.getElementById('espaço').innerHTML == '<img src="4.jpg" class="forca">')
            {
                setTimeout(function(){
                    alert('Dica 2: É a sua atenção nesse momento.');
                    }, 50); 
            }
        }
    }
    if(document.getElementById('espaço').innerHTML == '<img src="6.jpg" class="forca">')
    {
        setTimeout(function(){
        alert('Você Perdeu. A Palavra era: '+ palavra);
        location.reload();
        }, 50);    
    }
    else if ((document.getElementById('word1').innerHTML != '_ ')
     && (document.getElementById('word2').innerHTML != '_ ')
     && (document.getElementById('word3').innerHTML != '_ ')
     && (document.getElementById('word4').innerHTML != '_ ')
     && (document.getElementById('word5').innerHTML != '_ ')
     && (document.getElementById('word6').innerHTML != '_ ')
     && (document.getElementById('word7').innerHTML != '_ ')
     && (document.getElementById('word8').innerHTML != '_ ')
     && (document.getElementById('word9').innerHTML != '_ '))
     {
        setTimeout(function(){
        alert('Você Ganhou!');
        location.reload();
        }, 50);
     }
}

function getRandom(){
    min = Math.ceil(0);
    max = Math.floor(23);
    return Math.floor(Math.random() * (max - min)) + min;
  
  }