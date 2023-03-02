$(document).ready(function(){

    var texty1 = ''
    var texty2 = ''
    var texty3 = ''
    var texty4 = ''

    texty1 += '<div class="nous2">'
    texty1 += '<div class="mag"><img src="img/visuel/visuel_a_venir.jpg" alt=""></div>'
    texty1 += '<div class="nom"><h4>Rodney Stratton</h4><p>Consultant</p></div>'
    texty1 += '<div class="num"><a href="tel:+383 46 901 000"><img src="img/icones/phone-b.png" alt=""><span>+383 46 901 000</span></a></div>'
    texty1 += '<div class="mail"><a href="mailto:info@berishacomfo.al"><img src="img/icones/mail-b.png" alt=""><span>info@berishacomfo.al</span></a></div>'
    texty1 += '<div id="carre"></div>'
    texty1 += '</div>'

    texty2 += '<div class="nous2">'
    texty2 += '<div class="mag"><img src="img/visuel/visuel_a_venir.jpg" alt=""></div>'
    texty2 += '<div class="nom"><h4>Steve Rogers</h4><p>Chef équipe</p></div>'
    texty2 += '<div class="num"><a href="tel:+383 46 901 000"><img src="img/icones/phone-b.png" alt=""><span>+383 46 901 000</span></a></div>'
    texty2 += '<div class="mail"><a href="mailto:info@berishacomfo.al"><img src="img/icones/mail-b.png" alt=""><span>info@berishacomfo.al</span></a></div>'
    texty2 += '<div id="carre"></div>'
    texty2 += '</div>'

    texty3 += '<div class="nous2">'
    texty3 += '<div class="mag"><img src="img/visuel/visuel_a_venir.jpg" alt=""></div>'
    texty3 += '<div class="nom"><h4>Scoot Lang</h4><p>Directeur chantier</p></div>'
    texty3 += '<div class="num"><a href="tel:+383 46 901 000"><img src="img/icones/phone-b.png" alt=""><span>+383 46 901 000</span></a></div>'
    texty3 += '<div class="mail"><a href="mailto:info@berishacomfo.al"><img src="img/icones/mail-b.png" alt=""><span>info@berishacomfo.al</span></a></div>'
    texty3 += '<div id="carre"></div>'
    texty3 += '</div>'

    texty4 += '<div class="nous2">'
    texty4 += '<div class="mag"><img src="img/visuel/visuel_a_venir.jpg" alt=""></div>'
    texty4 += '<div class="nom"><h4>Sabrina Coppers</h4><p>Responsable communication</p></div>'
    texty4 += '<div class="num"><a href="tel:+383 46 901 000"><img src="img/icones/phone-b.png" alt=""><span>+383 46 901 000</span></a></div>'
    texty4 += '<div class="mail"><a href="mailto:info@berishacomfo.al"><img src="img/icones/mail-b.png" alt=""><span>info@berishacomfo.al</span></a></div>'
    texty4 += '<div id="carre"></div>'
    texty4 += '</div>'

    $( "#n1" ).click(function() {
        $("#n1").html(texty1)
      });

      $( "#n2" ).click(function() {
        $("#n2").html(texty2)
      });

      $( "#n3" ).click(function() {
        $("#n3").html(texty3)
      });

      $( "#n4" ).click(function() {
        $("#n4").html(texty4)
      });

    // AJAX
    $.ajax({
        url: '',

        type: 'GET',

        data: {},

        dataType: 'json',

        success: function(data){
            
        }
    })

})