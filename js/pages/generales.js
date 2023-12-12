//import {mapas} from "../mapas";

const tipoEleccion = 2;
const tipoRecuento = 1;
const comboPeriodo = document.getElementById('selectPeriodo');
const comboCargo = document.getElementById('selectCargo');
const comboDistrito = document.getElementById('selectDistrito');
const comboSeccion = document.getElementById('selectSeccion');

const circuitoId = "";
const mesaId = "";


let mapas = [
    {id: 1, nombre: 'CABA', valor: '<svg height="210" width="800"><path class="leaflet-interactive" stroke="#18a0fb" stroke-opacity="1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="#18a0fb" fill-opacity="1" fill-rule="evenodd" d="M182 61L179 56L176 58L178 56L176 53L173 55L169 47L168 48L164 45L157 43L158 41L155 41L154 36L149 32L148 33L143 29L142 30L145 32L140 29L138 32L137 30L140 29L139 26L137 28L136 23L133 22L130 27L103 41L81 99L82 134L131 179L159 140L168 137L171 139L174 138L181 141L186 137L195 136L200 130L207 125L205 120L210 118L210 112L205 107L210 110L213 114L215 113L215 110L217 110L218 112L219 111L217 109L221 111L224 109L220 106L222 106L221 102L218 102L216 104L215 103L217 102L212 102L220 101L219 95L216 92L214 86L208 81L200 83L199 80L201 79L202 81L200 77L206 75L203 75L203 73L206 73L201 71L205 70L199 69L198 68L202 68L200 66L195 67L194 66L198 65L188 62L192 62L190 60L183 59L189 64L187 65z"></path></svg>'},
    {id: 2, nombre: 'Buenos Aires', valor: '<svg height="210" width="800"><path class="leaflet-interactive" stroke="#18a0fb" stroke-opacity="1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="#18a0fb" fill-opacity="1" fill-rule="evenodd" d="M171 55L163 53L150 45L147 50L143 49L133 60L114 60L114 151L116 151L120 155L122 156L126 153L128 149L124 145L126 143L126 138L128 138L129 133L126 129L126 122L134 126L139 126L169 119L179 114L189 97L190 89L189 87L186 87L182 82L185 75L181 69L171 63L170 64L170 58z"></path></svg>'},
    {id: 3, nombre: 'Catamarca', valor: '<svg height="210" width="800"><path class="leaflet-interactive" stroke="#18a0fb" stroke-opacity="1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="#18a0fb" fill-opacity="1" fill-rule="evenodd" d="M194 123L195 120L193 106L189 104L185 106L185 108L183 108L180 102L178 104L174 90L171 89L177 80L176 75L171 73L171 61L169 61L166 67L162 64L156 55L157 49L161 49L161 39L129 38L117 36L115 37L116 48L120 62L116 64L115 70L122 80L121 84L110 84L111 85L104 98L104 102L116 101L119 105L118 108L129 111L132 117L137 116L148 118L149 115L151 114L161 116L163 125L166 127L165 131L172 132L178 139L178 141L180 141L187 163L194 162L199 158L198 149L201 149L201 145L199 143L201 135L199 131L194 127L194 124z"></path></svg>'},
    {id: 4, nombre: 'Córdoba', valor: '<svg height="210" width="800"><path class="leaflet-interactive" stroke="#18a0fb" stroke-opacity="1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="#18a0fb" fill-opacity="1" fill-rule="evenodd" d="M125 101L127 108L125 110L126 111L122 123L120 125L121 174L160 174L160 157L172 157L197 120L197 114L193 110L195 109L194 105L191 99L189 98L186 84L190 80L196 57L189 52L188 48L180 48L180 42L174 35L159 33L159 30L153 30L151 28L147 29L147 27L139 26L125 28L126 37L121 41L114 42L112 52L106 66L106 89L117 94L119 101z"></path></svg>'},
    {id: 5, nombre: 'Corrientes', valor: '<svg height="210" width="800"><path class="leaflet-interactive" stroke="#18a0fb" stroke-opacity="1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="#18a0fb" fill-opacity="1" fill-rule="evenodd" d="M106 135L108 138L109 135L116 136L122 132L123 133L131 130L139 134L143 141L148 145L147 139L151 137L153 133L152 131L154 131L159 126L160 121L168 117L169 114L174 109L176 103L180 102L183 95L186 93L189 87L192 86L193 83L197 85L195 80L197 80L198 78L194 73L194 69L188 60L189 58L186 57L180 64L177 60L174 60L173 62L170 60L164 61L145 55L130 56L127 58L124 61L126 69L125 72L123 77L120 77L119 80L120 91L117 100L116 102L114 102L112 106L110 106L108 111L108 117L106 121L109 127L106 133L107 135z"></path></svg>'},
    {id: 6, nombre: 'Chaco', valor: '<svg height="210" width="800"><path class="leaflet-interactive" stroke="#18a0fb" stroke-opacity="1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="#18a0fb" fill-opacity="1" fill-rule="evenodd" d="M152 149L198 149L200 144L198 136L204 132L203 127L210 120L196 108L192 106L189 107L187 106L186 102L180 101L176 93L168 89L167 85L161 78L155 75L147 68L145 64L140 63L129 54L119 51L119 58L95 89L134 89L134 149z"></path></svg>'},
    {id: 7, nombre: 'Chubut', valor: '<svg height="210" width="800"><path class="leaflet-interactive" stroke="#18a0fb" stroke-opacity="1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="#18a0fb" fill-opacity="1" fill-rule="evenodd" d="M94 37L63 37L64 41L59 43L58 41L55 46L57 52L55 54L55 71L64 74L59 82L61 82L61 85L62 84L64 87L67 88L67 90L63 92L63 94L66 97L61 103L62 112L72 111L73 113L75 112L78 116L78 118L76 118L75 120L76 123L74 125L69 122L65 124L56 123L57 128L68 130L70 136L73 139L73 141L70 144L68 144L70 147L63 149L64 150L62 155L66 161L66 164L158 164L163 156L164 151L172 140L181 138L181 136L186 132L188 133L190 131L194 131L196 133L197 131L202 133L203 130L205 129L200 126L201 122L207 117L208 118L211 111L210 105L212 104L209 91L210 88L216 80L216 78L222 72L232 68L232 66L226 66L216 60L217 58L226 52L232 53L235 56L234 60L236 64L248 61L249 56L245 39L236 43L239 48L237 50L227 50L225 49L228 44L217 41L215 37L105 37z"></path></svg>'},
    {id: 8, nombre: 'Entre Rios', valor: '<svg height="210" width="800"><path class="leaflet-interactive" stroke="#18a0fb" stroke-opacity="1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="#18a0fb" fill-opacity="1" fill-rule="evenodd" d="M168 48L160 50L157 49L153 53L147 52L145 53L145 55L143 52L142 54L144 62L142 66L137 72L136 76L133 77L134 79L132 82L130 82L128 86L121 89L120 91L121 94L119 95L121 98L118 110L120 121L133 134L140 138L140 140L144 142L147 140L148 143L152 143L153 145L159 146L167 152L173 151L170 139L173 127L179 123L177 111L179 103L177 101L177 93L179 92L182 85L179 83L182 80L186 65L184 61L180 59L179 54L173 50z"></path></svg>'},
    {id: 9, nombre: 'Formosa', valor: '<svg height="210" width="800"><path class="leaflet-interactive" stroke="#18a0fb" stroke-opacity="1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="#18a0fb" fill-opacity="1" fill-rule="evenodd" d="M98 46L97 86L107 89L119 99L123 99L123 101L127 105L140 114L146 124L154 128L158 136L163 137L167 142L169 141L174 143L189 155L190 149L191 150L192 148L192 140L198 133L199 134L198 132L200 131L199 130L202 124L206 122L202 113L196 108L194 109L191 106L189 107L186 104L178 102L165 95L165 93L150 83L145 84L140 81L137 82L131 80L124 72L118 69L115 65L111 64L105 58L105 56L99 48L100 47z"></path></svg>'},
    {id: 10, nombre: 'Jujuy', valor: '<svg height="210" width="800"><path class="leaflet-interactive" stroke="#18a0fb" stroke-opacity="1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="#18a0fb" fill-opacity="1" fill-rule="evenodd" d="M190 115L182 102L183 91L173 87L171 77L172 73L170 70L168 70L168 65L170 59L173 57L173 49L175 48L175 45L149 46L142 38L136 37L137 35L129 30L127 31L128 34L125 45L109 52L105 52L103 62L94 67L91 67L92 73L84 81L93 90L83 124L92 133L92 137L96 137L101 144L104 144L105 147L109 149L117 150L117 148L120 147L122 144L121 143L123 139L123 126L120 117L123 108L132 111L139 116L137 131L139 138L146 140L150 145L155 158L161 163L162 161L164 163L168 163L169 165L175 163L180 168L187 170L189 170L190 165L192 164L199 170L201 170L205 164L217 160L222 151L221 115L213 115L209 121L199 113L195 113L193 115z"></path></svg>'},
    {id: 11, nombre: 'La Pampa', valor: '<svg height="210" width="800"><path class="leaflet-interactive" stroke="#18a0fb" stroke-opacity="1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="#18a0fb" fill-opacity="1" fill-rule="evenodd" d="M208 148L207 38L168 38L169 66L96 66L97 111L105 112L108 114L109 118L105 123L106 125L108 125L112 130L121 129L122 133L125 136L134 139L135 143L138 145L146 144L153 147L160 146L163 148L169 146L179 147L193 152L208 162z"></path></svg>'},
    {id: 12, nombre: 'La Rioja', valor: '<svg height="210" width="800"><path class="leaflet-interactive" stroke="#18a0fb" stroke-opacity="1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="#18a0fb" fill-opacity="1" fill-rule="evenodd" d="M153 60L145 60L142 57L142 54L138 55L130 51L131 48L129 44L116 45L111 54L107 56L106 60L104 60L108 63L110 62L119 75L120 78L118 81L118 93L133 95L150 111L150 113L159 122L162 127L162 144L169 151L169 153L173 156L191 153L191 130L197 116L199 106L192 84L190 84L190 82L184 75L177 74L178 70L175 68L173 59L163 57L161 58L160 61L155 61z"></path></svg>'},
    {id: 13, nombre: 'Mendoza', valor: '<svg height="210" width="800"><path class="leaflet-interactive" stroke="#18a0fb" stroke-opacity="1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="#18a0fb" fill-opacity="1" fill-rule="evenodd" d="M124 60L125 61L122 65L122 81L124 84L120 85L119 89L114 94L112 98L113 100L111 109L106 113L110 116L109 117L112 128L109 130L111 134L110 141L111 143L114 143L114 146L121 154L126 164L131 166L136 165L141 169L142 172L147 172L159 178L158 133L196 133L199 108L197 105L198 102L195 98L196 97L193 94L192 83L194 78L187 69L184 62L183 44L181 41L180 34L177 32L176 29L169 29L165 25L158 27L154 26L150 32L143 32L143 26L140 25L139 22L135 25L131 25L130 27L128 27L125 38L115 40L119 47L117 52L118 59L120 59L121 56L123 57z"></path></svg>'},
    {id: 14, nombre: 'Misiones', valor: '<svg height="210" width="800"><path class="leaflet-interactive" stroke="#18a0fb" stroke-opacity="1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="#18a0fb" fill-opacity="1" fill-rule="evenodd" d="M146 147L148 147L150 144L149 140L152 139L154 135L155 137L159 137L162 135L163 131L166 133L172 129L174 131L175 129L177 131L181 127L182 121L183 123L186 123L190 118L192 118L192 116L198 116L199 110L201 110L205 103L202 90L207 67L203 63L203 60L200 56L197 54L197 49L199 46L197 44L198 41L194 38L193 39L190 35L186 35L186 37L186 32L181 34L181 36L180 35L179 37L178 35L175 35L175 37L173 37L171 40L166 38L165 36L163 37L164 40L161 40L160 42L163 48L162 56L160 56L162 62L160 64L163 68L160 70L161 73L159 80L155 83L154 91L149 91L147 97L144 97L139 100L138 105L128 106L125 108L123 114L120 113L119 116L117 116L118 124L113 128L112 131L107 130L104 126L98 125L98 134L100 135L107 149L106 150L108 158L117 166L120 167L122 163L125 164L130 156L136 152L138 154L140 151L143 152L143 150L141 149L143 147L144 149z"></path></svg>'},
    {id: 15, nombre: 'Neuquén', valor: '<svg height="210" width="800"><path class="leaflet-interactive" stroke="#18a0fb" stroke-opacity="1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="#18a0fb" fill-opacity="1" fill-rule="evenodd" d="M178 122L185 112L197 109L192 101L192 69L180 63L175 63L174 60L169 56L165 57L158 54L157 48L149 40L147 37L147 33L145 34L143 32L143 27L142 29L140 28L137 31L136 36L132 35L132 37L128 39L129 44L126 43L127 45L125 48L127 51L125 51L127 58L124 61L124 64L127 66L124 72L129 84L129 93L133 96L133 99L130 103L119 108L121 116L117 126L119 126L118 129L113 127L113 131L116 136L114 142L111 142L110 146L114 149L114 151L110 153L110 158L107 162L110 166L109 169L116 171L117 170L123 173L126 171L129 167L127 162L130 159L137 157L139 155L143 156L148 154L148 152L151 151L153 139L167 131L172 125L175 125L177 122z"></path></svg>'},
    {id: 16, nombre: 'Río Negro', valor: '<svg height="210" width="800"><path class="leaflet-interactive" stroke="#18a0fb" stroke-opacity="1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="#18a0fb" fill-opacity="1" fill-rule="evenodd" d="M215 131L218 131L224 135L227 134L227 136L231 139L250 139L256 135L253 129L247 126L243 126L243 86L222 72L204 69L198 71L195 69L191 70L181 67L173 68L170 66L169 62L160 59L157 56L156 52L145 52L145 50L140 46L144 41L143 37L141 35L132 34L132 66L135 68L137 74L133 74L124 78L115 90L110 92L105 98L94 103L92 106L93 110L91 112L91 116L88 117L88 119L83 121L80 120L67 126L69 132L66 136L61 137L57 135L50 135L49 145L52 159L51 163L52 165L204 165L206 158L206 150L202 140L202 132L205 128L209 126L211 129L209 128L209 130L212 129z"></path></svg>'},
    {id: 17, nombre: 'Salta', valor: '<svg height="210" width="800"><path class="leaflet-interactive" stroke="#18a0fb" stroke-opacity="1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="#18a0fb" fill-opacity="1" fill-rule="evenodd" d="M206 127L223 105L223 57L213 49L213 45L193 45L192 47L192 45L186 45L185 51L180 59L178 66L172 51L163 47L159 47L155 60L157 61L157 68L163 71L162 77L167 83L170 81L176 86L178 83L182 83L182 100L179 105L173 108L172 110L167 107L165 110L161 109L159 106L153 107L149 104L144 95L140 93L140 83L132 79L131 83L133 88L131 99L125 99L117 93L117 91L112 87L110 95L87 107L86 106L82 114L82 116L87 122L83 124L95 126L126 127L128 129L128 133L127 137L123 137L122 143L128 152L132 155L136 148L139 151L147 154L148 148L151 147L155 147L157 150L166 152L166 150L174 151L179 138L198 138L199 136z"></path></svg>'},
    {id: 18, nombre: 'San Juan', valor: '<svg height="210" width="800"><path class="leaflet-interactive" stroke="#18a0fb" stroke-opacity="1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="#18a0fb" fill-opacity="1" fill-rule="evenodd" d="M124 93L121 97L119 97L116 100L113 110L114 114L112 117L110 115L108 121L111 135L115 136L116 138L113 141L114 146L118 152L118 155L125 155L128 152L130 143L132 143L133 141L137 142L141 138L141 140L144 142L145 148L152 148L156 142L160 143L167 141L169 144L177 145L179 146L179 148L183 149L181 146L181 136L195 136L192 130L188 127L188 111L182 101L159 78L144 76L144 64L146 61L136 45L134 46L129 44L129 49L127 50L128 54L126 58L126 64L124 63L121 68L124 82L122 88L125 89L125 91z"></path></svg>'},
    {id: 19, nombre: 'San Luis', valor: '<svg height="210" width="800"><path class="leaflet-interactive" stroke="#18a0fb" stroke-opacity="1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="#18a0fb" fill-opacity="1" fill-rule="evenodd" d="M128 77L128 82L132 90L132 93L135 95L136 99L139 102L137 112L138 118L141 121L140 122L143 126L142 129L144 132L141 156L176 157L174 80L177 76L180 66L179 65L181 63L179 59L180 57L173 56L172 50L169 47L162 44L156 44L154 46L147 47L142 47L139 44L125 44L124 53L126 57L124 57L128 68L128 76z"></path></svg>'},
    {id: 20, nombre: 'Santa Cruz', valor: '<svg height="210" width="800"><path class="leaflet-interactive" stroke="#18a0fb" stroke-opacity="1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="#18a0fb" fill-opacity="1" fill-rule="evenodd" d="M183 88L186 85L188 85L192 80L194 80L193 79L195 77L194 74L196 71L196 65L194 63L184 62L183 59L177 54L174 47L175 46L129 45L126 48L128 48L129 55L125 60L126 65L121 69L121 73L119 76L122 84L118 86L118 93L116 95L114 94L107 104L109 108L107 118L108 122L110 123L110 127L116 124L121 125L122 131L120 131L120 133L122 135L120 141L126 149L148 149L153 152L157 152L165 156L166 155L159 142L154 142L157 142L159 140L157 131L155 131L157 129L157 125L160 119L166 116L164 114L165 113L162 112L165 111L167 115L173 111L175 100L173 102L173 100L175 96L183 88z"></path></svg>'},
    {id: 21, nombre: 'Santa Fe', valor: '<svg height="210" width="300"><path class="leaflet-interactive" stroke="#18a0fb" stroke-opacity="1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="#18a0fb" fill-opacity="1" fill-rule="evenodd" d="M143 57L138 88L141 94L137 106L137 111L140 115L140 119L142 120L142 122L130 142L143 142L153 131L156 132L159 128L159 126L155 123L154 120L154 110L155 106L157 106L161 102L166 93L166 79L168 74L172 70L173 59L175 58L143 57z"></path></svg>'},
    {id: 22, nombre: 'Santiago del Estero', valor: '<svg height="210" width="800"><path class="leaflet-interactive" stroke="#18a0fb" stroke-opacity="1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="#18a0fb" fill-opacity="1" fill-rule="evenodd" d="M192 52L192 37L153 37L152 39L133 39L128 52L128 63L126 63L123 67L120 79L117 80L116 87L118 91L116 94L113 94L115 109L113 114L121 124L119 130L121 138L132 136L140 137L140 139L144 138L145 140L152 140L152 143L167 144L168 148L173 152L173 158L181 158L182 162L192 97z"></path></svg>'},
    {id: 23, nombre: 'Tucumán', valor: '<svg height="210" width="800"><path class="leaflet-interactive" stroke="#18a0fb" stroke-opacity="1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="#18a0fb" fill-opacity="1" fill-rule="evenodd" d="M165 127L168 126L165 123L167 115L169 116L172 114L177 102L179 89L181 90L181 87L184 88L185 81L189 82L189 58L182 59L176 57L169 61L168 59L155 57L152 51L147 53L136 53L134 65L117 58L117 67L114 68L114 76L115 78L118 78L128 85L126 91L128 93L115 110L122 114L122 123L125 132L129 137L129 141L130 142L131 138L133 138L135 144L140 149L142 149L144 145L150 141L158 146L160 142L163 144L164 143L166 137L169 137L165 128z"></path></svg>'},
    {id: 24, nombre: 'Tierra del Fuego, Antártida e Islas del Atlántico Sur', valor: '<svg height="210" width="300"><path class="leaflet-interactive" stroke="#18a0fb" stroke-opacity="1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="#18a0fb" fill-opacity="1" fill-rule="evenodd" d="M166 125L160 121L154 114L139 104L136 98L129 92L122 78L120 79L114 76L114 73L118 67L120 67L121 69L121 67L113 54L113 140L114 138L118 138L120 136L132 139L141 138L161 146L163 143L172 143L173 140L177 140L180 142L185 139L185 141L188 140L188 138L190 137L189 135L192 130L181 130L170 128L167 126z"></path></svg>'}
];


