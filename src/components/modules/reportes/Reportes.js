import React from 'react';

const Reportes = () => {
    return (
        <div className="page__reports">
            <div class="content__head">
                <ul className="breadcrams">
                    <li class="breadcrumbs__item">
                        <a href="./index.html">Dashboard</a>
                    </li>
                    <li class="breadcrumbs__item">Detalles de uso</li>
                </ul>
            </div>

            <div class="content__head s_mb_24">
                <div class="box__cols">
                    <div class="box__col">
                        <h1 class="page__title">Detalles de uso</h1>
                    </div>
                </div>
            </div>

            <div class="content__text">
                <div class="input">
                    <input type="text" class="reports__general" name="general" value="" placeholder="General"/>
                    <input type="text" class="calendar reports__calendar" id="date" name="daterange" placeholder=" _ _ / _ _ / _ _ _ _     _ _ / _ _ / _ _ _ _ "/>
                </div>

                <div class="number-wrap">
                    <div class="number">
                        <label for="flows">Flujos concluidos</label>
                        <div class="number-input">
                            <button class="number-down" type="button" onclick="this.nextElementSibling.stepDown(); this.nextElementSibling.onchange();"></button>
                            <input type="number" min="0" name="flows" value="1" readonly/>
                            <button class="number-up" type="button" onclick="this.previousElementSibling.stepUp(); this.previousElementSibling.onchange();"></button>
                        </div>
                    </div>

                    <div class="number">
                        <label for="workflow">Firmantes en workflow</label>
                        <div class="number-input">
                            <button class="number-down" type="button" onclick="this.nextElementSibling.stepDown(); this.nextElementSibling.onchange();"></button>
                            <input type="number" min="0" name="workflow" value="1" readonly/>
                            <button class="number-up" type="button" onclick="this.previousElementSibling.stepUp(); this.previousElementSibling.onchange();"></button>
                        </div>
                    </div>

                    <div class="number">
                        <label for="docs">Total de documentos</label>
                        <div class="number-input">
                            <button class="number-down" type="button" onclick="this.nextElementSibling.stepDown(); this.nextElementSibling.onchange();"></button>
                            <input type="number" min="0" name="docs" value="1" readonly/>
                            <button class="number-up" type="button" onclick="this.previousElementSibling.stepUp(); this.previousElementSibling.onchange();"></button>
                        </div>
                    </div>

                    <input type="submit" value="Buscar" class="reports__submit input__search-btn" />
                </div>
            </div>
        </div>
     );
}
 
export default Reportes;