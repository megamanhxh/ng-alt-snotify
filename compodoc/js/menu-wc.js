'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">ng-alt-snotify</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="changelog.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CHANGELOG
                            </a>
                        </li>
                        <li class="link">
                            <a href="contributing.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CONTRIBUTING
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-957393c3fdf4b3c6c8efaeef4ab4dc01d40e7b4eadaf6cf180ea73f599f05e68d19e8ef24265ce9df2d362c2f867727ae548b90443c4845f42dac2aaf968c911"' : 'data-bs-target="#xs-components-links-module-AppModule-957393c3fdf4b3c6c8efaeef4ab4dc01d40e7b4eadaf6cf180ea73f599f05e68d19e8ef24265ce9df2d362c2f867727ae548b90443c4845f42dac2aaf968c911"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-957393c3fdf4b3c6c8efaeef4ab4dc01d40e7b4eadaf6cf180ea73f599f05e68d19e8ef24265ce9df2d362c2f867727ae548b90443c4845f42dac2aaf968c911"' :
                                            'id="xs-components-links-module-AppModule-957393c3fdf4b3c6c8efaeef4ab4dc01d40e7b4eadaf6cf180ea73f599f05e68d19e8ef24265ce9df2d362c2f867727ae548b90443c4845f42dac2aaf968c911"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-957393c3fdf4b3c6c8efaeef4ab4dc01d40e7b4eadaf6cf180ea73f599f05e68d19e8ef24265ce9df2d362c2f867727ae548b90443c4845f42dac2aaf968c911"' : 'data-bs-target="#xs-injectables-links-module-AppModule-957393c3fdf4b3c6c8efaeef4ab4dc01d40e7b4eadaf6cf180ea73f599f05e68d19e8ef24265ce9df2d362c2f867727ae548b90443c4845f42dac2aaf968c911"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-957393c3fdf4b3c6c8efaeef4ab4dc01d40e7b4eadaf6cf180ea73f599f05e68d19e8ef24265ce9df2d362c2f867727ae548b90443c4845f42dac2aaf968c911"' :
                                        'id="xs-injectables-links-module-AppModule-957393c3fdf4b3c6c8efaeef4ab4dc01d40e7b4eadaf6cf180ea73f599f05e68d19e8ef24265ce9df2d362c2f867727ae548b90443c4845f42dac2aaf968c911"' }>
                                        <li class="link">
                                            <a href="injectables/SnotifyService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SnotifyService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SnotifyModule.html" data-type="entity-link" >SnotifyModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SnotifyModule-dcd3857b41ed8b835c2489f0feb441938d6de02ba2797face685080cb051bd90abee3847fc09b47405b9d43975f41c08a0cd4d9c968eb749c0265b4c513e9b4e"' : 'data-bs-target="#xs-components-links-module-SnotifyModule-dcd3857b41ed8b835c2489f0feb441938d6de02ba2797face685080cb051bd90abee3847fc09b47405b9d43975f41c08a0cd4d9c968eb749c0265b4c513e9b4e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SnotifyModule-dcd3857b41ed8b835c2489f0feb441938d6de02ba2797face685080cb051bd90abee3847fc09b47405b9d43975f41c08a0cd4d9c968eb749c0265b4c513e9b4e"' :
                                            'id="xs-components-links-module-SnotifyModule-dcd3857b41ed8b835c2489f0feb441938d6de02ba2797face685080cb051bd90abee3847fc09b47405b9d43975f41c08a0cd4d9c968eb749c0265b4c513e9b4e"' }>
                                            <li class="link">
                                                <a href="components/ButtonsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ButtonsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PromptComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PromptComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SnotifyComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SnotifyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ToastComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ToastComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#pipes-links-module-SnotifyModule-dcd3857b41ed8b835c2489f0feb441938d6de02ba2797face685080cb051bd90abee3847fc09b47405b9d43975f41c08a0cd4d9c968eb749c0265b4c513e9b4e"' : 'data-bs-target="#xs-pipes-links-module-SnotifyModule-dcd3857b41ed8b835c2489f0feb441938d6de02ba2797face685080cb051bd90abee3847fc09b47405b9d43975f41c08a0cd4d9c968eb749c0265b4c513e9b4e"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-SnotifyModule-dcd3857b41ed8b835c2489f0feb441938d6de02ba2797face685080cb051bd90abee3847fc09b47405b9d43975f41c08a0cd4d9c968eb749c0265b4c513e9b4e"' :
                                            'id="xs-pipes-links-module-SnotifyModule-dcd3857b41ed8b835c2489f0feb441938d6de02ba2797face685080cb051bd90abee3847fc09b47405b9d43975f41c08a0cd4d9c968eb749c0265b4c513e9b4e"' }>
                                            <li class="link">
                                                <a href="pipes/KeysPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >KeysPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/TruncatePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TruncatePipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/SnotifyToast.html" data-type="entity-link" >SnotifyToast</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/SnotifyService.html" data-type="entity-link" >SnotifyService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Snotify.html" data-type="entity-link" >Snotify</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SnotifyAnimate.html" data-type="entity-link" >SnotifyAnimate</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SnotifyButton.html" data-type="entity-link" >SnotifyButton</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SnotifyDefaults.html" data-type="entity-link" >SnotifyDefaults</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SnotifyGlobalConfig.html" data-type="entity-link" >SnotifyGlobalConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SnotifyNotifications.html" data-type="entity-link" >SnotifyNotifications</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SnotifyStyles.html" data-type="entity-link" >SnotifyStyles</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SnotifyToastConfig.html" data-type="entity-link" >SnotifyToastConfig</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});