// Obtener gamma de colores del CSS para agrupaciones políticas
const graficaAmarillo = getComputedStyle(document.documentElement).getPropertyValue('--grafica-amarillo').trim();
const graficaAmarilloClaro = getComputedStyle(document.documentElement).getPropertyValue('--grafica-amarillo-claro').trim();
const graficaCeleste = getComputedStyle(document.documentElement).getPropertyValue('--grafica-celeste').trim();
const graficaCelesteClaro = getComputedStyle(document.documentElement).getPropertyValue('--grafica-celeste-claro').trim();
const graficaBordo = getComputedStyle(document.documentElement).getPropertyValue('--grafica-bordo').trim();
const graficaBordoClaro = getComputedStyle(document.documentElement).getPropertyValue('--grafica-bordo-claro').trim();
const graficaLila = getComputedStyle(document.documentElement).getPropertyValue('--grafica-lila').trim();
const graficaLilaClaro = getComputedStyle(document.documentElement).getPropertyValue('--grafica-lila-claro').trim();
const graficaLila2 = getComputedStyle(document.documentElement).getPropertyValue('--grafica-lila2').trim();
const graficaLila2Claro = getComputedStyle(document.documentElement).getPropertyValue('--grafica-lila2-claro').trim();
const graficaGris = getComputedStyle(document.documentElement).getPropertyValue('--grafica-gris').trim();
const graficaGrisClaro = getComputedStyle(document.documentElement).getPropertyValue('--grafica-gris-claro').trim();
const graficaVerde = getComputedStyle(document.documentElement).getPropertyValue('--grafica-verde').trim();
const graficaVerdeClaro = getComputedStyle(document.documentElement).getPropertyValue('--grafica-verde-claro').trim();

// Crear objeto con colores de las agrupaciones políticas.
const coloresAgrupacionesPoliticas = {
  0: { oscuro: graficaAmarillo, claro: graficaAmarilloClaro },
  1: { oscuro: graficaCeleste, claro: graficaCelesteClaro },
  2: { oscuro: graficaBordo, claro: graficaBordoClaro },
  3: { oscuro: graficaLila, claro: graficaLilaClaro },
  4: { oscuro: graficaLila2, claro: graficaLila2Claro },
  5: { oscuro: graficaVerde, claro: graficaVerdeClaro },
  6: { oscuro: graficaGris, claro: graficaGrisClaro },
  7: { oscuro: graficaGris, claro: graficaGrisClaro },
  8: { oscuro: graficaGris, claro: graficaGrisClaro},
  9: { oscuro: graficaGris, claro: graficaGrisClaro},
  10: { oscuro: graficaGris, claro: graficaGrisClaro},
  11: { oscuro: graficaGris, claro: graficaGrisClaro},
  12: { oscuro: graficaGris, claro: graficaGrisClaro},
  13: { oscuro: graficaGris, claro: graficaGrisClaro},
  14: { oscuro: graficaGris, claro: graficaGrisClaro},
  15: { oscuro: graficaGris, claro: graficaGrisClaro},
  16: { oscuro: graficaGris, claro: graficaGrisClaro},
  17: { oscuro: graficaGris, claro: graficaGrisClaro},
  18: { oscuro: graficaGris, claro: graficaGrisClaro},
  19: { oscuro: graficaGris, claro: graficaGrisClaro},
  20: { oscuro: graficaGris, claro: graficaGrisClaro},
  // Agrega más entradas según sea necesario
};



document.addEventListener('DOMContentLoaded', () => {seleccionAnio()});

async function seleccionAnio() {
    try{
        
        const respuesta = await fetch(`https://resultados.mininterior.gob.ar/api/menu/periodos`);
        if (respuesta.ok){
            const datosPeriodo = await respuesta.json();
            
            // VERIFICACION: console.log(datosPeriodo)

            for (let i = 0; i < datosPeriodo.length; i++){
                opcion = datosPeriodo[i];
                opcionElementoAnio = document.createElement('option');
                opcionElementoAnio.value = opcion;
                opcionElementoAnio.text = opcion;
                comboPeriodo.appendChild(opcionElementoAnio);
            }

            //console.log(comboPeriodo.value)

            opcionSeleccionadaAnio = await esperarSeleccionAnio();
            // PARA VERIFICAR QUE FUNCIONA BIEN LA FUNCION: console.log('Opción seleccionada:', opcionSeleccionada);
            
            await seleccionCargo(opcionSeleccionadaAnio);

        }
        else{
            console.log('Error al obtener los datos de la API del combo AñO.');
        }
    }

    catch(error){
        console.log('Error al ejecutar la función comboAnio().', error);
    }
}



// ---------------------- INICIO SECCION DE FUNCIONES PARA LOS ELEMENTOS SELECCIONADOS POR EL USUARIO ----------------------




function esperarSeleccionAnio(){
    return new Promise((resolve) => {
        
        // Agrega un event listener para el evento 'change' del select
        comboPeriodo.addEventListener('change', function handler(){
            
            // Una vez que el usuario selecciona una opción, resuelve la promesa con el valor seleccionado
            resolve(comboPeriodo.value);


            // Elimina el event listener después de que se haya seleccionado una opción
            comboPeriodo.removeEventListener('change', handler);

        });
    });
}


function esperarSeleccionCargo(){
    return new Promise((resolve) => {
        
        // Agrega un event listener para el evento 'change' del select
        comboCargo.addEventListener('change', function handler(){
            
            // Una vez que el usuario selecciona una opción, resuelve la promesa con el valor seleccionado
            resolve(comboCargo.value);

            // Elimina el event listener después de que se haya seleccionado una opción
            comboCargo.removeEventListener('change', handler);

        });
    });
}


function esperarSeleccionDistrito(){
    return new Promise((resolve) => {
        
        // Agrega un event listener para el evento 'change' del select
        comboDistrito.addEventListener('change', function handler(){
            
            // Una vez que el usuario selecciona una opción, resuelve la promesa con el valor seleccionado
            resolve(comboDistrito.value);

            // Elimina el event listener después de que se haya seleccionado una opción
            comboDistrito.removeEventListener('change', handler);

        });
    });
}


function esperarSeleccionSeccion(){
    return new Promise((resolve) => {
        
        // Agrega un event listener para el evento 'change' del select
        comboSeccion.addEventListener('change', function handler(){
            
            // Una vez que el usuario selecciona una opción, resuelve la promesa con el valor seleccionado
            resolve(comboSeccion.value);

            // Elimina el event listener después de que se haya seleccionado una opción
            comboSeccion.removeEventListener('change', handler);

        });
    });
}



// ---------------------- FIN SECCION DE FUNCIONES PARA LOS ELEMENTOS SELECCIONADOS POR EL USUARIO ----------------------





async function seleccionCargo(opcionSeleccionadaAnio){
    try{
        respuestaApi = await fetch("https://resultados.mininterior.gob.ar/api/menu?año=" + opcionSeleccionadaAnio); // DEFINO LA VARIABLE GLOBALMENTE.
        if(respuestaApi.ok){
            datosCargo = await respuestaApi.json();

            console.log(datosCargo);

            // ABAJO RECORRO EL ARREGLO DE OBJETOS QUE DEVUELVE LA API, Y EN BASE AL TIPO DE ELECCION ASIGNO
            // EL CARGO Y SU ID CORRESPONDIENTE (PARAMETROS) DE CADA OBJETO DE LA LISTA 'CARGOS'.
            datosCargo.forEach((eleccion) => {
                if (eleccion.IdEleccion == tipoEleccion) {
                    eleccion.Cargos.forEach((cargo) => {
                        opcionElementoCargo = document.createElement('option');
                        opcionElementoCargo.value = cargo.IdCargo;
                        opcionElementoCargo.text = cargo.Cargo;
                        comboCargo.appendChild(opcionElementoCargo);
                    })
                }
            });

            opcionSeleccionadaCargo = await esperarSeleccionCargo();

            await seleccionDistrito(opcionSeleccionadaCargo);

        }
        else{
            console.log('Error al obtener los datos de la API del combo CARGO.');
        }
    }

    catch{
        console.log('Error al ejecutar la funcion seleccionCargo().');
    }
}



async function seleccionDistrito(opcionSeleccionadaCargo){
    try{
        datosCargo.forEach((eleccion) => {
            if (eleccion.IdEleccion == tipoEleccion) {
                eleccion.Cargos.forEach((cargo) => {
                    if (cargo.IdCargo == opcionSeleccionadaCargo){
                        cargo.Distritos.forEach((distrito) => {
                            opcionElementoDistrito = document.createElement('option');
                            opcionElementoDistrito.value = distrito.IdDistrito;
                            opcionElementoDistrito.text = distrito.Distrito;
                            comboDistrito.appendChild(opcionElementoDistrito);
                        })
                    }
                })
            }
        });

        opcionSeleccionadaDistrito = await esperarSeleccionDistrito();

        await seleccionSeccion(opcionSeleccionadaDistrito);
    }

    catch{
        console.log("Error al ejecutar la funcion seleccionDistrito().");
    }
}


async function seleccionSeccion(opcionSeleccionadaDistrito){
    try{
        datosCargo.forEach((eleccion) => {
            if (eleccion.IdEleccion == tipoEleccion) {
                eleccion.Cargos.forEach((cargo) => {
                    if (cargo.IdCargo == opcionSeleccionadaCargo){
                        cargo.Distritos.forEach((distrito) => {
                            if (distrito.IdDistrito == opcionSeleccionadaDistrito){
                                distrito.SeccionesProvinciales.forEach((seccionProvincial) => {
                                    idSeccionProvincial = document.getElementById('idSeccionProvincial');
                                    idSeccionProvincial.value = seccionProvincial.IDSeccionProvincial;
                                    seccionProvincial.Secciones.forEach((seccion) => {
                                        opcionElementoSeccion = document.createElement('option');
                                        opcionElementoSeccion.value = seccion.IdSeccion;
                                        opcionElementoSeccion.text = seccion.Seccion;
                                        comboSeccion.appendChild(opcionElementoSeccion);
                                    })

                                })
                            }
                        })
                    }
                })
            }
        });

        opcionSeleccionadaSeccion = await esperarSeleccionSeccion();
    }

    catch{
        console.log("Error al ejecutar la funcion seleccionSeccion().")
    }
}



async function filtrarBtn(){
    try{
        //localStorage.clear();
        if (comboPeriodo.value == 0 || comboCargo.value == 0 || comboDistrito.value == 0 || comboSeccion.value == 0){
            let mensajeMenuBar = document.getElementById('mensaje-menu-bar');
            console.log(mensajeMenuBar.textContent);
            if (comboPeriodo.value == 0){
                mensajeMenuBar.innerText = 'Faltan seleccionar los siguientes campos: Año, Cargo, Distrito y Sección.';
            }
            else{
                if (comboCargo.value == 0){
                    mensajeMenuBar.innerText = 'Faltan seleccionar los siguientes campos: Cargo, Distrito y Sección.';
                }
                else{
                    if(comboDistrito.value == 0){
                        mensajeMenuBar.innerText = 'Faltan seleccionar los siguientes campos: Distrito y Sección.';
                    }
                    else{
                        if(comboSeccion.value == 0){
                            mensajeMenuBar.innerText = 'Faltan seleccionar los siguientes campos: Sección.';
                        }
                        else{
                            mensajeMenuBar.innerText = '';
                        }
                    }
                }
            }
        }

        else{
            
            const url = `https://resultados.mininterior.gob.ar/api/resultados/getResultados?anioEleccion=${opcionSeleccionadaAnio}&tipoRecuento=${tipoRecuento}&tipoEleccion=${tipoEleccion}&categoriaId=${opcionSeleccionadaCargo}&distritoId=${opcionSeleccionadaDistrito}&seccionProvincialId=${idSeccionProvincial.value}&seccionId=${opcionSeleccionadaSeccion}&circuitoId=${circuitoId}&mesaId=${mesaId}`
            const respuestaApiDatosFiltrados = await fetch(url);

            document.getElementById('mensaje-menu-bar').hidden = true;

            if (respuestaApiDatosFiltrados.ok){
                datosFiltrados = await respuestaApiDatosFiltrados.json();

                console.log(datosFiltrados);

                
                let cargo = comboCargo.options[opcionSeleccionadaCargo].text;
                let distrito = comboDistrito.options[opcionSeleccionadaDistrito].text;
                let seccion = comboSeccion.options[opcionSeleccionadaSeccion].text;

                
                let tituloGenerales = document.getElementById('titulo-generales');
                let subtituloGenerales = document.getElementById('subtitulo-generales');
                tituloGenerales.innerText = "Elecciones " + opcionSeleccionadaAnio + " | GENERALES";
                subtituloGenerales.innerText = opcionSeleccionadaAnio + " > GENERALES > " + cargo + " > " + distrito + " > " + seccion;

                document.getElementById('card1').hidden = false;
                document.getElementById('card2').hidden = false;
                document.getElementById('card3').hidden = false;
                document.getElementById('boton-agregar').hidden = false;
                document.getElementById('mesas_escrutadas_div').hidden = false;
                document.getElementById('participacion_div').hidden = false;
                document.getElementById('electores_div').hidden = false;

                await contenidoCuadros();
                await cardMapa();
                await cardAgrupaciones();
                await cardGraficaDeBarras();
            }
            else{
                let mensajeError = 'Error al obtener los datos de la API.';
                mostrarMensajeRojo(mensajeError);
                // console.log('Error al obtener los datos de la API.');
            }
            
        }

    }

    catch{
        console.log('Error al ejecutar la función filtrarBtn().');
        let errorMsg = 'No se pudo obtener información para la consulta realizada.';
        mostrarMensajeRojo(errorMsg);
    }
    
}


async function contenidoCuadros(){
    try{
        let mesasEscrutadas = datosFiltrados.estadoRecuento.mesasTotalizadas;
        let electores = datosFiltrados.estadoRecuento.cantidadElectores;
        let participacionEscrutado = datosFiltrados.estadoRecuento.participacionPorcentaje;


        document.getElementById('contador-mesas-escrutadas').innerText = mesasEscrutadas;
        document.getElementById('contador-electores').innerText = electores;
        document.getElementById('contador-participacion-escrutado').innerText = participacionEscrutado + "%";
    }

    catch{
        console.log('error contenidoCuadros()');
    }
}

async function cardMapa(){
    try{
        mapas.forEach((mapa) => {
            if(mapa.id == opcionSeleccionadaDistrito){
                var nombreMapa = document.getElementById('nombre-mapa');
                var svgMapa = document.getElementById('svg-mapa');
                var cuadros = document.getElementById('cuadro_detalle');
                cuadros.hidden = false;

                nombreMapa.innerText = mapa.nombre;
                svgMapa.innerHTML = mapa.valor;
            }
        })
    }

    catch{
        console.log('error cardMapa()');
    }
}


async function cardAgrupaciones() {
    try{
        // OBTENGO LOS VALORES Y LOS PASO A LA CARD (TITULO, VOTOS Y PORCENTAJE).

        // let indiceColor = 0;
        datosFiltrados.valoresTotalizadosPositivos.forEach((agrupacion) => {
            let listaAgrupaciones = document.getElementById('lista-agrupaciones');
            let nombre = document.createElement('h4');
            let votos = document.createElement('p');
            nombre.innerText = agrupacion.nombreAgrupacion;
            votos.innerHTML = agrupacion.votosPorcentaje + "% <br>" + agrupacion.votos + " votos";
            listaAgrupaciones.appendChild(nombre);
            listaAgrupaciones.appendChild(votos);

            // CREO UNA BARRA DE PROGRESO DE FONDO PARA CADA AGRUPACION

            let backgroundProgressBar = document.createElement('div');
            backgroundProgressBar.classList.add('progress');
            //backgroundProgressBar.id = "background-progress-bar";
            // backgroundProgressBar.style.backgroundColor = coloresAgrupacionesPoliticas.indiceColor.claro;
            listaAgrupaciones.appendChild(backgroundProgressBar);
            // indiceColor += 1;

            // SOBRE LA BARRA DE PROGRESO CREADA AGREGO UNA BARRA ENCIMA CON EL PORCENTAJE CORRESPONDIENTE A CADA AGRUPACION

            let progressBar = document.createElement('div');
            progressBar.classList.add('progress-bar');
            progressBar.style.width = agrupacion.votosPorcentaje + '%';
            backgroundProgressBar.appendChild(progressBar);

            // AGREGO EL NUMERO CORRESPONDIENTE AL PORCENTAJE DE CADA AGRUPACION EN MEDIO DE LA BARRA ANTERIOR

            let progressBarText = document.createElement('span');
            progressBarText.classList.add('progress-bar-text');
            progressBarText.innerText = agrupacion.votosPorcentaje + "%";
            progressBarText.style.overflow = 'hidden';
            progressBar.appendChild(progressBarText);

        });
    }

    catch{
        console.log('Error cardAgrupaciones().');
    }
}


async function cardGraficaDeBarras(){
    try{
        let contadorAgrupaciones = 0;
        datosFiltrados.valoresTotalizadosPositivos.forEach((agrupacion) => {
            if (contadorAgrupaciones <= 7){

                // HAGO EL PRIMER DIV PARA SETEAR ALTURA MAXIMA Y NOMBRE DE AGRUPACION DE LA BARRA

                let grafico = document.getElementById('grid');
                grafico.hidden = false;
                let barra = document.createElement('div');
                barra.classList.add('bar');
                barra.style = "--bar-value:65%;"
                barra.dataset.name = agrupacion.nombreAgrupacion;
                grafico.appendChild(barra);

                // HAGO DIV DE LA CLASS 'PROGRESS' Y LO METO DENTRO DEL DIV BARRA PARA DELIMITAR SU ANCHO

                let backgroundProgressBar = document.createElement('div');
                backgroundProgressBar.classList.add('progress');
                barra.appendChild(backgroundProgressBar);

                // HAGO DIV DE LA BARRA DE PROGRESO DE CLASE 'PROGRESS-BAR' Y LO METO DENTRO DEL DIV BACKGROUNDPROGRESSBAR

                let progressBar = document.createElement('div');
                progressBar.classList.add('progress-bar');
                progressBar.style.width = agrupacion.votosPorcentaje + '%';
                backgroundProgressBar.appendChild(progressBar);

                // HAGO DIV DEL NUMERO CORRESPONDIENTE AL PORCENTAJE QUE VA EN FORMATO DE TEXTO EN LA BARRA

                let progressBarText = document.createElement('span');
                progressBarText.classList.add('progress-bar-text');
                progressBarText.innerText = agrupacion.votosPorcentaje + "%";
                progressBarText.style.overflow = 'hidden';
                progressBar.appendChild(progressBarText);

                // CONTADOR DE AGRUPACIONES:

                contadorAgrupaciones += 1;
            }

        });
    }

    catch{
        console.log('Error cardGraficaDeBarras().');
    }
}


async function agregarInformeBtn(){
    try{
        let informeActual = localStorage.getItem("INFORMES");
        console.log(informeActual);
        let nuevoInforme = `${opcionSeleccionadaAnio}|${tipoRecuento}|${tipoEleccion}|${opcionSeleccionadaCargo}|${opcionSeleccionadaDistrito}|${idSeccionProvincial.value}|${opcionSeleccionadaSeccion}|${circuitoId}|${mesaId}|`;

        if (informeActual === null || informeActual === undefined){

            localStorage.setItem("INFORMES", nuevoInforme);
            let mensajeExito = 'Se agregó el informe exitosamente';
            mostrarMensajeVerde(mensajeExito);

        }

        else{
            let validarInforme = informeActual.split(',');

            if (validarInforme.includes(nuevoInforme)) {
                let mensajeError = 'El informe seleccionado ya posee un registro existente.';
                mostrarMensajeAmarillo(mensajeError);
            }
            else{
                informeActual = informeActual + nuevoInforme;
                localStorage.setItem('INFORMES', informeActual);
                let mensajeExito = 'Se agregó el informe exitosamente.';
                mostrarMensajeVerde(mensajeExito);
            }
        }
    }
    
    catch{
        console.log('Error al ejecutar agregarInformeBtn().');
    }

}




function mostrarMensajeAmarillo(mensaje){

    let divMensaje = document.getElementById('info-button');
    let textoMensaje = document.getElementById('p-info-button');

    divMensaje.hidden = false;
    textoMensaje.innerText = mensaje;

    setTimeout(() => {
        divMensaje.hidden = true;
    }, 5000);
}


function mostrarMensajeRojo(mensaje){
    let divMensaje = document.getElementById('error-button');
    let textoMensaje = document.getElementById('p-error-button');

    divMensaje.hidden = false;
    textoMensaje.innerText = mensaje;

    setTimeout(() => {
        divMensaje.hidden = true;
    }, 5000);
}

function mostrarMensajeVerde(mensaje){
    let divMensaje = document.getElementById('success-button');
    let textoMensaje = document.getElementById('p-success-button');

    divMensaje.hidden = false;
    textoMensaje.innerText = mensaje;

    setTimeout(() => {
        divMensaje.hidden = true;
    }, 5000);
}
