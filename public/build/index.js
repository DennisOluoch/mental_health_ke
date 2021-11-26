/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/App.jsx":
/*!***************************!*\
  !*** ./assets/js/App.jsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/styles/createTheme.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/useScrollTrigger/useScrollTrigger.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Zoom/Zoom.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/styles/esm/ThemeProvider/ThemeProvider.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Fab/Fab.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/KeyboardArrowUp.js");
/* harmony import */ var _AppRoutes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppRoutes */ "./assets/js/AppRoutes.jsx");
/* harmony import */ var _components_ContactUs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ContactUs */ "./assets/js/components/ContactUs.jsx");
/* harmony import */ var _components_FifthSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/FifthSection */ "./assets/js/components/FifthSection.jsx");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Footer */ "./assets/js/components/Footer.jsx");
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/NavBar */ "./assets/js/components/NavBar.jsx");
/* harmony import */ var _components_SixthSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/SixthSection */ "./assets/js/components/SixthSection.jsx");










var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["default"])(function (theme) {
  return {
    root: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2)
    }
  };
});

var App = function App() {
  var theme = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["default"])({
    palette: {
      primary: {
        main: '#7DEBBD'
      },
      secondary: {
        main: '#181E4E'
      }
    }
  });

  function ScrollTop(_ref) {
    var children = _ref.children;
    var classes = useStyles();
    var trigger = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["default"])({
      disableHysteresis: true,
      threshold: 250
    });

    var handleClick = function handleClick(event) {
      var anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

      if (anchor) {
        anchor.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }
    };

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["default"], {
      "in": trigger
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
      onClick: handleClick,
      role: "presentation",
      className: classes.root
    }, children));
  }

  ScrollTop.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().element.isRequired)
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["default"], {
    theme: theme
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_components_NavBar__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_AppRoutes__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_components_FifthSection__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_components_ContactUs__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_components_SixthSection__WEBPACK_IMPORTED_MODULE_7__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(ScrollTop, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["default"], {
    color: "primary",
    size: "small",
    "aria-label": "scroll back to top"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_14__["default"], null))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./assets/js/AppRoutes.jsx":
/*!*********************************!*\
  !*** ./assets/js/AppRoutes.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var _articles_AnxietyDisorder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./articles/AnxietyDisorder */ "./assets/js/articles/AnxietyDisorder.jsx");
/* harmony import */ var _articles_CareerStudies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./articles/CareerStudies */ "./assets/js/articles/CareerStudies.jsx");
/* harmony import */ var _articles_Depression__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./articles/Depression */ "./assets/js/articles/Depression.jsx");
/* harmony import */ var _articles_MentalAwareness__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./articles/MentalAwareness */ "./assets/js/articles/MentalAwareness.jsx");
/* harmony import */ var _articles_MentalHealthDisorders__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./articles/MentalHealthDisorders */ "./assets/js/articles/MentalHealthDisorders.jsx");
/* harmony import */ var _articles_MentalStigma__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./articles/MentalStigma */ "./assets/js/articles/MentalStigma.jsx");
/* harmony import */ var _articles_MentalSupport__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./articles/MentalSupport */ "./assets/js/articles/MentalSupport.jsx");
/* harmony import */ var _articles_MoodDisorder__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./articles/MoodDisorder */ "./assets/js/articles/MoodDisorder.jsx");
/* harmony import */ var _articles_OverviewMental__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./articles/OverviewMental */ "./assets/js/articles/OverviewMental.jsx");
/* harmony import */ var _articles_StoryOfHope__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./articles/StoryOfHope */ "./assets/js/articles/StoryOfHope.jsx");
/* harmony import */ var _components_embededVideo_HomeVideoSectionDown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/embededVideo/HomeVideoSectionDown */ "./assets/js/components/embededVideo/HomeVideoSectionDown.jsx");
/* harmony import */ var _components_FourthSection__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/FourthSection */ "./assets/js/components/FourthSection.jsx");
/* harmony import */ var _components_HeroSection__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/HeroSection */ "./assets/js/components/HeroSection.jsx");
/* harmony import */ var _components_SecondSection__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/SecondSection */ "./assets/js/components/SecondSection.jsx");
/* harmony import */ var _components_ThirdSection__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/ThirdSection */ "./assets/js/components/ThirdSection.jsx");
/* harmony import */ var _privacy_Privacy__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./privacy/Privacy */ "./assets/js/privacy/Privacy.jsx");
/* harmony import */ var _terms_Terms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./terms/Terms */ "./assets/js/terms/Terms.jsx");




















var AppRoutes = function AppRoutes() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Route, {
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react__WEBPACK_IMPORTED_MODULE_0__["default"].Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_components_HeroSection__WEBPACK_IMPORTED_MODULE_13__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_components_embededVideo_HomeVideoSectionDown__WEBPACK_IMPORTED_MODULE_11__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_components_SecondSection__WEBPACK_IMPORTED_MODULE_14__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_components_ThirdSection__WEBPACK_IMPORTED_MODULE_15__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_components_FourthSection__WEBPACK_IMPORTED_MODULE_12__["default"], null))
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Route, {
    path: "/article/my-career-studies-caused-my-mental-illness",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_articles_CareerStudies__WEBPACK_IMPORTED_MODULE_2__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Route, {
    path: "/article/depression-and-campus-life",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_articles_Depression__WEBPACK_IMPORTED_MODULE_3__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Route, {
    path: "/article/mental-illness-stigma-help-seeking-and-public-health-programs",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_articles_MentalStigma__WEBPACK_IMPORTED_MODULE_6__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Route, {
    path: "/article/introduction-to-mental-health-disorders-101",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_articles_MentalHealthDisorders__WEBPACK_IMPORTED_MODULE_5__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Route, {
    path: "/article/mental-health-support",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_articles_MentalSupport__WEBPACK_IMPORTED_MODULE_7__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Route, {
    path: "/article/mood-disorders-and-treatment",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_articles_MoodDisorder__WEBPACK_IMPORTED_MODULE_8__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Route, {
    path: "/article/mental-health-awareness",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_articles_MentalAwareness__WEBPACK_IMPORTED_MODULE_4__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Route, {
    path: "/article/what-is-anxiety-attack",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_articles_AnxietyDisorder__WEBPACK_IMPORTED_MODULE_1__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Route, {
    path: "/article/an-overview-of-mental-health-disorders",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_articles_OverviewMental__WEBPACK_IMPORTED_MODULE_9__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Route, {
    path: "/article/stories-of-hope-1",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_articles_StoryOfHope__WEBPACK_IMPORTED_MODULE_10__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Route, {
    path: "/privacy-policy",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_privacy_Privacy__WEBPACK_IMPORTED_MODULE_16__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_18__.Route, {
    path: "/terms",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_terms_Terms__WEBPACK_IMPORTED_MODULE_17__["default"], null)
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppRoutes);

/***/ }),

/***/ "./assets/js/ScrollToTop.jsx":
/*!***********************************!*\
  !*** ./assets/js/ScrollToTop.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ScrollToTop)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");


function ScrollToTop() {
  var _useLocation = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useLocation)(),
      pathname = _useLocation.pathname;

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

/***/ }),

/***/ "./assets/js/articles/AnxietyDisorder.jsx":
/*!************************************************!*\
  !*** ./assets/js/articles/AnxietyDisorder.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _ArticleWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ArticleWrapper */ "./assets/js/articles/ArticleWrapper.jsx");
/* harmony import */ var _images_anxiety_article_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/anxiety-article.jpg */ "./assets/images/anxiety-article.jpg");
/* harmony import */ var _components_PullQuote__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/PullQuote */ "./assets/js/articles/components/PullQuote.jsx");






var AnxietyDisorder = function AnxietyDisorder() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ArticleWrapper__WEBPACK_IMPORTED_MODULE_1__["default"], {
    themePhoto: _images_anxiety_article_jpg__WEBPACK_IMPORTED_MODULE_2__
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], null, "An anxiety disorder is a type of mental health condition. If you have an anxiety disorder, you may respond to certain things and situations with fear and dread. You may also experience physical signs of anxiety, such as a pounding heart and sweating.You may feel anxious or nervous if you have to tackle a problem at work, go to an interview, take a test or make an important decision. And anxiety can even be beneficial. For example, anxiety helps us notice dangerous situations and focuses our attention, so we stay safe."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], null, "But an anxiety disorder goes beyond the regular nervousness and slight fear you may feel from time to time. An anxiety disorder happens when; it interferes with your ability to function, you often overreact when something triggers your emotions and you can\u2019t control your responses to situations. Anxiety disorders can make it difficult to get through the day. Fortunately, there are several effective treatments for anxiety disorders."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_components_PullQuote__WEBPACK_IMPORTED_MODULE_3__["default"], null, "An anxiety disorder happens when; it interferes with your ability to function, you often overreact when something triggers your emotions and you can\u2019t control your responses to situations"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h6"
  }, "Who is at risk for anxiety disorders?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], null, "A mix of genetic and environmental factors can raise a person\u2019s risk for developing anxiety disorders. You may be at higher risk if you have or had certain personality traits, such as shyness or behavioral inhibition \u2014 feeling uncomfortable with, and avoiding, unfamiliar people, situations or environments. Stressful or traumatic events in early childhood or adulthood. Family history of anxiety or other mental health conditions. Certain physical conditions, including thyroid problems and heart arrhythmias (unusual heart rhythms). Anxiety disorders occur more often in women. Researchers are still studying why that happens. It may come from women\u2019s hormones, especially those that fluctuate throughout the month. The hormone testosterone may play a role, too \u2014 men have more, and it may ease anxiety. It\u2019s also possible that women are less likely to seek treatment, so the anxiety worsens."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h6"
  }, "What are the types of anxiety disorders?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], null, "There are several types of anxiety disorders, including: Generalized anxiety disorder (GAD). Panic disorder. Phobias and Separation anxiety. Other mental health conditions share features with anxiety disorders. These include post-traumatic stress disorder and obsessive-compulsive disorder."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h6"
  }, "What is generalized anxiety disorder (GAD)?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], null, "With GAD, you may feel extreme and unrealistic worry and tension \u2014 even if there\u2019s nothing to trigger these feelings. Most days, you may worry a lot about various topics, including health, work, school and relationships. You may feel that the worry continues from one thing to the next."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], null, "Physical symptoms of GAD can include restlessness, difficulty concentrating and sleeping problems."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h6",
    style: {
      marginTop: '20px'
    }
  }, "What is a panic disorder?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], null, "If you have a panic disorder, you get intense, sudden panic attacks. These attacks often feature stronger, more intense feelings than other types of anxiety disorders."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], null, "The feelings of terror may start suddenly and unexpectedly or they may come from a trigger, like facing a situation you dread. Panic attacks can resemble heart attacks. If there\u2019s any chance you\u2019re experiencing a heart attack, go to the emergency room. It\u2019s better to err on the side of caution and have a healthcare professional check you."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h6"
  }, "How common are anxiety disorders?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], null, "Anxiety disorders are the most common mental health conditions in the U.S. They affect about 40 million Americans. They happen to nearly 30% of adults at some point. Anxiety disorders most often begin in childhood, adolescence or early adulthood."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h6"
  }, "How do anxiety disorders affect children?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], null, "It\u2019s normal for children to feel some amount of anxiety, worry or fear at certain points. For example, a child may feel scared of a thunderstorm or barking dog. A teenager might get anxious about an upcoming test or school dance."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], null, "But sometimes, children approach these situations with overwhelming dread or they can\u2019t stop thinking about all the fears tied to one of these events. It may seem that none of your comforts help. These children often get \u201Cstuck\u201D on their worries. They have a hard time doing their daily activities, like going to school, playing and falling asleep. They\u2019re extremely reluctant to try something new."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], null, "When thinking about your child\u2019s anxiety levels, \u201Cgetting stuck\u201D is key. It separates the regular worries of childhood from an anxiety disorder that needs professional help. If the anxiety or worry interferes with your child\u2019s ability to function, it may be time to seek help."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h6"
  }, "How does medication treat anxiety disorders?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], null, "Medications can\u2019t cure an anxiety disorder. But they can improve symptoms and help you function better. Medications for anxiety disorders often include:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], null, "Anti-anxiety medications, such as benzodiazepines, may decrease your anxiety, panic and worry. They work quickly, but you can build up a tolerance to them. That makes them less effective over time. Your healthcare provider may prescribe an anti-anxiety medication for the short-term, then taper you off or the provider may add an antidepressant to the mix."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], null, "Antidepressants can also help with anxiety disorders. They tweak how your brain uses certain chemicals to improve mood and reduce stress. Antidepressants may take some time to work, so be patient. If you feel like you\u2019re ready to stop taking antidepressants, talk to your provider first."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], null, "Beta-blockers, usually used for high blood pressure, can help reduce some of the physical symptoms of anxiety disorders. They can relieve rapid heartbeat, shaking and trembling."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], null, "Your healthcare provider will work with you to find the right medication combination and dosage. Don\u2019t change the dose without consulting your provider. They\u2019ll monitor you to make sure the medicines are working without causing negative side effects."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h6"
  }, "How does psychotherapy treat anxiety disorders?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], null, "Psychotherapy, or counseling, helps you deal with your emotional response to the illness. A mental health provider talks through strategies to help you better understand and manage the disorder. Approaches include:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], null, "Cognitive behavioral therapy (CBT) which is the most common type of psychotherapy used with anxiety disorders. CBT for anxiety teaches you to recognize thought patterns and behaviors that lead to troublesome feelings. You then work on changing them."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], null, "Exposure therapy focuses on dealing with the fears behind the anxiety disorder. It helps you engage with activities or situations you may have been avoiding. Your provider may also use relaxation exercises and imagery with exposure therapy."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h6"
  }, "What happens if I don\u2019t get treatment for my child with an anxiety disorder?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], null, "Getting your child help for an anxiety disorder can improve their development and self-esteem. But untreated anxiety disorders can harm: Family relationships, School performance and Social functioning."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], null, "Your child may also end up with more serious mental and physical health problems. Fortunately, there are several treatments for anxiety disorders. The right treatment can help your child manage their symptoms and feel their best."));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnxietyDisorder);

/***/ }),

/***/ "./assets/js/articles/ArticleWrapper.jsx":
/*!***********************************************!*\
  !*** ./assets/js/articles/ArticleWrapper.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Container/Container.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Grid/Grid.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Avatar/Avatar.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/IconButton/IconButton.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Menu/Menu.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/MenuItem/MenuItem.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/ListItemIcon/ListItemIcon.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/ListItemText/ListItemText.js");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/deepPurple.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/index.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/MoreVert.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/FilterNoneTwoTone.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/ShareTwoTone.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
















function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["default"])(function (theme) {
  var _p;

  return {
    title: _defineProperty({
      color: '#292929',
      fontSize: '1.8rem'
    }, theme.breakpoints.up('sm'), {
      fontSize: '45px',
      lineHeight: '60px'
    }),
    content: {
      '& > p': (_p = {
        fontSize: '16px',
        lineHeight: '32px',
        color: '#292929'
      }, _defineProperty(_p, theme.breakpoints.up('sm'), {
        fontSize: '21px'
      }), _defineProperty(_p, "fontFamily", ['Source Serif Pro', 'serif', 'Georgia', 'Cambria', 'Times New Roman', ' Times', 'serif'].join(',')), _defineProperty(_p, "fontKerning", 'normal'), _p),
      '& > p:nth-child(even)': {
        margin: '20px 0'
      },
      '& > h5': {
        margin: '20px 0'
      }
    }
  };
});

var ArticleWrapper = function ArticleWrapper(_ref) {
  var children = _ref.children,
      themePhoto = _ref.themePhoto;
  var classes = useStyles();

  var _useLocation = (0,react_router__WEBPACK_IMPORTED_MODULE_17__.useLocation)(),
      state = _useLocation.state;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      anchorEl = _useState2[0],
      setAnchorEl = _useState2[1];

  var handleMoreOptionsClick = function handleMoreOptionsClick(e) {
    setAnchorEl(e.currentTarget);
  };

  var handleMoreOptionsClose = function handleMoreOptionsClose() {
    setAnchorEl(null);
  };

  var handleCopyLink = function handleCopyLink() {
    window.navigator.clipboard.writeText("".concat(window.location.origin, "/article/").concat(state.slug));
    handleMoreOptionsClose();
  };

  var handleShareClick = function handleShareClick() {
    if (window.navigator.share) {
      window.navigator.share({
        title: state.title,
        text: state.intro,
        url: "".concat(window.location.origin, "/article/").concat(state.slug)
      });
    }

    handleMoreOptionsClose();
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__["default"], {
    style: {
      marginTop: '70px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["default"], {
    container: true,
    spacing: 2,
    direction: "column",
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["default"], {
    item: true,
    xs: 12,
    md: 7
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_20__["default"], {
    variant: "h3",
    color: "textPrimary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__["default"], {
    textAlign: "center",
    fontWeight: 400,
    className: classes.title
  }, state.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__["default"], {
    my: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__["default"], {
    display: "flex",
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__["default"], {
    style: {
      backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_23__["default"][500],
      width: 56,
      height: 56
    }
  }, state.initials), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__["default"], {
    ml: "10px",
    display: "flex",
    flexDirection: "column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_20__["default"], {
    variant: "body1",
    color: "textPrimary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__["default"], {
    fontWeight: "bold"
  }, state.authorName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_20__["default"], {
    variant: "body2",
    color: "textSecondary",
    style: {
      marginTop: '5px'
    }
  }, "15 Oct, 2021"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["default"], {
    "aria-label": "options",
    "aria-haspopup": "true",
    color: "default",
    "aria-controls": "more-options",
    onClick: handleMoreOptionsClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__["default"].createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_25__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_26__["default"], {
    id: "more-options",
    anchorEl: anchorEl,
    keepMounted: true,
    open: Boolean(anchorEl),
    onClose: handleMoreOptionsClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_27__["default"], {
    onClick: handleCopyLink
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_28__["default"], {
    style: {
      minWidth: '30px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__["default"].createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_29__["default"], {
    fontSize: "small"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_30__["default"], null, "Copy link")), window.navigator.share && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_27__["default"], {
    onClick: handleShareClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_28__["default"], {
    style: {
      minWidth: '30px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__["default"].createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_31__["default"], {
    fontSize: "small"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_30__["default"], null, "Share")))), themePhoto && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__["default"].createElement("img", {
    src: themePhoto,
    alt: "",
    style: {
      width: '100%',
      objectFit: 'cover',
      marginBottom: '20px'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__["default"], {
    pt: "10px",
    className: classes.content
  }, children))));
};

ArticleWrapper.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().element.isRequired),
  themePhoto: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().string)
};
ArticleWrapper.defaultProps = {
  themePhoto: null
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArticleWrapper);

/***/ }),

/***/ "./assets/js/articles/CareerStudies.jsx":
/*!**********************************************!*\
  !*** ./assets/js/articles/CareerStudies.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _ArticleWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ArticleWrapper */ "./assets/js/articles/ArticleWrapper.jsx");
/* harmony import */ var _images_career_article_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/career-article.jpg */ "./assets/images/career-article.jpg");
/* harmony import */ var _components_PullQuote__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/PullQuote */ "./assets/js/articles/components/PullQuote.jsx");
/* harmony import */ var _components_ArticleImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/ArticleImage */ "./assets/js/articles/components/ArticleImage.jsx");
/* harmony import */ var _images_career_article_2_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../images/career-article-2.jpg */ "./assets/images/career-article-2.jpg");
/* eslint-disable react/no-unescaped-entities */








var CareerStudies = function CareerStudies() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ArticleWrapper__WEBPACK_IMPORTED_MODULE_1__["default"], {
    themePhoto: _images_career_article_jpg__WEBPACK_IMPORTED_MODULE_2__
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["default"], null, "While other young people think pursuing a degree in one of the best universities in the country is a big achievement, some of the young individuals have failed in the whole process due to poor career choice. Speaking with Valhalla media group, Gremlly Otieno, one of the medical and surgical students in the best university in Kenya, admitted that his degree caused him a lot of metal illness which he never realised at first. Coming from a successful family career wise this led him to choosing a career that he was not interested in but but decided to do it due to the pressure of the parents who have found their success in the medical industry. Not knowing that the child\u2019s interest in should be put first before advising him or her on the careers he or she might want to pursue that is where we all get it wrong. \"I found myself depressed, wanted to be alone and even confused within some years of my studies at the varsity because I never wanted to do that course it was just not in me my parents had forced me into something that I was not interested in\" said Gremlly."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_components_PullQuote__WEBPACK_IMPORTED_MODULE_3__["default"], null, "Pressure should be the last thing young people should be put in as they undergo career choices after school."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["default"], null, "Pressure should be the last thing young people should be put in as they undergo career choices after school. When a dad is a doctor for example this doesn\u2019t make his son or daughter have interest in being a doctor. Every individual should have an opportunity to pursue a career that they feel comfortable in. this is because the study process needs interest, driving force and motivation. This will really help in the reduction of the pressure that young individuals find themselves in during their campus life a thing that leads most of them engaging in drug and substance abuse."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_components_ArticleImage__WEBPACK_IMPORTED_MODULE_4__["default"], {
    photo: _images_career_article_2_jpg__WEBPACK_IMPORTED_MODULE_5__
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["default"], null, "Parents should play a very important role in career choices and not force them in careers they are not interested in this will at many points lead into depression. According to research it is stated that one of the major causes of stress among young individuals is wrong career studies at the university this leads to mental strain that is caused by lack of interest in what they are studying, and this can lead to pressure. Young individuals are believed to be the leaders of tomorrow, and this calls for a success in their education and having the right guidance in their youth life. this really helps in determining their tomorrow. Youth with mental health disorders often experience difficulties in a variety setting including within their families at home, in school and in the community. With mental health issues can lead to the young individuals facing disciplinary actions in school even and this maybe due to disturbed mind which can lead to change of behaviour, thoughts and emotions."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["default"], null, "According to statistics, 40% of young people suffer mental illness caused by anxiety and depression which means approximately out of 10 youths 4 are mentally ill. We as a society have a role to play in the lives of our young generation if we don\u2019t want to lose them taking care of them should be a priority in everyone\u2019s life. Prevention and early intervention in youth mental health should be put into consideration before things get out of hand."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["default"], null, "Evidence suggests that it would be unrealistic to consider promotion and prevention in mental health professional along. Integrated and multidisciplinary services are needed to increase the range of possible interventions and limit the risk of poor long-term outcome, with also potential benefits benefits in terms of healthcare system costs. However mental health professional has the scientific, ethical and moral responsibility to indicate the direction to all social, political and other health care bodies involved in the process of meeting mental health needs during youth years. Our careers pursuing process should give our young people peace of mind and success in life and not disturbed minds."));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CareerStudies);

/***/ }),

/***/ "./assets/js/articles/Depression.jsx":
/*!*******************************************!*\
  !*** ./assets/js/articles/Depression.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _ArticleWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ArticleWrapper */ "./assets/js/articles/ArticleWrapper.jsx");
/* harmony import */ var _images_depression_article_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/depression-article.jpg */ "./assets/images/depression-article.jpg");
/* harmony import */ var _components_PullQuote__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/PullQuote */ "./assets/js/articles/components/PullQuote.jsx");
/* harmony import */ var _components_ArticleImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/ArticleImage */ "./assets/js/articles/components/ArticleImage.jsx");
/* harmony import */ var _images_depression_article_2_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../images/depression-article-2.jpg */ "./assets/images/depression-article-2.jpg");








var Depression = function Depression() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ArticleWrapper__WEBPACK_IMPORTED_MODULE_1__["default"], {
    themePhoto: _images_depression_article_jpg__WEBPACK_IMPORTED_MODULE_2__
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["default"], null, "Mental health includes our emotional, psychological, and social well-being. It affects how we think, feel, and act. It also helps determine how we handle stress, relate to others, and make choices. Mental health is important at every stage of life, from childhood and adolescence through adulthood."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["default"], null, "Done with highschool? good, joined the university? That is even better but what happens during that period of transition can be detrimental to some students' psychological well-being. First and foremost there is the culture shock. The university environment is totally different from that of highschool therefore the feelings of uncertainty, confusion and the periods of frustration may lead to anxiety or even depression."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["default"], null, "Growing up, most of us wanted to be lawyers, doctors, pilots, journalists to name but a few but now here we are at the university no longer sure if we still want to pursue those careers probably due to the grades we got or we are just not interested in them anymore. The uncertainty about career paths weighs us down. We do not have anyone to talk to so we unknowingly fall into depression."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["default"], null, "All parents want to see their children succeed in life hence put too much pressure on them and at the same time the children are pressuring themselves to succeed in academics. They have stress of meeting deadlines and expectations. This slowly messes up with most students' mental health."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_components_PullQuote__WEBPACK_IMPORTED_MODULE_3__["default"], null, "All parents want to see their children succeed in life hence put too much pressure on them and at the same time the children are pressuring themselves to succeed in academics."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["default"], null, "In this new era of technological advancement, a lot goes on on social media. Most university students are more or less addicted to social media especially WhatsApp, Instagram, Tiktok and Twitter. People out here are setting standards on these pages. Vacations, dates, nights out, getaways are the order of the day. According to social media, people are really enjoying life. A lot of university students tend to compare their lives to what is happening on social media. They barely realize that most people only post their high moments. They therefore end up putting unnecessary pressure on themselves."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["default"], null, "The university life comes with a lot of freedom. Freedom that most students have never experienced before. The university environment also contains people from all walks of life. Their is definitely too much peer pressure especially when it comes to drugs and substance abuse. Most students start abusing drugs when they are in the university. The availability and affordability of these drugs also encourages the habit. Drugs and substance abuse slowly messes up with the mental health of these students and without even realizing they get addicted and some even fall into depression."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["default"], null, "A big percentage of university students especially the male gender are only supported financially by their parents during the first year of their studies. When they join the second year, they are seen as grown ups who can fend for themselves. Financial worries is therefore one of the greatest factor affecting mental health in the universities. Some open up businesses and when they boom, they can no longer balance schooling and business. Others their businesses barely thrive. In both scenarios the students are not in the right state of mind."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_components_ArticleImage__WEBPACK_IMPORTED_MODULE_4__["default"], {
    photo: _images_depression_article_2_jpg__WEBPACK_IMPORTED_MODULE_5__
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["default"], null, "Dealing with mental illness in the universities should be a top priority. Creating awareness on mental disorders, the signs, causes and consequences these disorders have on people is the very first step. Students' wellbeing is essential in fostering a good learning environment and wellness campaigns can be quite effective in addressing the mental health issues."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["default"], null, "Empowering of students is quite important. The moment these students feel loved and respected in that their ideas are listened to and they get feedback in short their input is valued it brings out a sense a self confidence, self efficacy and an ability to deal with issues around them."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["default"], null, "Counseling can go a long way in dealing with mental health issues. As stated earlier on many students fall into depression due to uncertainty about career paths, parental pressure, social media pressure, substance abuse and culture shock. These are issues that can be addressed through guidance and counseling. Having these sessions regularly and moreso immediately new students are admitted into the universities will save a large number from becoming victims of mental illnesses."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["default"], null, "Provision of stress management resources can help address the issue. Universities can have gyms where students can exercise, provide necessary equipment for different sports and games, set aside rooms for entertainment, organize events whereby students can showcase their talents, grant permission to students to organize interschool games competition and even award the winning teams. Such activities provide an opportunity for students to unwind."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["default"], null, "Dealing with mental health issues can also be a personal initiative. Taking preventive measures can save one from going through hell. Talking to someone about your feelings helps reduce the mental torture, keeping in contact with friends, learning new skills, doing stuff that you enjoy, exercising, taking a break from one's daily routine, volunteering and last but not least accepting oneself."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["default"], null, "Students in the universities experience a lot of struggles. The earlier the issues are addressed the better since it saves the student from experiencing mental disorders that affect performance in the long-run."));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Depression);

/***/ }),

/***/ "./assets/js/articles/MentalAwareness.jsx":
/*!************************************************!*\
  !*** ./assets/js/articles/MentalAwareness.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _ArticleWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ArticleWrapper */ "./assets/js/articles/ArticleWrapper.jsx");
/* harmony import */ var _images_mindfullness_article_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/mindfullness-article.jpg */ "./assets/images/mindfullness-article.jpg");
/* harmony import */ var _components_PullQuote__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/PullQuote */ "./assets/js/articles/components/PullQuote.jsx");






var MentalAwareness = function MentalAwareness() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ArticleWrapper__WEBPACK_IMPORTED_MODULE_1__["default"], {
    themePhoto: _images_mindfullness_article_jpg__WEBPACK_IMPORTED_MODULE_2__
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], null, "Mental health awareness is the recognition that our psychological well-being is an important part of our own health,productivity and hapiness ,as well as the well -being of our communities. It includes our emotional,psychological and social well-being.It affects how we feel,think and act. Mental illnesses affect 19% of the adult popultion,46% of teenagers and 13% of children each year."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], null, "Mental health is caused by different issues.Some of them are: Childhood abuse ,trauma or neglect -Social isolaton or loneliness, Experiencing discrimination and stigma, Social disadvantage ,poverty or debt ,Bereavement(losing someone close to you), Severe or long-term stress, Having a long-term physical health condition Unemployment or losing your job"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_components_PullQuote__WEBPACK_IMPORTED_MODULE_3__["default"], null, "Mental health awareness increases the chances for early intervention,which can result in a fast recovery. Awareness reduces negative adjectives that have been set to describe our people with a mental illness"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], null, "The main warning signs of mental illness are as follows: Excessive paranoia,worry, or anxiety. Long-lasting sadness or irritability. Extreme changes in moods. Social withdrawal. Dramatic changes in eating or sleeping pattern."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], null, "Mental health awareness increases the chances for early intervention,which can result in a fast recovery. Awareness reduces negative adjectives that have been set to describe our people with a mental illness. By raising awareness, mental health can now be seen as an illness. These illnesses can be managed by treatment."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], null, "There are several ways to participate in Mental Health Awareness.They include the following:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h6"
  }, "Share your story"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], null, "One of the best way to beat the stigma sorrounding mental health challenges is to keep the topic in the conversation."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h6"
  }, "Educate yourself on Mental Health And Wellness"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], null, "This include learning how to practice good self-care habits to protect your own mental wellness."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h6"
  }, "Talk to a therapist"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], null, "Another thing you can do is to speak with a therapist to addresss any mental health challenges that you`re facingin your life."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h6"
  }, "Focus On Your Self-care"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], null, "This plays an important role in mental health. Such habits include:- getting the proper amount of sleep, among others."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h6"
  }, "Suport those around you"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], null, "This include helping them to reach out for professional help from a therapist or you check in with them regurlarly to see if there`s anything you can do to suport them."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], null, "Increased investment is requird on all fronts: for mental health awareness to increase understanding and reduce stigma,for efforts to increase access to quality mental health care snd effective treatments and for research to identify new treatments and improve existing treatments for all mental disorders."));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MentalAwareness);

/***/ }),

/***/ "./assets/js/articles/MentalHealthDisorders.jsx":
/*!******************************************************!*\
  !*** ./assets/js/articles/MentalHealthDisorders.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/List/List.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _ArticleWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ArticleWrapper */ "./assets/js/articles/ArticleWrapper.jsx");
/* harmony import */ var _images_intro_101_article_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../images/intro-101-article.jpg */ "./assets/images/intro-101-article.jpg");
/* harmony import */ var _components_PullQuote__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/PullQuote */ "./assets/js/articles/components/PullQuote.jsx");
/* harmony import */ var _images_eating_disorders_article_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../images/eating-disorders-article.jpg */ "./assets/images/eating-disorders-article.jpg");
/* harmony import */ var _components_ArticleImage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/ArticleImage */ "./assets/js/articles/components/ArticleImage.jsx");
/* harmony import */ var _images_emotions_article_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../images/emotions-article.jpg */ "./assets/images/emotions-article.jpg");
/* harmony import */ var _images_anxiety_chum_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../images/anxiety-chum.jpg */ "./assets/images/anxiety-chum.jpg");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["default"])(function (theme) {
  var _paragraph;

  return {
    paragraph: (_paragraph = {
      fontSize: '16px',
      lineHeight: '32px',
      color: '#292929'
    }, _defineProperty(_paragraph, theme.breakpoints.up('sm'), {
      fontSize: '21px'
    }), _defineProperty(_paragraph, "fontFamily", ['Source Serif Pro', 'serif', 'Georgia', 'Cambria', 'Times New Roman', ' Times', 'serif'].join(',')), _defineProperty(_paragraph, "fontKerning", 'normal'), _paragraph)
  };
});

var MentalHealthDisorders = function MentalHealthDisorders() {
  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(_ArticleWrapper__WEBPACK_IMPORTED_MODULE_3__["default"], {
    themePhoto: _images_intro_101_article_jpg__WEBPACK_IMPORTED_MODULE_4__
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["default"], null, "As the name suggests, mental health disorders are illness that affect the cognitive factor thus affecting an individual\u2019s mood, feeling, thinking and behavior. Studies have shown that up to 50% who require mental health services are also involved in substance abuse problems. Substance use such as Cannabis especially in high content is said to have a dual diagnosis or a concurrent disorder. Why is this? People who suffer from mental disorders often than not abuse alcohol and other drugs to lessen the symptoms of mental illness."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(_components_PullQuote__WEBPACK_IMPORTED_MODULE_5__["default"], null, "Studies have shown that up to 50% who require mental health services are also involved in substance abuse problems."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "h5"
  }, "Schizoaffective Disorder"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["default"], null, "An individual is diagnosed with this disorder when they have both a mood disorder and a psychotic disorder at the same time. The dispiriting symptoms of schizoaffective disorder include hallucinations, delusions, disorganized thoughts, suicidal thoughts and concentration impairment. The maniac symptoms of this disorder include extreme forms of elation with increased self-coincidence. The individual often acts inappropriate in social situations, symptoms of psychosis are present making their behavior appear unusual."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "h5"
  }, "Psychosis"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["default"], null, "This mostly is associated with the mind where there is detachment from reality. A psychotic episode is a term when an individual experience this psychosis symptoms. It affects an individual\u2019s thoughts, feelings, thoughts and behavior which can be a result of using or withdrawing from drugs and alcohol. In statistics about 3 out of every 100 people experience a psychotic episode."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["default"], null, "Signs and symptoms of psychosis:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement("ol", {
    className: classes.paragraph
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["default"], {
    style: {
      fontFamily: 'inherit',
      fontSize: 'inherit'
    }
  }, "Anxiety")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["default"], {
    style: {
      fontFamily: 'inherit',
      fontSize: 'inherit'
    }
  }, "Social withdrawal")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["default"], {
    style: {
      fontFamily: 'inherit',
      fontSize: 'inherit'
    }
  }, "Sleep disturbance")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["default"], {
    style: {
      fontFamily: 'inherit',
      fontSize: 'inherit'
    }
  }, "Reduced drive and motivation")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["default"], {
    style: {
      fontFamily: 'inherit',
      fontSize: 'inherit'
    }
  }, "Behavioural changes")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["default"], {
    style: {
      fontFamily: 'inherit',
      fontSize: 'inherit'
    }
  }, "Irritability")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["default"], {
    style: {
      fontFamily: 'inherit',
      fontSize: 'inherit'
    }
  }, "Disorganized thinking")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["default"], {
    style: {
      fontFamily: 'inherit',
      fontSize: 'inherit'
    }
  }, "Hallucinations")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "h5"
  }, "Anxiety Disorders"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["default"], null, "This disorder is distinguished by its peculiarity in affecting the physical health of the individual. It is caused by biological and situational circumstances, heightened and continuing response to a perceived threat. Types of anxiety disorders:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(_components_ArticleImage__WEBPACK_IMPORTED_MODULE_7__["default"], {
    photo: _images_anxiety_chum_jpg__WEBPACK_IMPORTED_MODULE_9__
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["default"], {
    my: "15px",
    pl: "20px"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "h6"
  }, "General Anxiety"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: classes.paragraph
  }, "Continuous and redundant worries that last at least six months in relation to routine life events and activities for example work, relationships, family and finances."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "h6"
  }, "Panic Attacks"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: classes.paragraph
  }, "This is the fear of death leading to heart palpations, nausea, choking, vertigo, chest pain and perspiration."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "h6"
  }, "Panic Disorders"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: classes.paragraph
  }, "Dread of situations that may cause a panic attack."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "h6"
  }, "Phobias"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: classes.paragraph
  }, "Overwhelming feeling of terror towards a specific object, situation or activity."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "h6"
  }, "Obsessive-compulsive disorder"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: classes.paragraph
  }, "Recurring actions used to cope with unwanted thoughts."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "h6"
  }, "Post-tramaumatic stress disorder"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: classes.paragraph
  }, "It is the re-experiencing of a traumatic event for a long period of time.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(_components_ArticleImage__WEBPACK_IMPORTED_MODULE_7__["default"], {
    photo: _images_emotions_article_jpg__WEBPACK_IMPORTED_MODULE_8__
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "h5"
  }, "Schizophrenia"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["default"], null, "It is caused by a chemical disturbance of the brains functioning. Thus, this disorder is characterized by the changes in the behavior or symptoms present in a period of six months."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["default"], null, "It affects about one out of every 100 people. Common symptoms;"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement("ol", {
    className: classes.paragraph
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["default"], {
    style: {
      fontFamily: 'inherit',
      fontSize: 'inherit'
    }
  }, "Hearing voices may affect all the senses")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["default"], {
    style: {
      fontFamily: 'inherit',
      fontSize: 'inherit'
    }
  }, "Paranoia")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["default"], {
    style: {
      fontFamily: 'inherit',
      fontSize: 'inherit'
    }
  }, "Religious preoccupation")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["default"], {
    style: {
      fontFamily: 'inherit',
      fontSize: 'inherit'
    }
  }, "Thinking that you can control someone\u2019s thoughts or that some is controlling your thoughts.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["default"], {
    style: {
      fontFamily: 'inherit',
      fontSize: 'inherit'
    }
  }, "Disjointed thoughts.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["default"], {
    style: {
      fontFamily: 'inherit',
      fontSize: 'inherit'
    }
  }, "Righteousness")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "h5"
  }, "Eating Disorders"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["default"], null, "Involves the distortion of body images that make it hard for people to nourish themselves in a healthy way. It mostly affects men and women under the age 30."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["default"], {
    my: "15px",
    pl: "20px"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "h6"
  }, "Anorexia Nervosa"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: classes.paragraph
  }, "Dramatic weight loss due to fasting and excessive exercise"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "h6"
  }, "Bulimia Nervosa"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: classes.paragraph
  }, "Binge eating accompanied by self-inducing vomit")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(_components_ArticleImage__WEBPACK_IMPORTED_MODULE_7__["default"], {
    photo: _images_eating_disorders_article_jpg__WEBPACK_IMPORTED_MODULE_6__
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "h5"
  }, "Treatment and Recovery"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["default"], null, "Actions to be taken for any mental illness whether or not it is convoluted by alcohol or any drug misuse symptoms should be evident. Approaches to be taken:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["default"], {
    my: "15px",
    pl: "20px"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "h6"
  }, "Education"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: classes.paragraph
  }, "It helps your family understand the causes and effects and ways of dealing with the symptoms"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "h6"
  }, " Medication"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: classes.paragraph
  }, "Debut of new medication available with fewer side effects"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "h6"
  }, "Psychological Therapy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: classes.paragraph
  }, "Counselling helps an individual understand what is going on, change your lifestyle to optimize the chances of recovery and learn new skills."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "h6"
  }, "Social, Employment and Education Support"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: classes.paragraph
  }, "This is vital so that one is able to maintain skill development and continuation of income in order not to be cut off by friends and family. Research has shown that people who are mentally ill and have a support system have minimal relapses.")));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MentalHealthDisorders);

/***/ }),

/***/ "./assets/js/articles/MentalStigma.jsx":
/*!*********************************************!*\
  !*** ./assets/js/articles/MentalStigma.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/List/List.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _ArticleWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ArticleWrapper */ "./assets/js/articles/ArticleWrapper.jsx");
/* harmony import */ var _images_mental_help_article_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/mental-help-article.jpg */ "./assets/images/mental-help-article.jpg");
/* harmony import */ var _components_PullQuote__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/PullQuote */ "./assets/js/articles/components/PullQuote.jsx");
/* harmony import */ var _images_mental_help_article_2_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../images/mental-help-article-2.jpg */ "./assets/images/mental-help-article-2.jpg");
/* harmony import */ var _components_ArticleImage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/ArticleImage */ "./assets/js/articles/components/ArticleImage.jsx");


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["default"])(function (theme) {
  return {
    list: {
      '& > *': _defineProperty({
        fontSize: '16px',
        lineHeight: '32px',
        color: '#292929'
      }, theme.breakpoints.up('sm'), {
        fontSize: '21px'
      })
    }
  };
});

var MentalStigma = function MentalStigma() {
  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_ArticleWrapper__WEBPACK_IMPORTED_MODULE_2__["default"], {
    themePhoto: _images_mental_help_article_jpg__WEBPACK_IMPORTED_MODULE_3__
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["default"], null, "Globally, more than 70% of people with mental illness receive no treatment from health care staff. Factors increasing the likelihood of treatment avoidance or delay include:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("ol", {
    className: classes.list
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["default"], {
    style: {
      fontFamily: 'inherit',
      fontSize: 'inherit'
    }
  }, "Lack of knowledge to identify features of mental illness")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["default"], {
    style: {
      fontFamily: 'inherit',
      fontSize: 'inherit'
    }
  }, "Ignorance about how to access treatment")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["default"], {
    style: {
      fontFamily: 'inherit',
      fontSize: 'inherit'
    }
  }, "Prejudice against people who have mental illness")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["default"], {
    style: {
      fontFamily: 'inherit',
      fontSize: 'inherit'
    }
  }, "Expectations of discrimination against people diagnosed with mental illness"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["default"], null, "In this article, we reviewed the evidence of whether larger scale anti-stigma campaigns could lead to increased levels of help seeking."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["default"], null, "This article also describes the roles that stigma and discrimination contribute to the treatment gap and assesses the evidence that public health approaches to stigma and discrimination can facilitate access to mental health care."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["default"], {
    variant: "h5"
  }, "Discrimination, Stigma and Mental Health Care Access"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["default"], null, "The relationship between stigma and discrimination and access to care is multifaceted ; stigma and discrimination can impede access at institutional, community and individual levels."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["default"], null, "Addressing public stigma might reduce experienced and anticipated stigma among service users and facilitate help seeking and engagement with mental health care. For example, individual service users living in countries with higher rates of help seeking and treatment utilization, in addition to better perceived access to information about how to deal with mental health mental health problems and less stigmatizing attitudes, tended to have lower rates of self stigma and perceived discrimination."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_components_PullQuote__WEBPACK_IMPORTED_MODULE_4__["default"], null, "Addressing public stigma might reduce experienced and anticipated stigma among service users and facilitate help seeking and engagement with mental health care."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["default"], null, "See globally, however, stigmatizing attitudes persist among the public and have been shown to be prevalent and associated with a reluctance to seek help."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["default"], null, "Stigma and discrimination and their influence on access to care may vary based on experience of mental distress or other sociodemographic factors. For instance, psychotic disorders are highly stigmatizing, and people with psychosis are more likely to be perceived as violent and unpredictable relative to people with other mental health problems. This can lead to high levels of experienced and anticipated discrimination in health care settings. Moreover, substance abuse is consistently associated with high rates of public stigma and substance abuse problems from getting health care ; these individuals fear poor treatment by health care providers or trouble with the authorities."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["default"], {
    variant: "h5"
  }, "Impact of Public Health Programs on Help Seeking"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["default"], null, "Because of the complex multifaceted nature of stigma and discrimination and the subsequent barriers associated with accessing care, the solutions for reducing stigma and discrimination and facilitating access to care will need to be equally diverse."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["default"], null, "There should be separate national programs to reduce stigma and discrimination. Each of these anti-stigma programs need to consist of multiple components aimed at specific target groups (eg, the media, young people) and at the general public, and operates at multiple levels (ie, national social marketing campaigns and regional activities) and at the level of small community groups funded to carry out local anti-discrimination work."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["default"], null, "Mental health programs have intentions to seek help for a mental illness and to disclose such an illness to family and friends, which underlines the importance of mental health literacy. This applies to two types of knowledge measured by the mental health knowledge schedule. The first is knowledge that might influence subsequent mental health related attitudes and behaviors. The second is whether major psychiatric disorders are considered mental illnesses, which is associated with help seeking intentions from a primary care physician."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_components_ArticleImage__WEBPACK_IMPORTED_MODULE_6__["default"], {
    photo: _images_mental_help_article_2_jpg__WEBPACK_IMPORTED_MODULE_5__
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["default"], null, "Intentions to seek help for a mental health problem are associated with attitudes of tolerance and support for community care, but not with stigmatizing attitudes of Prejudice and exclusion."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["default"], null, "Also, if social marketing campaigns were effective at improving knowledge and positive attitudes, they would result in increased intentions towards help seeking."));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MentalStigma);

/***/ }),

/***/ "./assets/js/articles/MentalSupport.jsx":
/*!**********************************************!*\
  !*** ./assets/js/articles/MentalSupport.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _ArticleWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ArticleWrapper */ "./assets/js/articles/ArticleWrapper.jsx");
/* harmony import */ var _images_mental_support_article_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/mental-support-article.jpg */ "./assets/images/mental-support-article.jpg");
/* harmony import */ var _components_PullQuote__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/PullQuote */ "./assets/js/articles/components/PullQuote.jsx");






var MentalSupport = function MentalSupport() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ArticleWrapper__WEBPACK_IMPORTED_MODULE_1__["default"], {
    themePhoto: _images_mental_support_article_jpg__WEBPACK_IMPORTED_MODULE_2__
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], null, "In the recent years, there has been more increase in the acknowledgement of the important role of mental health. As it plays a crucial role in achieving global development goals, which is illustrated by the inclusion of mental health in the Sustainable Development Goals. Depression is one of the leading causes by disability of mental health and followed by suicide as the second leading cause of death among the range of 15\xAD-29 year olds. People with severe mental health conditions die prematurely as much as two decades early due to preventable physical conditions."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], null, "Despite some progress, people with mental health conditions often experience severe human rights violations, discrimination and stigma. Many mental health conditions can be effectively treated at relatively low cost, yet the gap between the people needing care and those with access to care remains substantial. Effective treatment coverage remains extremely low."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_components_PullQuote__WEBPACK_IMPORTED_MODULE_3__["default"], null, "Despite some progress, people with mental health conditions often experience severe human rights violations, discrimination and stigma"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], null, "Increasing investment is required on all fronts for mental health awareness and to increase understanding and also to reduce stigma. On the other side effort is needed to increase access to quality mental health care and effective treatment and the research to identify new treatment and improve existing treatment for all mental disorders. In 2019, World Health Organization (WHO) launched the WHO Special Initiative for Mental Health (2019-2023): Universal Health Coverage for Mental Health to ensure access to quality and affordable care for mental health conditions in 12 priority countries to 100 million more people."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], null, "Mental health conditions are increasing worldwide. Mainly simply because of demographic changes, there has been arise to 13% in mental health conditions and substances use disorders the last decade (2017). Around 20% of the world\u2019s children and adolescents have a mental health condition, with suicide being the second leading causes of death among 15-29 year olds. Approximately one in five people in post-conflict settings have a mental health condition."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], null, "Mental health conditions can have substantial effects in the life, such as school or place of work performance, relationship with family and friends and also ability to participate in the community. The two most common mental health conditions include depression and anxiety."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], null, "WHO works with Member States and partners to improve the mental health of individual and society at large. This includes the promotion of mental health well-being, the prevention of mental health disorders and effort to increase access to quality mental health care that respects people\u2019s human rights."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], null, "WHO\u2019s mental health activities cover normative activities and the country support activities. WHO has helped and offer mental health care in more than 110 countries and is active in the following areas: integration in general health care (through the Mental Health Gap Action Programme, mhGAP) and in disease or topic specific Programme such are those for HIV, tuberculosis and gender-based violence; suicide prevention, workforce development for mental health, promotion of the quality of care and the rights of the people receiving care (Quality Rights); mental health policy and legislation , mental health and psychosocial support in humanitarian emergencies ; developing and testing of innovative psychological interventions including digital interventions ; mental health in the work place , mental health economics , the mental health of children and adolescents and mental health promotion."));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MentalSupport);

/***/ }),

/***/ "./assets/js/articles/MoodDisorder.jsx":
/*!*********************************************!*\
  !*** ./assets/js/articles/MoodDisorder.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _ArticleWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ArticleWrapper */ "./assets/js/articles/ArticleWrapper.jsx");
/* harmony import */ var _images_mood_article_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/mood-article.jpg */ "./assets/images/mood-article.jpg");
/* harmony import */ var _components_PullQuote__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/PullQuote */ "./assets/js/articles/components/PullQuote.jsx");






var MoodDisorder = function MoodDisorder() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ArticleWrapper__WEBPACK_IMPORTED_MODULE_1__["default"], {
    themePhoto: _images_mood_article_jpg__WEBPACK_IMPORTED_MODULE_2__
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], null, "Moods are the emotions that affect people each and every day, sometimes people are sad and other time they are happy. People may be sad and happy in the same day, sometimes people\u2019s moods can get stuck on sad. The moods may change a lot or become extreme, when this happens it affect people\u2019s lives. All this is caused by a mental illness called mood disorders."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], null, "Mood disorders are a group of mental illnesses that affect how you feel and think about yourself, other people and life in general. They are some different types of mood disorders which include: depression, dysthymic disorder and bipolar disorder."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h5"
  }, "Depression"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], null, "These are feelings that leaves someone sad or depressed, some people experience depression as feeling or having no feelings. Depression can make one feel irritable, hopeless and guilty. There are many people who are living with depression who lose interest in things they often isolate themselves from family and friends. Depression can sometimes affect more than one\u2019s mood, one might have hard time concentrating or remembering. Some people when depressed can eat more than usual and others can oversleep when depressed. Depression can make one feel tired all the time hence not ready to do anything."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_components_PullQuote__WEBPACK_IMPORTED_MODULE_3__["default"], null, "These are feelings that leaves someone sad or depressed, some people experience depression as feeling or having no feelings. Depression can make one feel irritable, hopeless and guilty"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h5"
  }, "Seasonal affective disorder"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], null, "This is a type of depression that is affected by the seasons. It mostly affects the people during winter months, when there is less daylight."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h5"
  }, "Postpartum depression"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], null, "This is a type of depression that affect mostly mothers after they give birth. It is brought mostly by different biological changes as well as the social and emotional changes as well as social and emotional changes in parents\u2019 lives."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h5"
  }, "Bipolar disorder"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], null, "This type of mental illness has three different parts: depression, mania and normal feelings. The depression in this illness is not different from normal feelings. Some people feel different, there are some who feel very happy and others feel very angry on episode of mania. The common symptoms of many are; feeling very powerful, not needing much sleeping and having racing thoughts. During the episode of mania, you will find people doing things that they wouldn\u2019t do in normal condition, for instance, you will find women doing very expensive shopping sprees they can not afford. You will also find some youths having risky sex or use alcohol and other substances than usual. This mania may sometimes appear different in each person depending on how long this mania and depression episode last, how severe they are, how quickly a person\u2019s mood changes and how long a person a person has normal mood in between."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h5"
  }, "Dysthymic disorder"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], null, "This is this similar to depression, the only difference is that the symptoms of dysthymic disorder are milder and also last for a longer period than that of normal depression."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h6"
  }, "Psychosis"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], null, "Some people experience psychosis during an episode of severe depression or mania. There are two types of psychosis which are:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h6"
  }, "Delusions"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], null, "These are strong feelings which are not true, these are belief are like, someone has special powers. This is where people believe that they have special powers that can enable them do extra ordinary things but it is not true."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h6"
  }, "Hallucinations"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], null, "these are things that people sense which are not real. Mostly people who have been using drugs for a long time may experience this, where they sense things that do not exist but affect them. Individuals who have been using marijuana have got this problem where they fear things that are not real which troubles them."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h5"
  }, "Treatments"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h6"
  }, "Medication"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], null, "Depression is usually treated with a group of dedications known as antidepressant and bipolar disorder is treated with a group of medication known as stabilizers."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h6"
  }, "Light therapy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], null, "This is mostly helpful to people who experience sad feelings. This method of treatment may not favour everyone affected hence doctor\u2019s advice is encourage before going for it. It uses special kind of light which is normally much brighter than indoor lighting."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h6"
  }, "Counselling"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], null, "Cognitive behavioral therapy and interpersonal therapy are the most common counselling for mood disorders. Cognitive behavioral therapy helps in teaching problem-solving skills which helps in preventing symptoms."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], null, "Interpersonal therapy teaches the victim how to improve interaction with other people especially when one is depressed."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h6"
  }, "Electroconvulsive therapy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], null, "This mostly is of help to people who experience severe depression when other treatment like counselling fail to help. This is done by passing an electrical current through one\u2019s brain for a few seconds while he/she is under general anaesthesia."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h6"
  }, "Self-management"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], null, "This involves things that one can do in his/her own to keep the feelings better without necessarily going to the hospital. They include regular exercises, proper eating, sleeping enough time, managing stress, spending time with friends and family among others."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], null, "Spirituality and monitoring use of marijuana, alcohol and other related substances can help manage mood problem."));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MoodDisorder);

/***/ }),

/***/ "./assets/js/articles/OverviewMental.jsx":
/*!***********************************************!*\
  !*** ./assets/js/articles/OverviewMental.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _ArticleWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ArticleWrapper */ "./assets/js/articles/ArticleWrapper.jsx");
/* harmony import */ var _images_mental_problems_article_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/mental-problems-article.jpg */ "./assets/images/mental-problems-article.jpg");
/* harmony import */ var _components_PullQuote__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/PullQuote */ "./assets/js/articles/components/PullQuote.jsx");






var OverviewMental = function OverviewMental() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ArticleWrapper__WEBPACK_IMPORTED_MODULE_1__["default"], {
    themePhoto: _images_mental_problems_article_jpg__WEBPACK_IMPORTED_MODULE_2__
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], null, "Mental health can have variances in definitions depending on an individual\u2019s understanding of what Mental health really is. However, the most agreeable definition of mental health is \u201Ca state of well-being in which the individual realizes his or her own abilities, can cope with the normal stresses of life, can work productively and fruitfully, and is able to make a contribution to his or her community."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], null, "There are several types of mental disorder that influence\u2019s an individual\u2019s ability to maximize his or her ability to maximize his or her productivity. They range from Depression to Dementia. In this article we will however focus more on Bipolar disorder."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], null, "Bipolar Disorder, also referred to as Manic depression causes extreme mood swings that include emotional highs (mania or hypomania) and lows (depression). People who are depressed usually feel sad and/or hopeless and lose interest in most activities. For instance, a person who frequently enjoyed hanging out with his buddies becomes less interested all of a sudden and confides himself within a particular environment. When one\u2019s mood shifts to mania or hypomania, one feels intensely excited and happy, energetic or unusually irritable. These mood swings can affect sleep, energy, activity, judgement, behavior and the ability to clearly make judgments."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], null, "A person suffering from Bipolar Disorder tends to experience episodes of mood swings for a very long time or rarely in a year. Some people will experience some emotional symptoms between episodes while others won\u2019t experience any. Yes, bipolar disorder is a lifelong condition but one can manage his or her mood swings and other symptoms by following a treatment plan, which in most cases is treated with medications and psychological counselling (psychotherapy)."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h6"
  }, "Symptoms of Bipolar disorders"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], null, "They may include mania or hypomania and depression, and behavior, resulting in notable distress and difficulties in life."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h5"
  }, "Mania and hypomania"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], null, "They are two distinct types of episodes, (mania is more severe than hypomania and causes more noticeable problems at work, social activities as well as in relationships). They both have the same symptoms that include: Decreased need for sleep, Racing thoughts, Poor decision making, Unusual talkativeness, Exaggerated sense of well-being and self-confidence."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], null, "There are also symptoms that are severe enough to cause difficulty in day to day activities. It is a phase known as the Major depressive episode and is characterized by the following symptoms: Depressed mood, such as feeling sad, empty, hopeless. It can appear as irritability in teens. Loss of interest in most activities that one used to participate in."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_components_PullQuote__WEBPACK_IMPORTED_MODULE_3__["default"], null, "Mental awareness is key in one\u2019s growth in all aspects"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], null, "With the above overview, we can agree that at a certain point in life, we experienced either of those if not all but paid little or no attention. Mental awareness is key in one\u2019s growth in all aspects. Dominant suicidal thoughts, or any thought of hurting oneself is common to people with bipolar disorder. There is a need for one to see a mental specialist or advice an individual with the stated symptoms to visit a psychiatrist. Let us all remember that the dance of a mad man in the market is only funny to those who aren\u2019t his/her kin. Our mental health matters!"));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OverviewMental);

/***/ }),

/***/ "./assets/js/articles/StoryOfHope.jsx":
/*!********************************************!*\
  !*** ./assets/js/articles/StoryOfHope.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _ArticleWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ArticleWrapper */ "./assets/js/articles/ArticleWrapper.jsx");
/* harmony import */ var _images_support_article_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/support-article.jpg */ "./assets/images/support-article.jpg");
/* harmony import */ var _components_PullQuote__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/PullQuote */ "./assets/js/articles/components/PullQuote.jsx");
/* harmony import */ var _images_another_support_article_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../images/another-support-article.jpg */ "./assets/images/another-support-article.jpg");
/* harmony import */ var _components_ArticleImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/ArticleImage */ "./assets/js/articles/components/ArticleImage.jsx");








var StoryOfHope = function StoryOfHope() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ArticleWrapper__WEBPACK_IMPORTED_MODULE_1__["default"], {
    themePhoto: _images_support_article_jpg__WEBPACK_IMPORTED_MODULE_2__
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["default"], null, "When people look at me they would see a typical 20 something University student, who may come across as a bit reserved, quiet, thoughtful and is generally respected amongst his peers. What they would not see are the scars I carry. I am not referring to physical scars, but emotional scars on the inside."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["default"], null, "I have been struggling with my mental health on and off for many years, through various experiences that have been traumatic for me, beginning in my early teens and continuing to yo-yo between the highs and the extreme lows never really feeling a balance between the two. During my periods of being extremely low, I self-harmed and attempted to take my own life."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["default"], null, "This was hidden and kept secret from family and close friends for a very long time, until one such episode in May this year I finally reached out to a close friend who listened and directed me to get professional support urgently. I contacted the Guidance and Counselling, who were an initial point of support. I felt that by talking to absolute strangers, albeit professionals, about things that are so personal and emotional, I could go further. I decided that I can and should really be talking to those who know me, and opened up to friends, trusted colleagues and close family. This was not easy at all and has been one of the hardest things I have had to do, to discuss openly after so long that I have mental health issues and see their reactions."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["default"], null, "But, the help received from my new support network, my family, friends and close colleagues offering to just be there to listen when I am low, was overwhelming. My best friend and close family are in contact regularly, by phone and in person. At campus some of my friends helped me on a one to one basis and supported me in accessing the University\u2019s Guidance and Counselling Service. I felt apprehensive about this, but the staff have been supportive and the counselling sessions have helped me immensely."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["default"], null, "Personally, the key for me has very much been to be more open and honest with myself and to have the courage to access professional services, whether they be at the University or other support services. Friends, family and trusted colleagues are a great source of support, but I feel that professionals trained in these areas are an absolute essential means to recognise behaviours, derive at therapies and to help towards finding a forward facing direction."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_components_PullQuote__WEBPACK_IMPORTED_MODULE_3__["default"], null, "I cannot emphasis enough the importance of getting a trusted support network and accessing professional services when needed. Without them I honestly don\u2019t think I would still be here"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["default"], null, "Even with help it\u2019s a difficult uphill struggle. At times, I feel like I keep starting over again. At the time of writing I was going through a painful and difficult breakdown of a very important relationship (and one of my support network), causing confidences built up to be knocked, to which I felt extremely low and had repeat of old habits including self-harm. Relapses happen and I know that. But, even when I am again at my lowest, I just keep talking and letting the emotions out, bottling them up is not the right solution from my experience. There is no quick fix, it\u2019s a long game, with hurdles along the way and I just kept picking myself up to move on."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_components_ArticleImage__WEBPACK_IMPORTED_MODULE_5__["default"], {
    photo: _images_another_support_article_jpg__WEBPACK_IMPORTED_MODULE_4__
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["default"], null, "I cannot emphasis enough the importance of getting a trusted support network and accessing professional services when needed. Without them I honestly don\u2019t think I would still be here. From my experiences I\u2019ve learnt that there is no shame in having a mental health issue. After opening up and talking honestly the sense of fear gradually begins to fade. I know that it\u2019s not easy at all, it takes courage to take that initial step to say \u2018I have a mental health issue, please help me."));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StoryOfHope);

/***/ }),

/***/ "./assets/js/articles/components/ArticleImage.jsx":
/*!********************************************************!*\
  !*** ./assets/js/articles/components/ArticleImage.jsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Box/Box.js");




var ArticleImage = function ArticleImage(_ref) {
  var photo = _ref.photo;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["default"], {
    m: "30px 0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("img", {
    src: photo,
    alt: "",
    loading: "lazy",
    style: {
      width: '100%',
      objectFit: 'cover'
    }
  }));
};

ArticleImage.propTypes = {
  photo: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArticleImage);

/***/ }),

/***/ "./assets/js/articles/components/PullQuote.jsx":
/*!*****************************************************!*\
  !*** ./assets/js/articles/components/PullQuote.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["default"])(function (theme) {
  return {
    sizing: _defineProperty({
      fontStyle: 'italic',
      textAlign: 'center',
      fontSize: '1.2rem'
    }, theme.breakpoints.up('sm'), {
      fontSize: '2rem'
    })
  };
});

var PullQuote = function PullQuote(_ref) {
  var children = _ref.children;
  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {
    padding: "10px 20px"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {
    fontWeight: "bold",
    color: "primary.main",
    className: classes.sizing
  }, "\"", children, "\"")));
};

PullQuote.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().element.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PullQuote);

/***/ }),

/***/ "./assets/js/components/ArticlePreview.jsx":
/*!*************************************************!*\
  !*** ./assets/js/components/ArticlePreview.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.link.js */ "./node_modules/core-js/modules/es.string.link.js");
/* harmony import */ var core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _images_mentalke_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/mentalke.svg */ "./assets/images/mentalke.svg");






var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"])(function () {
  return {
    link: {
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline'
      }
    }
  };
});

var ArticlePreview = function ArticlePreview(_ref) {
  var title = _ref.title,
      intro = _ref.intro,
      authorName = _ref.authorName,
      image = _ref.image,
      slug = _ref.slug,
      initials = _ref.initials;
  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(react__WEBPACK_IMPORTED_MODULE_1__["default"].Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["default"], {
    style: {
      height: '250px',
      backgroundImage: "url(".concat(image, ")"),
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      borderRadius: '1rem',
      backgroundColor: '#23278a',
      backgroundBlendMode: 'difference',
      position: 'relative'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["default"], {
    style: {
      backgroundImage: "url(".concat(_images_mentalke_svg__WEBPACK_IMPORTED_MODULE_3__, ")"),
      height: '40px',
      width: '70px',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      position: 'absolute',
      right: '10px',
      top: '5px'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "body1",
    style: {
      position: 'absolute',
      bottom: '10px',
      left: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["default"], {
    fontWeight: "bold",
    color: "white"
  }, "By ", authorName))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["default"], {
    mt: "15px"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Link, {
    to: "/article/".concat(slug),
    state: {
      authorName: authorName,
      title: title,
      initials: initials,
      intro: intro,
      slug: slug
    },
    className: classes.link
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "body1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["default"], {
    fontWeight: "bold",
    color: "secondary.main"
  }, title))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "body2",
    color: "textSecondary"
  }, intro)));
};

ArticlePreview.propTypes = {
  image: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
  slug: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
  intro: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
  authorName: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
  initials: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArticlePreview);

/***/ }),

/***/ "./assets/js/components/ContactUs.jsx":
/*!********************************************!*\
  !*** ./assets/js/components/ContactUs.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Container/Container.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/Mail.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/YouTube.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/Twitter.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/Instagram.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["default"])(function (theme) {
  return {
    wordSize: _defineProperty({}, theme.breakpoints.down('sm'), {
      fontSize: '1.6rem'
    })
  };
});

var ContactUs = function ContactUs() {
  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "contact-us"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {
    height: "400px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "h4",
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {
    color: "secondary.main",
    fontWeight: 500,
    className: classes.wordSize
  }, "Need to reach out to us? Sure! Get in touch through our email and social media handles below")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    mt: "40px",
    flexWrap: "wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {
    display: "flex",
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_6__["default"], {
    fontSize: "medium"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["default"], {
    style: {
      marginLeft: '5px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("a", {
    href: "mailto:valhallamediagroup@gmail.com",
    style: {
      color: 'inherit',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {
    color: "secondary.main",
    fontWeight: "bold"
  }, "valhallamediagroup@gmail.com")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {
    display: "flex",
    alignItems: "center",
    ml: "20px"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_7__["default"], {
    fontSize: "medium"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["default"], {
    style: {
      marginLeft: '5px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("a", {
    href: "https://www.youtube.com/channel/UC6VmUjxdGO78fZ_Wc3hx4UA",
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      color: 'inherit',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {
    color: "secondary.main",
    fontWeight: "bold"
  }, "YouTube")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {
    display: "flex",
    alignItems: "center",
    mx: "20px"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_8__["default"], {
    fontSize: "medium"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["default"], {
    style: {
      marginLeft: '5px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("a", {
    href: "https://twitter.com/group_valhalla",
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      color: 'inherit',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {
    color: "secondary.main",
    fontWeight: "bold"
  }, "Twitter")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {
    display: "flex",
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_9__["default"], {
    fontSize: "medium"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["default"], {
    style: {
      marginLeft: '5px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("a", {
    href: "https://instagram.com/mentalhealth_6",
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      color: 'inherit',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {
    color: "secondary.main",
    fontWeight: "bold"
  }, "Instagram")))))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactUs);

/***/ }),

/***/ "./assets/js/components/ContainedBlueButton.jsx":
/*!******************************************************!*\
  !*** ./assets/js/components/ContainedBlueButton.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Button/Button.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);




var _excluded = ["children", "onClick"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* eslint-disable react/jsx-props-no-spreading */



var ButtonOutlined = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["default"])({
  root: {
    color: 'white',
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#181E4E',
    borderColor: '#181E4E',
    fontFamily: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"'].join(','),
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#181E4E',
      color: 'white',
      borderColor: '#181E4E'
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem #181E4E'
    },
    '&:hover': {
      boxShadow: 'none',
      backgroundColor: '#181E4E',
      color: 'white',
      borderColor: '#181E4E'
    }
  }
})(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["default"]);
var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["default"])({
  root: {
    '&$disabled': {
      background: 'rgba(0, 0, 0, 0.12)',
      color: 'white',
      boxShadow: 'none',
      border: 'none'
    }
  },
  disabled: {}
});

var ContainedBlueButton = function ContainedBlueButton(_ref) {
  var children = _ref.children,
      onClick = _ref.onClick,
      others = _objectWithoutProperties(_ref, _excluded);

  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["default"].createElement(ButtonOutlined, _extends({
    disableElevation: true,
    size: "small"
  }, others, {
    onClick: onClick,
    classes: {
      root: classes.root,
      // class name, e.g. `root-x`
      disabled: classes.disabled // class name, e.g. `disabled-x`

    }
  }), children || 'Login');
};

ContainedBlueButton.propTypes = {
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().element.isRequired)
};
ContainedBlueButton.defaultProps = {
  onClick: null
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContainedBlueButton);

/***/ }),

/***/ "./assets/js/components/FifthSection.jsx":
/*!***********************************************!*\
  !*** ./assets/js/components/FifthSection.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Grid/Grid.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _OutlinedPrimaryAppButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./OutlinedPrimaryAppButton */ "./assets/js/components/OutlinedPrimaryAppButton.jsx");
/* harmony import */ var _images_spiral_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../images/spiral.svg */ "./assets/images/spiral.svg");
/* harmony import */ var _images_star_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../images/star.svg */ "./assets/images/star.svg");
/* harmony import */ var _images_box_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../images/box.svg */ "./assets/images/box.svg");
/* harmony import */ var _newsLetter_NewsLetterDialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./newsLetter/NewsLetterDialog */ "./assets/js/components/newsLetter/NewsLetterDialog.jsx");













function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_18__["default"])(function (theme) {
  return {
    text: _defineProperty({}, theme.breakpoints.up('sm'), {
      fontSize: '1.4rem'
    })
  };
});

var FifthSection = function FifthSection() {
  var classes = useStyles();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      openNewsLetterDialog = _useState2[0],
      setOpenNewsLetterDialog = _useState2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__["default"].createElement(react__WEBPACK_IMPORTED_MODULE_12__["default"].Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__["default"].createElement(_newsLetter_NewsLetterDialog__WEBPACK_IMPORTED_MODULE_17__["default"], {
    open: openNewsLetterDialog,
    setOpen: setOpenNewsLetterDialog
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["default"], {
    minHeight: "200px",
    mt: "70px",
    px: "20px",
    style: {
      backgroundColor: '#181E4E'
    },
    position: "relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["default"], {
    style: {
      position: 'absolute',
      backgroundImage: "url(".concat(_images_spiral_svg__WEBPACK_IMPORTED_MODULE_14__, ")"),
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      width: '80px',
      height: '80px',
      left: '30%',
      top: '10%',
      zIndex: 1
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["default"], {
    style: {
      position: 'absolute',
      backgroundImage: "url(".concat(_images_box_svg__WEBPACK_IMPORTED_MODULE_16__, ")"),
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      width: '80px',
      height: '60px',
      left: '5%',
      bottom: '10%',
      zIndex: 1
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["default"], {
    style: {
      position: 'absolute',
      backgroundImage: "url(".concat(_images_spiral_svg__WEBPACK_IMPORTED_MODULE_14__, ")"),
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      width: '50px',
      height: '50px',
      left: '10%',
      top: '10%',
      zIndex: 1
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["default"], {
    style: {
      position: 'absolute',
      backgroundImage: "url(".concat(_images_star_svg__WEBPACK_IMPORTED_MODULE_15__, ")"),
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      width: '80px',
      height: '80px',
      right: '30%',
      bottom: '30%',
      zIndex: 1
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_20__["default"], {
    container: true,
    spacing: 2,
    alignItems: "center",
    style: {
      minHeight: 'inherit'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_20__["default"], {
    item: true,
    xs: 12,
    md: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__["default"], {
    variant: "h4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["default"], {
    fontWeight: "bold",
    color: "primary.main"
  }, "Quick")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__["default"], {
    variant: "h4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["default"], {
    fontWeight: "bold",
    color: "white"
  }, "Newsletter"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_20__["default"], {
    item: true,
    xs: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__["default"], {
    variant: "body1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["default"], {
    color: "white",
    className: classes.text
  }, "Get our monthly newsletter for a round-up of mental health and body image news, events, support and articles."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_20__["default"], {
    item: true,
    xs: 12,
    md: 3,
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__["default"].createElement(_OutlinedPrimaryAppButton__WEBPACK_IMPORTED_MODULE_13__["default"], {
    size: "large",
    onClick: function onClick() {
      return setOpenNewsLetterDialog(true);
    }
  }, "Subscribe to Newsletter")))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FifthSection);

/***/ }),

/***/ "./assets/js/components/Footer.jsx":
/*!*****************************************!*\
  !*** ./assets/js/components/Footer.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Container/Container.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");




var Footer = function Footer() {
  var handleContactUsClick = function handleContactUsClick(event) {
    var anchor = (event.target.ownerDocument || document).querySelector('#contact-us');

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["default"], {
    minHeight: "50px",
    style: {
      backgroundColor: '#181E4E'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["default"], {
    style: {
      minHeight: 'inherit'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["default"], {
    display: "flex",
    alignItems: "center",
    minHeight: "inherit",
    justifyContent: "space-between",
    flexWrap: "wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["default"], {
    display: "flex",
    alignItems: "center",
    flexGrow: 1,
    flexWrap: "wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "body2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["default"], {
    color: "white"
  }, "\xA9 2021 MasenoMentalKe - Valhalla Media Group.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "body2",
    style: {
      marginLeft: '5px',
      marginRight: '5px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["default"], {
    color: "white"
  }, "Need a website? Contact Olal Dennis", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("a", {
    href: "mailto:olaldennis@gmail.com",
    style: {
      color: 'inherit'
    }
  }, "<olaldennis@gmail.com>")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "body2",
    component: "div",
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["default"], {
    color: "white",
    mr: "15px"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    to: "/terms",
    style: {
      color: 'inherit'
    }
  }, "Terms")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["default"], {
    color: "white",
    mr: "15px"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    to: "/privacy-policy",
    style: {
      color: 'inherit'
    }
  }, "Privacy policy")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["default"], {
    color: "white",
    onClick: handleContactUsClick,
    style: {
      textDecoration: 'underline',
      cursor: 'pointer'
    }
  }, "Contact us")))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./assets/js/components/FourthSection.jsx":
/*!************************************************!*\
  !*** ./assets/js/components/FourthSection.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Container/Container.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _images_stories_of_hope_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/stories-of-hope.jpg */ "./assets/images/stories-of-hope.jpg");
/* harmony import */ var _SecondaryAppButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SecondaryAppButton */ "./assets/js/components/SecondaryAppButton.jsx");


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"])(function (theme) {
  return {
    title: _defineProperty({}, theme.breakpoints.up('sm'), {
      fontSize: '4.5rem',
      width: '70%'
    }),
    intro: _defineProperty({
      marginTop: '40px',
      marginBottom: '20px',
      color: 'white',
      textAlign: 'center'
    }, theme.breakpoints.up('sm'), {
      fontSize: '1.5rem',
      width: '70%'
    }),
    container: _defineProperty({
      height: '600px',
      backgroundColor: '#23a166d6',
      borderRadius: '1rem',
      backgroundImage: "url(".concat(_images_stories_of_hope_jpg__WEBPACK_IMPORTED_MODULE_2__, ")"),
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundBlendMode: 'color-burn'
    }, theme.breakpoints.down('sm'), {
      height: 'unset'
    })
  };
});

var FourthSection = function FourthSection() {
  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["default"], {
    maxWidth: "lg",
    style: {
      marginTop: '70px',
      display: 'flex'
    },
    id: "stories-of-hope"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.container,
    width: "inherit",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    px: "10px",
    py: "30px",
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["default"], {
    display: "flex",
    width: "fit-content",
    flexDirection: "column",
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "body1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["default"], {
    fontWeight: "bold",
    color: "white"
  }, "STORIES OF HOPE")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "h5",
    style: {
      marginTop: '40px',
      textAlign: 'center'
    },
    className: classes.title
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["default"], {
    fontWeight: "bold",
    color: "white"
  }, "Help comes in unexpected ways")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "body2",
    className: classes.intro
  }, "The help received from my new support network, my family, friends and close colleagues offering to just be there to listen when I am low, was overwhelming")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Link, {
    to: "/article/stories-of-hope-1",
    style: {
      textDecoration: 'none'
    },
    state: {
      authorName: 'Anonymous',
      title: 'Help comes in unexpected ways',
      initials: 'A'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_SecondaryAppButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    size: "large"
  }, "Read full story"))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FourthSection);

/***/ }),

/***/ "./assets/js/components/HeroSection.jsx":
/*!**********************************************!*\
  !*** ./assets/js/components/HeroSection.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Container/Container.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Grid/Grid.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/YouTube.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/Twitter.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/Instagram.js");
/* harmony import */ var _Patterns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Patterns */ "./assets/js/components/Patterns.jsx");
/* harmony import */ var _images_hero_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/hero.png */ "./assets/images/hero.png");
/* harmony import */ var _SecondaryAppButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SecondaryAppButton */ "./assets/js/components/SecondaryAppButton.jsx");
/* harmony import */ var _OutlinedPrimaryAppButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./OutlinedPrimaryAppButton */ "./assets/js/components/OutlinedPrimaryAppButton.jsx");
/* harmony import */ var _embededVideo_VideoPaper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./embededVideo/VideoPaper */ "./assets/js/components/embededVideo/VideoPaper.jsx");


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["default"])(function (theme) {
  return {
    lightBlueBlock: _defineProperty({}, theme.breakpoints.down('sm'), {
      display: 'none'
    }),
    patterns: _defineProperty({}, theme.breakpoints.down('sm'), {
      display: 'none'
    }),
    heroImage: _defineProperty({
      position: 'absolute',
      backgroundImage: "url(".concat(_images_hero_png__WEBPACK_IMPORTED_MODULE_3__, ")"),
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: '10% 25%',
      height: '100%',
      width: '50%',
      zIndex: 1,
      left: '-20px'
    }, theme.breakpoints.down('sm'), {
      display: 'none'
    }),
    heroWords: _defineProperty({
      width: '80%'
    }, theme.breakpoints.down('sm'), {
      width: '100%'
    }),
    hideVideoPaper: _defineProperty({}, theme.breakpoints.down('sm'), {
      display: 'none'
    })
  };
});

var HeroSection = function HeroSection() {
  var classes = useStyles();

  var handleExploreMoreClick = function handleExploreMoreClick(event) {
    var anchor = (event.target.ownerDocument || document).querySelector('#article-stories');

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  };

  var handleContactUsClick = function handleContactUsClick(event) {
    var anchor = (event.target.ownerDocument || document).querySelector('#contact-us');

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(react__WEBPACK_IMPORTED_MODULE_1__["default"].Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["default"], {
    height: "700px",
    style: {
      backgroundColor: '#181E4E',
      width: 'inherit',
      position: 'relative',
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: classes.heroImage
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["default"], {
    style: {
      position: 'absolute',
      width: '80px',
      height: '80px',
      right: 0,
      top: 0,
      backgroundColor: 'red'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["default"], {
    style: {
      position: 'absolute',
      width: '150px',
      height: '150px',
      bottom: 0,
      left: 0,
      backgroundColor: 'red'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["default"], {
    width: "20%",
    className: classes.lightBlueBlock,
    style: {
      backgroundColor: '#1B225B',
      height: 'inherit'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["default"], {
    style: {
      display: 'flex',
      alignItems: 'center',
      position: 'relative'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["default"], {
    container: true,
    spacing: 2,
    justifyContent: "flex-end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: classes.patterns
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_Patterns__WEBPACK_IMPORTED_MODULE_2__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["default"], {
    xs: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: classes.heroWords
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "h6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["default"], {
    color: "primary.main",
    fontWeight: "bold"
  }, "By Valhalla group")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "h3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["default"], {
    color: "white",
    fontWeight: "bold",
    position: "relative",
    zIndex: 3
  }, "Self-care is how you take your power back.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "body1",
    style: {
      display: 'flex',
      alignItems: 'center',
      marginTop: '15px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["default"], {
    width: "30px",
    mr: "10px",
    color: "primary.main"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("hr", {
    style: {
      color: 'inherit'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["default"], {
    color: "primary.main"
  }, "Lalah Delia")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["default"], {
    style: {
      marginTop: '15px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["default"], {
    color: "whitesmoke"
  }, "Moods are emotions that affect people each and every day...and sadly, people\u2019s mood can get stuck on sadness and depression for a long time.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["default"], {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    mt: "30px"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["default"], {
    container: true,
    spacing: 4,
    alignItems: "center",
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_SecondaryAppButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    fullWidth: true,
    onClick: handleExploreMoreClick
  }, "Explore More")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["default"], {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_OutlinedPrimaryAppButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    fullWidth: true,
    onClick: handleContactUsClick
  }, "Contact Us")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "body1",
    style: {
      marginTop: '50px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["default"], {
    color: "white"
  }, "You can find us on:")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["default"], {
    mt: "10px",
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["default"], {
    display: "flex",
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_12__["default"], {
    htmlColor: "white",
    fontSize: "medium"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["default"], {
    style: {
      marginLeft: '5px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("a", {
    href: "https://www.youtube.com/channel/UC6VmUjxdGO78fZ_Wc3hx4UA",
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      color: 'inherit',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["default"], {
    color: "white",
    fontWeight: "bold"
  }, "YouTube")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["default"], {
    display: "flex",
    alignItems: "center",
    mx: "10px"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_13__["default"], {
    htmlColor: "white",
    fontSize: "medium"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["default"], {
    style: {
      marginLeft: '5px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("a", {
    href: "https://twitter.com/group_valhalla",
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      color: 'inherit',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["default"], {
    color: "white",
    fontWeight: "bold"
  }, "Twitter")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["default"], {
    display: "flex",
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_14__["default"], {
    htmlColor: "white",
    fontSize: "medium"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["default"], {
    style: {
      marginLeft: '5px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("a", {
    href: "https://instagram.com/mentalhealth_6",
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      color: 'inherit',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["default"], {
    color: "white",
    fontWeight: "bold"
  }, "Instagram"))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: classes.hideVideoPaper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_embededVideo_VideoPaper__WEBPACK_IMPORTED_MODULE_6__["default"], null))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeroSection);

/***/ }),

/***/ "./assets/js/components/NavBar.jsx":
/*!*****************************************!*\
  !*** ./assets/js/components/NavBar.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/useMediaQuery/useMediaQuery.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/styles/useTheme.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/AppBar/AppBar.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Toolbar/Toolbar.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _images_logo_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../images/logo.svg */ "./assets/images/logo.svg");
/* harmony import */ var _images_logo_small_screen_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../images/logo-small-screen.svg */ "./assets/images/logo-small-screen.svg");
/* harmony import */ var _WhoAreWeDialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./WhoAreWeDialog */ "./assets/js/components/WhoAreWeDialog.jsx");












function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_15__["default"])(function () {
  return {
    navLink: {
      cursor: 'pointer',
      '&:hover': {
        textDecoration: 'underline'
      }
    }
  };
});

var NavBar = function NavBar() {
  var classes = useStyles();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      openDialog = _useState2[0],
      setOpenDialog = _useState2[1];

  var _useLocation = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_16__.useLocation)(),
      pathname = _useLocation.pathname;

  var smallScreen = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_17__["default"])((0,_material_ui_core__WEBPACK_IMPORTED_MODULE_18__["default"])().breakpoints.down('sm'));

  var handleScrollToHopeSection = function handleScrollToHopeSection(event) {
    var anchor = (event.target.ownerDocument || document).querySelector('#stories-of-hope');

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["default"], {
    position: "static",
    elevation: 0,
    id: "back-to-top-anchor",
    style: {
      color: 'white',
      backgroundColor: '#181E4E'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11__["default"].createElement(_WhoAreWeDialog__WEBPACK_IMPORTED_MODULE_14__["default"], {
    open: openDialog,
    setOpen: setOpenDialog
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_20__["default"], {
    style: {
      justifyContent: 'space-around'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__["default"], {
    variant: "h5",
    style: {
      padding: '5px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11__["default"].createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_22__.Link, {
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11__["default"].createElement("img", {
    src: smallScreen ? _images_logo_small_screen_svg__WEBPACK_IMPORTED_MODULE_13__ : _images_logo_svg__WEBPACK_IMPORTED_MODULE_12__,
    alt: "maseno-mental-ke-logo",
    width: smallScreen ? 40 : 200
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__["default"], {
    variant: "body1",
    component: "div"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__["default"], {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11__["default"].createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_22__.Link, {
    to: "/",
    style: {
      textDecoration: 'none',
      color: 'inherit'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__["default"], {
    className: classes.navLink
  }, "Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__["default"], {
    mx: "15px",
    className: classes.navLink,
    onClick: function onClick() {
      return setOpenDialog(true);
    }
  }, "About"), pathname === '/' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__["default"], {
    onClick: handleScrollToHopeSection,
    className: classes.navLink
  }, "Stories of Hope")))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavBar);

/***/ }),

/***/ "./assets/js/components/OutlinedPrimaryAppButton.jsx":
/*!***********************************************************!*\
  !*** ./assets/js/components/OutlinedPrimaryAppButton.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Button/Button.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);




var _excluded = ["children", "onClick"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* eslint-disable react/jsx-props-no-spreading */



var ButtonOutlined = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["default"])({
  root: {
    color: '#7DEBBD',
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '2px solid',
    lineHeight: 1.5,
    backgroundColor: '#181E4E',
    borderColor: '#7DEBBD',
    fontFamily: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"'].join(','),
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#181E4E',
      color: '#7DEBBD',
      borderColor: '#7DEBBD'
    },
    '&:focus': {
      boxShadow: 'none'
    },
    '&:hover': {
      boxShadow: 'none',
      backgroundColor: '#181E4E',
      color: '#7DEBBD',
      borderColor: '#7DEBBD'
    }
  }
})(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["default"]);
var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["default"])({
  root: {
    '&$disabled': {
      background: 'rgba(0, 0, 0, 0.12)',
      color: '#7DEBBD',
      boxShadow: 'none',
      border: 'none'
    }
  },
  disabled: {}
});

var OutlinedPrimaryAppButton = function OutlinedPrimaryAppButton(_ref) {
  var children = _ref.children,
      onClick = _ref.onClick,
      others = _objectWithoutProperties(_ref, _excluded);

  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["default"].createElement(ButtonOutlined, _extends({
    disableElevation: true,
    size: "small"
  }, others, {
    onClick: onClick,
    classes: {
      root: classes.root,
      // class name, e.g. `root-x`
      disabled: classes.disabled // class name, e.g. `disabled-x`

    }
  }), children || 'Login');
};

OutlinedPrimaryAppButton.propTypes = {
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().element.isRequired)
};
OutlinedPrimaryAppButton.defaultProps = {
  onClick: null
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OutlinedPrimaryAppButton);

/***/ }),

/***/ "./assets/js/components/Patterns.jsx":
/*!*******************************************!*\
  !*** ./assets/js/components/Patterns.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _images_box_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../images/box.svg */ "./assets/images/box.svg");
/* harmony import */ var _images_star_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/star.svg */ "./assets/images/star.svg");
/* harmony import */ var _images_spiral_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/spiral.svg */ "./assets/images/spiral.svg");






var Patterns = function Patterns() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react__WEBPACK_IMPORTED_MODULE_0__["default"].Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {
    style: {
      position: 'absolute',
      backgroundImage: "url(".concat(_images_box_svg__WEBPACK_IMPORTED_MODULE_1__, ")"),
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      width: '400px',
      height: '300px',
      left: '40%',
      bottom: '55%',
      zIndex: 1
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {
    style: {
      position: 'absolute',
      backgroundImage: "url(".concat(_images_box_svg__WEBPACK_IMPORTED_MODULE_1__, ")"),
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      width: '150px',
      height: '150px',
      right: '10%',
      bottom: '40%',
      zIndex: 1
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {
    style: {
      position: 'absolute',
      backgroundImage: "url(".concat(_images_box_svg__WEBPACK_IMPORTED_MODULE_1__, ")"),
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      width: '80px',
      height: '60px',
      right: '30%',
      bottom: '20%',
      zIndex: 1
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {
    style: {
      position: 'absolute',
      backgroundImage: "url(".concat(_images_star_svg__WEBPACK_IMPORTED_MODULE_2__, ")"),
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      width: '80px',
      height: '80px',
      left: '30%',
      bottom: '30%',
      zIndex: 1
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {
    style: {
      position: 'absolute',
      backgroundImage: "url(".concat(_images_spiral_svg__WEBPACK_IMPORTED_MODULE_3__, ")"),
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      width: '50px',
      height: '50px',
      left: '30%',
      top: '30%',
      zIndex: 1
    }
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Patterns);

/***/ }),

/***/ "./assets/js/components/SecondSection.jsx":
/*!************************************************!*\
  !*** ./assets/js/components/SecondSection.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Container/Container.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Grid/Grid.js");
/* harmony import */ var _images_phone_a_friend_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/phone-a-friend.jpg */ "./assets/images/phone-a-friend.jpg");
/* harmony import */ var _images_lift_your_mood_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/lift-your-mood.jpg */ "./assets/images/lift-your-mood.jpg");
/* harmony import */ var _images_hands_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../images/hands.jpg */ "./assets/images/hands.jpg");
/* harmony import */ var _ArticlePreview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ArticlePreview */ "./assets/js/components/ArticlePreview.jsx");
/* harmony import */ var _images_hope_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../images/hope.jpg */ "./assets/images/hope.jpg");
/* harmony import */ var _images_meditating_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../images/meditating.jpg */ "./assets/images/meditating.jpg");
/* harmony import */ var _images_we_hurt_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../images/we-hurt.jpg */ "./assets/images/we-hurt.jpg");
/* harmony import */ var _images_balloon_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../images/balloon.jpg */ "./assets/images/balloon.jpg");
/* harmony import */ var _images_happy_face_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../images/happy-face.jpg */ "./assets/images/happy-face.jpg");
/* harmony import */ var _images_101_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../images/101.jpg */ "./assets/images/101.jpg");


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["default"])(function (theme) {
  return {
    container: _defineProperty({
      marginTop: '250px'
    }, theme.breakpoints.down('sm'), {
      marginTop: '50px'
    })
  };
});

var SecondSection = function SecondSection() {
  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(react__WEBPACK_IMPORTED_MODULE_1__["default"].Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["default"], {
    fixed: true,
    style: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      minHeight: '500px'
    },
    id: "article-stories"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.container,
    width: "inherit"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["default"], {
    fixed: true,
    maxWidth: "md"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__["default"], {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    mb: "30px"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__["default"], {
    variant: "h5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__["default"], {
    fontWeight: "bold",
    color: "secondary.main"
  }, "Latest stories"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["default"], {
    container: true,
    spacing: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["default"], {
    item: true,
    xs: 12,
    md: 4,
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_ArticlePreview__WEBPACK_IMPORTED_MODULE_5__["default"], {
    image: _images_phone_a_friend_jpg__WEBPACK_IMPORTED_MODULE_2__,
    slug: "my-career-studies-caused-my-mental-illness",
    authorName: "Wivinya Betty",
    title: "My career studies caused my mental illness",
    intro: "Pressure should be the last thing young people should be put in as they undergo career choices after school",
    initials: "WB"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["default"], {
    item: true,
    xs: 12,
    md: 4,
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_ArticlePreview__WEBPACK_IMPORTED_MODULE_5__["default"], {
    image: _images_lift_your_mood_jpg__WEBPACK_IMPORTED_MODULE_3__,
    slug: "depression-and-campus-life",
    authorName: "Juliet Maina",
    title: "Depression and campus life",
    intro: "The university life comes with a lot of freedom. Freedom that most students have never experienced before",
    initials: "JM"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["default"], {
    item: true,
    xs: 12,
    md: 4,
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_ArticlePreview__WEBPACK_IMPORTED_MODULE_5__["default"], {
    image: _images_hands_jpg__WEBPACK_IMPORTED_MODULE_4__,
    slug: "mental-illness-stigma-help-seeking-and-public-health-programs",
    authorName: "Hillary Mang'oli",
    title: "Mental illness stigma, help seeking and public health programs",
    intro: "In this article, we reviewed the evidence of whether larger scale anti-stigma campaigns could lead to increased levels of help seeking",
    initials: "HM"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["default"], {
    item: true,
    xs: 12,
    md: 4,
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_ArticlePreview__WEBPACK_IMPORTED_MODULE_5__["default"], {
    image: _images_101_jpg__WEBPACK_IMPORTED_MODULE_11__,
    slug: "introduction-to-mental-health-disorders-101",
    authorName: "Charity Waithaka",
    title: "Introduction to mental health disorders 101",
    intro: "As the name suggests, mental health disorders are illness that affect the cognitive factor thus affecting an individual\u2019s mood, feeling, thinking and behavior",
    initials: "CW"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["default"], {
    item: true,
    xs: 12,
    md: 4,
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_ArticlePreview__WEBPACK_IMPORTED_MODULE_5__["default"], {
    image: _images_hope_jpg__WEBPACK_IMPORTED_MODULE_6__,
    slug: "mental-health-support",
    authorName: "Peter Lobor",
    title: "Mental health support",
    intro: "Increasing investment is required on all fronts for mental health awareness and to increase understanding and also to reduce stigma",
    initials: "PL"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["default"], {
    item: true,
    xs: 12,
    md: 4,
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_ArticlePreview__WEBPACK_IMPORTED_MODULE_5__["default"], {
    image: _images_meditating_jpg__WEBPACK_IMPORTED_MODULE_7__,
    slug: "an-overview-of-mental-health-disorders",
    authorName: "Victor Simiyu",
    title: "An overview of mental health disorders",
    intro: "Mental health can have variances in definitions depending on an individual\u2019s understanding of what Mental health really is",
    initials: "VS"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["default"], {
    item: true,
    xs: 12,
    md: 4,
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_ArticlePreview__WEBPACK_IMPORTED_MODULE_5__["default"], {
    image: _images_we_hurt_jpg__WEBPACK_IMPORTED_MODULE_8__,
    slug: "what-is-anxiety-attack",
    authorName: "Benardette Arama",
    title: "What is anxiety attack?",
    intro: "If you have an anxiety disorder, you may respond to certain things and situations with fear and dread",
    initials: "BA"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["default"], {
    item: true,
    xs: 12,
    md: 4,
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_ArticlePreview__WEBPACK_IMPORTED_MODULE_5__["default"], {
    image: _images_balloon_jpg__WEBPACK_IMPORTED_MODULE_9__,
    slug: "mental-health-awareness",
    authorName: "Said Mansour",
    title: "Mental health awareness",
    intro: "Mental health awareness is the recognition that our psychological well-being is an important part of our own health, productivity and happiness, as well as the well-being of our communities",
    initials: "SM"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["default"], {
    item: true,
    xs: 12,
    md: 4,
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_ArticlePreview__WEBPACK_IMPORTED_MODULE_5__["default"], {
    image: _images_happy_face_jpg__WEBPACK_IMPORTED_MODULE_10__,
    slug: "mood-disorders-and-treatment",
    authorName: "Mugo Timothy",
    title: "Mood disorders and treatment",
    intro: "Moods are the emotions that affect people each and every day, sometimes people are sad and other time they are happy",
    initials: "MT"
  })))))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SecondSection);

/***/ }),

/***/ "./assets/js/components/SecondaryAppButton.jsx":
/*!*****************************************************!*\
  !*** ./assets/js/components/SecondaryAppButton.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Button/Button.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);




var _excluded = ["children", "onClick"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* eslint-disable react/jsx-props-no-spreading */



var ButtonOutlined = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["default"])({
  root: {
    color: '#181E4E',
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '2px solid',
    lineHeight: 1.5,
    backgroundColor: '#7DEBBD',
    borderColor: '#7DEBBD',
    fontFamily: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"'].join(','),
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#7DEBBD',
      color: '#181E4E',
      borderColor: '#7DEBBD'
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem #7DEBBD'
    },
    '&:hover': {
      boxShadow: 'none',
      backgroundColor: '#7DEBBD',
      color: '#181E4E',
      borderColor: '#7DEBBD'
    }
  }
})(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["default"]);
var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["default"])({
  root: {
    '&$disabled': {
      background: 'rgba(0, 0, 0, 0.12)',
      color: '#181E4E',
      boxShadow: 'none',
      border: 'none'
    }
  },
  disabled: {}
});

var SecondaryAppButton = function SecondaryAppButton(_ref) {
  var children = _ref.children,
      onClick = _ref.onClick,
      others = _objectWithoutProperties(_ref, _excluded);

  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["default"].createElement(ButtonOutlined, _extends({
    disableElevation: true
  }, others, {
    onClick: onClick,
    classes: {
      root: classes.root,
      // class name, e.g. `root-x`
      disabled: classes.disabled // class name, e.g. `disabled-x`

    }
  }), children || 'Login');
};

SecondaryAppButton.propTypes = {
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().element.isRequired)
};
SecondaryAppButton.defaultProps = {
  onClick: null
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SecondaryAppButton);

/***/ }),

/***/ "./assets/js/components/SixthSection.jsx":
/*!***********************************************!*\
  !*** ./assets/js/components/SixthSection.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Container/Container.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Grid/Grid.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _images_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../images/logo.svg */ "./assets/images/logo.svg");
/* harmony import */ var _images_kenyan_flag_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/kenyan-flag.png */ "./assets/images/kenyan-flag.png");





var SixthSection = function SixthSection() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["default"], {
    minHeight: "300px",
    py: "20px",
    style: {
      backgroundColor: '#1B225B'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {
    maxWidth: "lg",
    style: {
      minHeight: 'inherit',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["default"], {
    container: true,
    spacing: 2,
    alignItems: "center",
    justifyContent: "space-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    xs: 12,
    md: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("img", {
    src: _images_logo_svg__WEBPACK_IMPORTED_MODULE_1__,
    alt: "site-logo",
    style: {
      width: '200px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    xs: 12,
    md: 8
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["default"], {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("img", {
    src: _images_kenyan_flag_png__WEBPACK_IMPORTED_MODULE_2__,
    alt: "kenyan-flag",
    style: {
      width: '60px',
      marginBottom: '20px'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "body2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["default"], {
    color: "white",
    textAlign: "end"
  }, "Valhalla Media Group comprises of ten Communication and Media Technology students from Maseno University, Kenya. We aim at tackling social injustices, politics, issues affecting the youths and any other day to day lives of the common Kenyan citizen through the media. Our group's motto is", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, "With the sun on our faces"))))))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SixthSection);

/***/ }),

/***/ "./assets/js/components/ThirdSection.jsx":
/*!***********************************************!*\
  !*** ./assets/js/components/ThirdSection.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _images_difficult_path_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/difficult-path.png */ "./assets/images/difficult-path.png");
/* harmony import */ var _images_holding_hands_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/holding-hands.jpg */ "./assets/images/holding-hands.jpg");


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"])(function (theme) {
  return {
    textSizeSmall: _defineProperty({}, theme.breakpoints.down('sm'), {
      fontSize: '2rem'
    }),
    needHelp: _defineProperty({
      position: 'absolute'
    }, theme.breakpoints.down('sm'), {
      position: 'unset'
    }),
    hesitate: _defineProperty({
      width: '20%',
      position: 'absolute',
      bottom: '30%',
      left: '5%'
    }, theme.breakpoints.down('sm'), {
      width: 'unset',
      left: 0,
      bottom: 0,
      position: 'unset'
    }),
    hideBgImages: _defineProperty({}, theme.breakpoints.down('sm'), {
      display: 'none'
    }),
    container: _defineProperty({
      height: '700px',
      padding: '10px'
    }, theme.breakpoints.down('sm'), {
      height: '400px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    })
  };
});

var ThirdSection = function ThirdSection() {
  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: classes.container,
    mt: "50px",
    style: {
      backgroundColor: '#181E4E',
      width: 'inherit',
      position: 'relative',
      backgroundImage: "url(".concat(_images_difficult_path_png__WEBPACK_IMPORTED_MODULE_2__, ")"),
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'top right',
      backgroundSize: '35%'
    },
    display: "flex",
    justifyContent: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["default"], {
    height: "fit-content",
    className: classes.needHelp,
    zIndex: 1,
    mt: "50px"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "h1",
    className: classes.textSizeSmall
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["default"], {
    fontWeight: "bold",
    color: "white"
  }, "Need Someone")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "h1",
    component: "div",
    style: {
      display: 'flex',
      alignItems: 'center'
    },
    className: classes.textSizeSmall
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["default"], {
    width: "100px",
    mr: "10px",
    fontWeight: "bold",
    color: "primary.main"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("hr", {
    style: {
      color: 'inherit',
      border: '4px solid'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["default"], {
    fontWeight: "bold",
    color: "primary.main"
  }, "to talk to?"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["default"], {
    height: "fit-content",
    className: classes.hesitate
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "body1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["default"], {
    fontWeight: "bold",
    color: "primary.main"
  }, "DON'T HESITATE")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "body1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["default"], {
    color: "white"
  }, "Reach out to BefriendersKenya through a call on", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("a", {
    href: "tel:+254722178177",
    style: {
      color: 'inherit'
    }
  }, "+254722178177"), ' ', "or email them at", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("a", {
    href: "mailto:befrienderskenya@gmail.com",
    style: {
      color: 'inherit'
    }
  }, "befrienderskenya@gmail.com"), ". Further information can be obtained through their official website at", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("a", {
    href: "http://www.befrienderskenya.org/",
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      color: 'inherit'
    }
  }, "www.befrienderskenya.org/")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: classes.hideBgImages,
    style: {
      position: 'absolute',
      backgroundImage: "url(".concat(_images_holding_hands_jpg__WEBPACK_IMPORTED_MODULE_3__, ")"),
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      bottom: 0,
      left: '30%',
      borderTopRightRadius: '1rem',
      borderTopLeftRadius: '1rem'
    },
    height: "30%",
    width: "200px"
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThirdSection);

/***/ }),

/***/ "./assets/js/components/WhoAreWeDialog.jsx":
/*!*************************************************!*\
  !*** ./assets/js/components/WhoAreWeDialog.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Slide/Slide.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/styles/useTheme.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/useMediaQuery/useMediaQuery.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Dialog/Dialog.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/DialogTitle/DialogTitle.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/DialogContent/DialogContent.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/DialogContentText/DialogContentText.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/DialogActions/DialogActions.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Button/Button.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_question_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/question.svg */ "./assets/images/question.svg");


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* eslint-disable react/jsx-props-no-spreading */




var Transition = react__WEBPACK_IMPORTED_MODULE_1__["default"].forwardRef(function Transition(props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({
    direction: "down",
    ref: ref
  }, props));
});

var WhoAreWeDialog = function WhoAreWeDialog(_ref) {
  var open = _ref.open,
      setOpen = _ref.setOpen;
  var theme = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["default"])();
  var fullScreen = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["default"])(theme.breakpoints.down('sm'));

  var handleClose = function handleClose() {
    setOpen(false);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["default"], {
    open: open,
    TransitionComponent: Transition,
    fullScreen: fullScreen,
    maxWidth: "sm",
    onClose: handleClose,
    "aria-describedby": "alert-dialog-who-we-are",
    style: {
      minHeight: '300px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["default"], {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["default"], {
    fontWeight: "bold",
    mr: "5px",
    color: "secondary.main"
  }, "Who are we"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("img", {
    src: _images_question_svg__WEBPACK_IMPORTED_MODULE_3__,
    style: {
      height: '50px'
    },
    alt: "question mark"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "alert-dialog-who-we-are"
  }, "Valhalla Media Group comprises of ten Communication and Media Technology students from Maseno University, Kenya. We aim at tackling social injustices, politics, issues affecting the youths and any other day to day lives of the common Kenyan citizen through the media. Our group's motto is ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("b", null, "With the sun on our faces"), ". This website is built specifically to address issues of mental health and depresssion amoung university students. By doing so, we believe that we would be sensitizing more on the fact that university students are also adversely affected and mitigations should be put into consideration by concerned stakeholders.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["default"], {
    onClick: handleClose
  }, "Close")));
};

WhoAreWeDialog.propTypes = {
  open: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool.isRequired),
  setOpen: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WhoAreWeDialog);

/***/ }),

/***/ "./assets/js/components/embededVideo/EmbededVideoDialog.jsx":
/*!******************************************************************!*\
  !*** ./assets/js/components/embededVideo/EmbededVideoDialog.jsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/styles/useTheme.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/useMediaQuery/useMediaQuery.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Dialog/Dialog.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/DialogTitle/DialogTitle.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/DialogContent/DialogContent.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/CircularProgress/CircularProgress.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/DialogActions/DialogActions.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Button/Button.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_12__);












function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var EmbededVideoDialog = function EmbededVideoDialog(_ref) {
  var open = _ref.open,
      setOpen = _ref.setOpen;
  var theme = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["default"])();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      loadingVideo = _useState2[0],
      setLoadingVideo = _useState2[1];

  var fullScreen = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_14__["default"])(theme.breakpoints.down('sm'));

  var handleClose = function handleClose() {
    setLoadingVideo(true);
    setOpen(false);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__["default"], {
    fullScreen: fullScreen,
    maxWidth: "md",
    open: open,
    onClose: handleClose,
    "aria-labelledby": "responsive-dialog-title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["default"], {
    id: "responsive-dialog-title"
  }, "Mental Health Testimonial. Episode 1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__["default"], {
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }, loadingVideo && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__["default"], {
    color: "secondary",
    size: 50,
    thickness: 5,
    style: {
      position: 'absolute'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11__["default"].createElement("iframe", {
    width: fullScreen ? 320 : 560,
    height: fullScreen ? 200 : 315,
    src: "https://www.youtube.com/embed/aQ1C6hk4n-o",
    title: "Mental Health Testimonial",
    frameBorder: "0",
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;",
    allowFullScreen: true,
    loading: "lazy",
    onLoad: function onLoad() {
      return setLoadingVideo(false);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_20__["default"], {
    onClick: handleClose
  }, "Close")));
};

EmbededVideoDialog.propTypes = {
  open: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().string.isRequired),
  setOpen: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().func.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmbededVideoDialog);

/***/ }),

/***/ "./assets/js/components/embededVideo/HomeVideoSectionDown.jsx":
/*!********************************************************************!*\
  !*** ./assets/js/components/embededVideo/HomeVideoSectionDown.jsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Container/Container.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _VideoPaper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VideoPaper */ "./assets/js/components/embededVideo/VideoPaper.jsx");


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["default"])(function (theme) {
  return {
    container: _defineProperty({
      marginTop: '50px'
    }, theme.breakpoints.up('sm'), {
      display: 'none'
    })
  };
});

var HomeVideoSectionDown = function HomeVideoSectionDown() {
  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["default"].createElement(_VideoPaper__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeVideoSectionDown);

/***/ }),

/***/ "./assets/js/components/embededVideo/VideoPaper.jsx":
/*!**********************************************************!*\
  !*** ./assets/js/components/embededVideo/VideoPaper.jsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Paper/Paper.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/PlayArrow.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/AccessTime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _ContainedBlueButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../ContainedBlueButton */ "./assets/js/components/ContainedBlueButton.jsx");
/* harmony import */ var _images_mental_health_matters_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../images/mental-health-matters.jpg */ "./assets/images/mental-health-matters.jpg");
/* harmony import */ var _images_mentalke_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../images/mentalke.svg */ "./assets/images/mentalke.svg");
/* harmony import */ var _EmbededVideoDialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./EmbededVideoDialog */ "./assets/js/components/embededVideo/EmbededVideoDialog.jsx");













function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_17__["default"])(function (theme) {
  return {
    watchVideoPaper: _defineProperty({
      width: '50%',
      zIndex: 100,
      position: 'absolute',
      bottom: '-30%',
      left: '22%',
      padding: '10px'
    }, theme.breakpoints.down('sm'), {
      width: 'auto',
      left: 0,
      right: 0,
      bottom: 0,
      position: 'unset'
    }),
    image: _defineProperty({
      width: '200px',
      height: '200px',
      backgroundImage: "url(".concat(_images_mental_health_matters_jpg__WEBPACK_IMPORTED_MODULE_14__, ")"),
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      borderRadius: '1rem',
      backgroundColor: '#23278a',
      backgroundBlendMode: 'difference',
      position: 'relative'
    }, theme.breakpoints.down('sm'), {
      width: '100%',
      marginBottom: '20px'
    }),
    info: _defineProperty({
      margin: '20px 25px',
      width: '60%'
    }, theme.breakpoints.down('sm'), {
      margin: 0,
      width: 'auto'
    })
  };
});

var VideoPaper = function VideoPaper() {
  var classes = useStyles();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      openVideoDialog = _useState2[0],
      setOpenVideoDialog = _useState2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__["default"].createElement(react__WEBPACK_IMPORTED_MODULE_12__["default"].Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__["default"].createElement(_EmbededVideoDialog__WEBPACK_IMPORTED_MODULE_16__["default"], {
    open: openVideoDialog,
    setOpen: setOpenVideoDialog
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__["default"], {
    variant: "elevation",
    className: classes.watchVideoPaper,
    elevation: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["default"], {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["default"], {
    className: classes.image
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["default"], {
    style: {
      backgroundImage: "url(".concat(_images_mentalke_svg__WEBPACK_IMPORTED_MODULE_15__, ")"),
      height: '40px',
      width: '70px',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      position: 'absolute',
      right: '10px',
      top: '5px'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["default"], {
    style: {
      height: '40px',
      width: '100px',
      position: 'absolute',
      left: '10px',
      bottom: '5px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_20__["default"], {
    variant: "body2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["default"], {
    fontWeight: "bold",
    color: "white"
  }, "EP 1")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_20__["default"], {
    variant: "body2",
    component: "div"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["default"], {
    fontWeight: "bold",
    color: "white"
  }, "Valhalla Group")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["default"], {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    className: classes.info
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_20__["default"], {
    variant: "body1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["default"], {
    fontWeight: "bold",
    color: "secondary.main"
  }, "Episode 1")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_20__["default"], {
    variant: "h5",
    style: {
      marginTop: '15px',
      marginBottom: '15px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["default"], {
    fontWeight: "bold",
    color: "secondary.main"
  }, "A premier of depression among university students")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_20__["default"], {
    variant: "body2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["default"], {
    color: "#757575"
  }, "In this episode, a Maseno University student who goes by the name Silvia Anita shares her side of story on how depression took a toll on her life.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["default"], {
    display: "flex",
    justifyContent: "space-between",
    mt: "15px",
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__["default"].createElement(_ContainedBlueButton__WEBPACK_IMPORTED_MODULE_13__["default"], {
    startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__["default"].createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_21__["default"], {
      htmlColor: "white",
      fontSize: "medium"
    }),
    onClick: function onClick() {
      return setOpenVideoDialog(true);
    }
  }, "Watch episode"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_20__["default"], {
    variant: "body2",
    component: "div",
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__["default"].createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_22__["default"], {
    htmlColor: "#181E4E"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__["default"], {
    fontWeight: "bold",
    color: "secondary.main",
    ml: "5px"
  }, "8 mins")))))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VideoPaper);

/***/ }),

/***/ "./assets/js/components/newsLetter/NewsLetterDialog.jsx":
/*!**************************************************************!*\
  !*** ./assets/js/components/newsLetter/NewsLetterDialog.jsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/styles/useTheme.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/useMediaQuery/useMediaQuery.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Snackbar/Snackbar.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Dialog/Dialog.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/DialogTitle/DialogTitle.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/DialogContent/DialogContent.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/TextField/TextField.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/CircularProgress/CircularProgress.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/DialogActions/DialogActions.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Button/Button.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/lab */ "./node_modules/@material-ui/lab/esm/Alert/Alert.js");
/* harmony import */ var _SecondaryAppButton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../SecondaryAppButton */ "./assets/js/components/SecondaryAppButton.jsx");














function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var NewsLetterDialog = function NewsLetterDialog(_ref) {
  var open = _ref.open,
      setOpen = _ref.setOpen;
  var theme = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["default"])();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      email = _useState2[0],
      setEmail = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      name = _useState4[0],
      setName = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isLoading = _useState6[0],
      setIsLoading = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      openSnack = _useState8[0],
      setOpenSnack = _useState8[1];

  var fullScreen = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_17__["default"])(theme.breakpoints.down('sm'));

  var handleClose = function handleClose() {
    setOpen(false);
  };

  var handleCloseSnack = function handleCloseSnack(event, reason) {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnack(false);
  };

  var handleOnSubmit = function handleOnSubmit() {
    setIsLoading(true);
    setTimeout(function () {
      setOpenSnack(true);
      setOpen(false);
      setIsLoading(false);
    }, 3000);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__["default"].createElement(react__WEBPACK_IMPORTED_MODULE_13__["default"].Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__["default"], {
    open: openSnack,
    autoHideDuration: 4000,
    onClose: handleCloseSnack,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__["default"].createElement(_material_ui_lab__WEBPACK_IMPORTED_MODULE_19__["default"], {
    severity: "success",
    onClose: handleCloseSnack
  }, "You have been added to our newsletter list!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_20__["default"], {
    fullScreen: fullScreen,
    maxWidth: "md",
    open: open,
    onClose: handleClose,
    "aria-labelledby": "newsletter-dialog-title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__["default"], {
    id: "newsletter-dialog-title"
  }, "NewsLetter"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__["default"], {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["default"], {
    variant: "outlined",
    type: "text",
    id: "user-name",
    disabled: isLoading,
    margin: "dense",
    label: "Your Name",
    value: name,
    onChange: function onChange(e) {
      return setName(e.target.value.trim());
    },
    fullWidth: true,
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__["default"], {
    mt: "15px"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__["default"], {
    variant: "outlined",
    type: "email",
    id: "user-email",
    value: email,
    disabled: isLoading,
    margin: "dense",
    label: "Your Email",
    fullWidth: true,
    onChange: function onChange(e) {
      return setEmail(e.target.value.trim());
    },
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__["default"], {
    mt: "15px"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__["default"], {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__["default"].createElement(_SecondaryAppButton__WEBPACK_IMPORTED_MODULE_15__["default"], {
    fullWidth: true,
    disabled: !(email && name) || isLoading,
    onClick: handleOnSubmit
  }, "Subscribe"), isLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__["default"], {
    size: 25,
    thickness: 5,
    style: {
      position: 'absolute'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_26__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_27__["default"], {
    onClick: handleClose
  }, "Close"))));
};

NewsLetterDialog.propTypes = {
  open: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().bool.isRequired),
  setOpen: (prop_types__WEBPACK_IMPORTED_MODULE_14___default().func.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewsLetterDialog);

/***/ }),

/***/ "./assets/js/index.js":
/*!****************************!*\
  !*** ./assets/js/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Index)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./assets/js/App.jsx");
/* harmony import */ var _ScrollToTop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ScrollToTop */ "./assets/js/ScrollToTop.jsx");





function Index() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_ScrollToTop__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], null));
}
(0,preact__WEBPACK_IMPORTED_MODULE_1__.render)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(Index, null), document.getElementById('root'));

/***/ }),

/***/ "./assets/js/privacy/Privacy.jsx":
/*!***************************************!*\
  !*** ./assets/js/privacy/Privacy.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Container/Container.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");


var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
  return {
    root: {
      '& > p': {
        fontSize: '1.15rem'
      }
    }
  };
});

var Privacy = function Privacy() {
  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["default"], {
    maxWidth: "md",
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h2", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, "PRIVACY POLICY")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "Effective date: 2021-09-01"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "1. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, "Introduction")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "Welcome to ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, " Valhalla Media Group"), "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, "Valhalla Media Group"), " (\u201Cus\u201D, \u201Cwe\u201D, or \u201Cour\u201D) operates", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, "masenomental.com"), " (hereinafter referred to as ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, "\u201CService\u201D"), ")."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "Our Privacy Policy governs your visit to ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, "masenomental.com"), ", and explains how we collect, safeguard and disclose information that results from your use of our Service."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "We use your data to provide and improve Service. By using Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, the terms used in this Privacy Policy have the same meanings as in our Terms and Conditions."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "Our Terms and Conditions (", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, "\u201CTerms\u201D"), ") govern all use of our Service and together with the Privacy Policy constitutes your agreement with us (", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, "\u201Cagreement\u201D"), ")."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "2. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, "Definitions")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, "SERVICE"), " means the masenomental.com website operated by Equator Times Media."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, "PERSONAL DATA"), " means data about a living individual who can be identified from those data (or from those and other information either in our possession or likely to come into our possession)."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, "USAGE DATA"), " is data collected automatically either generated by the use of Service or from Service infrastructure itself (for example, the duration of a page visit)."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, "COOKIES"), " are small files stored on your device (computer or mobile device)."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, "DATA CONTROLLER"), " means a natural or legal person who (either alone or jointly or in common with other persons) determines the purposes for which and the manner in which any personal data are, or are to be, processed. For the purpose of this Privacy Policy, we are a Data Controller of your data."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, "DATA PROCESSORS (OR SERVICE PROVIDERS)"), " means any natural or legal person who processes the data on behalf of the Data Controller. We may use the services of various Service Providers in order to process your data more effectively."), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, "DATA SUBJECT"), " is any living individual who is the subject of Personal Data."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, "THE USER"), " is the individual using our Service. The User corresponds to the Data Subject, who is the subject of Personal Data."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "3. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, "Information Collection and Use")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "We collect several different types of information for various purposes to provide and improve our Service to you."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "4. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, "Types of Data Collected")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, "Personal Data")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you (", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, "\u201CPersonal Data\u201D"), "). Personally identifiable information may include, but is not limited to:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "0.1. Email address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "0.2. First name and last name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "0.3. Phone number"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "0.5. Cookies and Usage Data"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "We may use your Personal Data to contact you with newsletters, marketing or promotional materials and other information that may be of interest to you. You may opt out of receiving any, or all, of these communications from us by following the unsubscribe link."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, "Usage Data")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "We may also collect information that your browser sends whenever you visit our Service or when you access Service by or through any device (", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, "\u201CUsage Data\u201D"), ")."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "This Usage Data may include information such as your computer\u2019s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "When you access Service with a device, this Usage Data may include information such as the type of device you use, your device unique ID, the IP address of your device, your device operating system, the type of Internet browser you use, unique device identifiers and other diagnostic data."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, "Tracking Cookies Data")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "We use cookies and similar tracking technologies to track the activity on our Service and we hold certain information."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "Cookies are files with a small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Other tracking technologies are also used such as beacons, tags and scripts to collect and track information and to improve and analyze our Service."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "Examples of Cookies we use:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "0.1. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, "Session Cookies:"), " We use Session Cookies to operate our Service."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "0.2. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, "Preference Cookies:"), " We use Preference Cookies to remember your preferences and various settings."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "0.3. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, "Security Cookies:"), " We use Security Cookies for security purposes."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "0.4. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, "Advertising Cookies:"), " Advertising Cookies are used to serve you with advertisements that may be relevant to you and your interests."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, "Other Data")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "5. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, "Use of Data")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "Valhalla Media Group uses the collected data for various purposes:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "0.1. to provide and maintain our Service;"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "0.2. to notify you about changes to our Service;"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "0.3. to allow you to participate in interactive features of our Service when you choose to do so;"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "0.4. to provide customer support;"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "0.5. to gather analysis or valuable information so that we can improve our Service;"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "0.6. to monitor the usage of our Service;"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "0.7. to detect, prevent and address technical issues;"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "0.8. to fulfil any other purpose for which you provide it;"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "0.9. to carry out our obligations and enforce our rights arising from any contracts entered into between you and us, including for billing and collection;"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "0.10. to provide you with notices about your account and/or subscription, including expiration and renewal notices, email-instructions, etc.;"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "0.11. to provide you with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless you have opted not to receive such information;"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "0.12. in any other way we may describe when you provide the information;"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "0.13. for any other purpose with your consent."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "6. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, "Retention of Data")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "We will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "We will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period, except when this data is used to strengthen the security or to improve the functionality of our Service, or we are legally obligated to retain this data for longer time periods."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "7. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, "Transfer of Data")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "Your information, including Personal Data, may be transferred to \u2013 and maintained on \u2013 computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "If you are located outside Kenya and choose to provide information to us, please note that we transfer the data, including Personal Data, to Kenya and process it there."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "Valhalla Media Group will take all the steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organisation or a country unless there are adequate controls in place including the security of your data and other personal information."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "8. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, "Disclosure of Data")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "We may disclose personal information that we collect, or you provide:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "0.1. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, "Disclosure for Law Enforcement.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "Under certain circumstances, we may be required to disclose your Personal Data if required to do so by law or in response to valid requests by public authorities."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "0.2. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, "Business Transaction.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "If we or our subsidiaries are involved in a merger, acquisition or asset sale, your Personal Data may be transferred."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "0.3. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, "Other cases. We may disclose your information also:")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "0.3.1. to our subsidiaries and affiliates;"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "0.3.2. to contractors, service providers, and other third parties we use to support our business;"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "0.3.3. to fulfill the purpose for which you provide it;"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "0.3.4. for the purpose of including your company\u2019s logo on our website;"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "0.3.5. for any other purpose disclosed by us when you provide the information;"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "0.3.6. with your consent in any other cases;"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "0.3.7. if we believe disclosure is necessary or appropriate to protect the rights, property, or safety of the Company, our customers, or others."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "9. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, "Security of Data")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "10.", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, "Your Data Protection Rights Under General Data Protection Regulation (GDPR)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "If you are a resident of the European Union (EU) and European Economic Area (EEA), you have certain data protection rights, covered by GDPR."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "We aim to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Data."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, ' ', "If you wish to be informed what Personal Data we hold about you and if you want it to be removed from our systems, please email us at", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, "valhallamediagroup.com"), "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "In certain circumstances, you have the following data protection rights:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "0.1. the right to access, update or to delete the information we have on you;"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "0.2. the right of rectification. You have the right to have your information rectified if that information is inaccurate or incomplete;"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "0.3. the right to object. You have the right to object to our processing of your Personal Data;"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "0.4. the right of restriction. You have the right to request that we restrict the processing of your personal information;"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "0.5. the right to data portability. You have the right to be provided with a copy of your Personal Data in a structured, machine-readable and commonly used format;"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "0.6. the right to withdraw consent. You also have the right to withdraw your consent at any time where we rely on your consent to process your personal information;"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "Please note that we may ask you to verify your identity before responding to such requests. Please note, we may not able to provide Service without some necessary data."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "You have the right to complain to a Data Protection Authority about our collection and use of your Personal Data. For more information, please contact your local data protection authority in the European Economic Area (EEA)."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "11.", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, "Your Data Protection Rights under the California Privacy Protection Act (CalOPPA)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "CalOPPA is the first state law in the nation to require commercial websites and online services to post a privacy policy. The law\u2019s reach stretches well beyond California to require a person or company in the United States (and conceivable the world) that operates websites collecting personally identifiable information from California consumers to post a conspicuous privacy policy on its website stating exactly the information being collected and those individuals with whom it is being shared, and to comply with this policy."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "According to CalOPPA we agree to the following:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "0.1. users can visit our site anonymously;"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "0.2. our Privacy Policy link includes the word \u201CPrivacy\u201D, and can easily be found on the home page of our website;"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "0.3. users will be notified of any privacy policy changes on our Privacy Policy Page;"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "0.4. users are able to change their personal information by emailing us at ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, "valhallamediagroup.com"), "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "Our Policy on \u201CDo Not Track\u201D Signals:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "We honor Do Not Track signals and do not track, plant cookies, or use advertising when a Do Not Track browser mechanism is in place. Do Not Track is a preference you can set in your web browser to inform websites that you do not want to be tracked."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "You can enable or disable Do Not Track by visiting the Preferences or Settings page of your web browser."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "12.", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, "Your Data Protection Rights under the California Consumer Privacy Act (CCPA)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "If you are a California resident, you are entitled to learn what data we collect about you, ask to delete your data and not to sell (share) it. To exercise your data protection rights, you can make certain requests and ask us:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, "0.1. What personal information we have about you. If you make this request, we will return to you:")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "0.0.1. The categories of personal information we have collected about you."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "0.0.2. The categories of sources from which we collect your personal information."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "0.0.3. The business or commercial purpose for collecting or selling your personal information."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "0.0.4. The categories of third parties with whom we share personal information."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "0.0.5. The specific pieces of personal information we have collected about you."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "0.0.6. A list of categories of personal information that we have sold, along with the category of any other company we sold it to. If we have not sold your personal information, we will inform you of that fact."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "0.0.7. A list of categories of personal information that we have disclosed for a business purpose, along with the category of any other company we shared it with."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "Please note, you are entitled to ask us to provide you with this information up to two times in a rolling twelve-month period. When you make this request, the information provided may be limited to the personal information we collected about you in the previous 12 months."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, "0.2. To delete your personal information. If you make this request, we will delete the personal information we hold about you as of the date of your request from our records and direct any service providers to do the same. In some cases, deletion may be accomplished through de-identification of the information. If you choose to delete your personal information, you may not be able to use certain functions that require your personal information to operate.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, "0.3. To stop selling your personal information. We don\u2019t sell or rent your personal information to any third parties for any purpose. We do not sell your personal information for monetary consideration. However, under some circumstances, a transfer of personal information to a third party, or within our family of companies, without monetary consideration may be considered a \u201Csale\u201D under California law. You are the only owner of your Personal Data and can request disclosure or deletion at any time.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "If you submit a request to stop selling your personal information, we will stop making such transfers."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "Please note, if you ask us to delete or stop selling your data, it may impact your experience with us, and you may not be able to participate in certain programs or membership services which require the usage of your personal information to function. But in no circumstances, we will discriminate against you for exercising your rights."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "To exercise your California data protection rights described above, please send your request(s) by email: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, "valhallamediagroup.com"), "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "Your data protection rights, described above, are covered by the CCPA, short for the California Consumer Privacy Act. To find out more, visit the official California Legislative Information website. The CCPA took effect on 01/01/2020."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "13. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, "Service Providers")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "We may employ third party companies and individuals to facilitate our Service (", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, "\u201CService Providers\u201D"), "), provide Service on our behalf, perform Service-related services or assist us in analysing how our Service is used."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "14. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, "Analytics")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "We may use third-party Service Providers to monitor and analyze the use of our Service."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "15. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, "CI/CD tools")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "We may use third-party Service Providers to automate the development process of our Service."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "16. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, "Advertising")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "We may use third-party Service Providers to show advertisements to you to help support and maintain our Service."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "17. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, "Behavioral Remarketing")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "We may use remarketing services to advertise on third party websites to you after you visited our Service. We and our third-party vendors use cookies to inform, optimise and serve ads based on your past visits to our Service."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "18. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, "Links to Other Sites")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "Our Service may contain links to other sites that are not operated by us. If you click a third party link, you will be directed to that third party\u2019s site. We strongly advise you to review the Privacy Policy of every site you visit."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "19.", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, "Children\u2019s Privacy"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "Our Services are not intended for use by children under the age of 18 (", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, "\u201CChild\u201D"), " or ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, "\u201CChildren\u201D"), ")."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "We do not knowingly collect personally identifiable information from Children under 18. If you become aware that a Child has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from Children without verification of parental consent, we take steps to remove that information from our servers."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "20. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, "Changes to This Privacy Policy")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update \u201Ceffective date\u201D at the top of this Privacy Policy."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "21. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, "Contact Us")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "If you have any questions about this Privacy Policy, please contact us by email: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, "valhallamediagroup.com"), "."));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Privacy);

/***/ }),

/***/ "./assets/js/terms/Terms.jsx":
/*!***********************************!*\
  !*** ./assets/js/terms/Terms.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Container/Container.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");


var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
  return {
    root: {
      '& > p': {
        fontSize: '1.15rem'
      }
    }
  };
});

var Terms = function Terms() {
  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["default"], {
    maxWidth: "md",
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h2", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, "TERMS AND CONDITIONS")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "Last updated: 2021-09-01"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "1. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, "Introduction")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "Welcome to ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, "Valhalla Media Group"), " (\u201CCompany\u201D, \u201Cwe\u201D, \u201Cour\u201D, \u201Cus\u201D)!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "These Terms of Service (\u201CTerms\u201D, \u201CTerms of Service\u201D) govern your use of our website located at ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, "masenomental.com"), " (together or individually \u201CService\u201D) operated by ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, "Valhalla Media Group"), "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "Our Privacy Policy also governs your use of our Service and explains how we collect, safeguard and disclose information that results from your use of our web pages."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "Your agreement with us includes these Terms and our Privacy Policy (\u201CAgreements\u201D). You acknowledge that you have read and understood Agreements, and agree to be bound of them."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "If you do not agree with (or cannot comply with) Agreements, then you may not use the Service, but please let us know by emailing at", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, "valhallamediagroup@gmail.com"), " so we can try to find a solution. These Terms apply to all visitors, users and others who wish to access or use Service."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "2. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, "Communications")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "By using our Service, you agree to subscribe to newsletters, marketing or promotional materials and other information we may send. However, you may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or by emailing at valhallamediagroup@gmail.com."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "3. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, "Contests, Sweepstakes and Promotions")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "Any contests, sweepstakes or other promotions (collectively, \u201CPromotions\u201D) made available through Service may be governed by rules that are separate from these Terms of Service. If you participate in any Promotions, please review the applicable rules as well as our Privacy Policy. If the rules for a Promotion conflict with these Terms of Service, Promotion rules will apply."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "4. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, "Content")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "Content found on or through this Service are the property of Valhalla Media Group or used with permission. You may not distribute, modify, transmit, reuse, download, repost, copy, or use said Content, whether in whole or in part, for commercial purposes or for personal gain, without express advance written permission from us."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "5. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, "Prohibited Uses")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "You may use Service only for lawful purposes and in accordance with Terms. You agree not to use Service:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "0.1. In any way that violates any applicable national or international law or regulation."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "0.2. For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way by exposing them to inappropriate content or otherwise."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "0.3. To transmit, or procure the sending of, any advertising or promotional material, including any \u201Cjunk mail\u201D, \u201Cchain letter,\u201D \u201Cspam,\u201D or any other similar solicitation."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "0.4. To impersonate or attempt to impersonate Company, a Company employee, another user, or any other person or entity."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "0.5. In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or harmful, or in connection with any unlawful, illegal, fraudulent, or harmful purpose or activity."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "0.6. To engage in any other conduct that restricts or inhibits anyone\u2019s use or enjoyment of Service, or which, as determined by us, may harm or offend Company or users of Service or expose them to liability."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "Additionally, you agree not to:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "0.1. Use Service in any manner that could disable, overburden, damage, or impair Service or interfere with any other party\u2019s use of Service, including their ability to engage in real time activities through Service."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "0.2. Use any robot, spider, or other automatic device, process, or means to access Service for any purpose, including monitoring or copying any of the material on Service."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "0.3. Use any manual process to monitor or copy any of the material on Service or for any other unauthorized purpose without our prior written consent."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "0.4. Use any device, software, or routine that interferes with the proper working of Service."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "0.5. Introduce any viruses, trojan horses, worms, logic bombs, or other material which is malicious or technologically harmful."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "0.6. Attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of Service, the server on which Service is stored, or any server, computer, or database connected to Service."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "0.7. Attack Service via a denial-of-service attack or a distributed denial-of-service attack."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "0.8. Take any action that may damage or falsify Company rating."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "0.9. Otherwise attempt to interfere with the proper working of Service."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "6. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, "Analytics")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "We may use third-party Service Providers to monitor and analyze the use of our Service."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "7. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, "No Use By Minors")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "Service is intended only for access and use by individuals at least eighteen (18) years old. By accessing or using Service, you warrant and represent that you are at least eighteen (18) years of age and with the full authority, right, and capacity to enter into this agreement and abide by all of the terms and conditions of Terms. If you are not at least eighteen (18) years old, you are prohibited from both the access and usage of Service."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "8. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, "Intellectual Property")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "Service and its original content (excluding Content provided by users), features and functionality are and will remain the exclusive property of Valhalla Media Group and its licensors. Service is protected by copyright, trademark, and other laws of and foreign countries. Our trademarks may not be used in connection with any product or service without the prior written consent of Valhalla Media Group."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "9. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, "Copyright Policy")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "We respect the intellectual property rights of others. It is our policy to respond to any claim that Content posted on Service infringes on the copyright or other intellectual property rights (\u201CInfringement\u201D) of any person or entity."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "If you are a copyright owner, or authorized on behalf of one, and you believe that the copyrighted work has been copied in a way that constitutes copyright infringement, please submit your claim via email to valhallamediagroup@gmail.com, with the subject line: \u201CCopyright Infringement\u201D and include in your claim a detailed description of the alleged Infringement as detailed below, under \u201CDMCA Notice and Procedure for Copyright Infringement Claims\u201D"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "You may be held accountable for damages (including costs and attorneys\u2019 fees) for misrepresentation or bad-faith claims on the infringement of any Content found on and/or through Service on your copyright."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "10. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, "DMCA Notice and Procedure for Copyright Infringement Claims")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "You may submit a notification pursuant to the Digital Millennium Copyright Act (DMCA) by providing our Copyright Agent with the following information in writing (see 17 U.S.C 512(c)(3) for further detail):"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "0.1. an electronic or physical signature of the person authorized to act on behalf of the owner of the copyright\u2019s interest;"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "0.2. a description of the copyrighted work that you claim has been infringed, including the URL (i.e., web page address) of the location where the copyrighted work exists or a copy of the copyrighted work;"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "0.3. identification of the URL or other specific location on Service where the material that you claim is infringing is located;"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "0.4. your address, telephone number, and email address;"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "0.5. a statement by you that you have a good faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law;"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "0.6. a statement by you, made under penalty of perjury, that the above information in your notice is accurate and that you are the copyright owner or authorized to act on the copyright owner\u2019s behalf."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "You can contact our Copyright Agent via email at valhallamediagroup@gmail.com."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "11. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, "Error Reporting and Feedback")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "You may provide us either directly at valhallamediagroup@gmail.com or via third party sites and tools with information and feedback concerning errors, suggestions for improvements, ideas, problems, complaints, and other matters related to our Service (\u201CFeedback\u201D). You acknowledge and agree that: (i) you shall not retain, acquire or assert any intellectual property right or other right, title or interest in or to the Feedback; (ii) Company may have development ideas similar to the Feedback; (iii) Feedback does not contain confidential information or proprietary information from you or any third party; and (iv) Company is not under any obligation of confidentiality with respect to the Feedback. In the event the transfer of the ownership to the Feedback is not possible due to applicable mandatory laws, you grant Company and its affiliates an exclusive, transferable, irrevocable, free-of-charge, sub-licensable, unlimited and perpetual right to use (including copy, modify, create derivative works, publish, distribute and commercialize) Feedback in any manner and for any purpose."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "12. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, "Links To Other Web Sites")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "Our Service may contain links to third party web sites or services that are not owned or controlled by Valhalla Media Group."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "Valhalla Media Group has no control over, and assumes no responsibility for the content, privacy policies, or practices of any third party web sites or services. We do not warrant the offerings of any of these entities/individuals or their websites."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "YOU ACKNOWLEDGE AND AGREE THAT COMPANY SHALL NOT BE RESPONSIBLE OR LIABLE, DIRECTLY OR INDIRECTLY, FOR ANY DAMAGE OR LOSS CAUSED OR ALLEGED TO BE CAUSED BY OR IN CONNECTION WITH USE OF OR RELIANCE ON ANY SUCH CONTENT, GOODS OR SERVICES AVAILABLE ON OR THROUGH ANY SUCH THIRD PARTY WEB SITES OR SERVICES."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "WE STRONGLY ADVISE YOU TO READ THE TERMS OF SERVICE AND PRIVACY POLICIES OF ANY THIRD PARTY WEB SITES OR SERVICES THAT YOU VISIT."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "13. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, "Disclaimer Of Warranty")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "THESE SERVICES ARE PROVIDED BY COMPANY ON AN \u201CAS IS\u201D AND \u201CAS AVAILABLE\u201D BASIS. COMPANY MAKES NO REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, AS TO THE OPERATION OF THEIR SERVICES, OR THE INFORMATION, CONTENT OR MATERIALS INCLUDED THEREIN. YOU EXPRESSLY AGREE THAT YOUR USE OF THESE SERVICES, THEIR CONTENT, AND ANY SERVICES OR ITEMS OBTAINED FROM US IS AT YOUR SOLE RISK."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "NEITHER COMPANY NOR ANY PERSON ASSOCIATED WITH COMPANY MAKES ANY WARRANTY OR REPRESENTATION WITH RESPECT TO THE COMPLETENESS, SECURITY, RELIABILITY, QUALITY, ACCURACY, OR AVAILABILITY OF THE SERVICES. WITHOUT LIMITING THE FOREGOING, NEITHER COMPANY NOR ANYONE ASSOCIATED WITH COMPANY REPRESENTS OR WARRANTS THAT THE SERVICES, THEIR CONTENT, OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE SERVICES WILL BE ACCURATE, RELIABLE, ERROR-FREE, OR UNINTERRUPTED, THAT DEFECTS WILL BE CORRECTED, THAT THE SERVICES OR THE SERVER THAT MAKES IT AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS OR THAT THE SERVICES OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE SERVICES WILL OTHERWISE MEET YOUR NEEDS OR EXPECTATIONS."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "COMPANY HEREBY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, NON-INFRINGEMENT, AND FITNESS FOR PARTICULAR PURPOSE."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "THE FOREGOING DOES NOT AFFECT ANY WARRANTIES WHICH CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "14. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, "Limitation Of Liability")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "EXCEPT AS PROHIBITED BY LAW, YOU WILL HOLD US AND OUR OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS HARMLESS FOR ANY INDIRECT, PUNITIVE, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGE, HOWEVER IT ARISES (INCLUDING ATTORNEYS\u2019 FEES AND ALL RELATED COSTS AND EXPENSES OF LITIGATION AND ARBITRATION, OR AT TRIAL OR ON APPEAL, IF ANY, WHETHER OR NOT LITIGATION OR ARBITRATION IS INSTITUTED), WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE, OR OTHER TORTIOUS ACTION, OR ARISING OUT OF OR IN CONNECTION WITH THIS AGREEMENT, INCLUDING WITHOUT LIMITATION ANY CLAIM FOR PERSONAL INJURY OR PROPERTY DAMAGE, ARISING FROM THIS AGREEMENT AND ANY VIOLATION BY YOU OF ANY FEDERAL, STATE, OR LOCAL LAWS, STATUTES, RULES, OR REGULATIONS, EVEN IF COMPANY HAS BEEN PREVIOUSLY ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. EXCEPT AS PROHIBITED BY LAW, IF THERE IS LIABILITY FOUND ON THE PART OF COMPANY, IT WILL BE LIMITED TO THE AMOUNT PAID FOR THE PRODUCTS AND/OR SERVICES, AND UNDER NO CIRCUMSTANCES WILL THERE BE CONSEQUENTIAL OR PUNITIVE DAMAGES. SOME STATES DO NOT ALLOW THE EXCLUSION OR LIMITATION OF PUNITIVE, INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE PRIOR LIMITATION OR EXCLUSION MAY NOT APPLY TO YOU."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "15. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, "Termination")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "We may terminate or suspend your account and bar access to Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of Terms."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "If you wish to terminate your account, you may simply discontinue using Service."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "All provisions of Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "16. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, "Governing Law")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "These Terms shall be governed and construed in accordance with the laws of Kenya, which governing law applies to agreement without regard to its conflict of law provisions."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service and supersede and replace any prior agreements we might have had between us regarding Service."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "17. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, "Changes To Service")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "We reserve the right to withdraw or amend our Service, and any service or material we provide via Service, in our sole discretion without notice. We will not be liable if for any reason all or any part of Service is unavailable at any time or for any period. From time to time, we may restrict access to some parts of Service, or the entire Service, to users, including registered users."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "18. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, "Amendments To Terms")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "We may amend Terms at any time by posting the amended terms on this site. It is your responsibility to review these Terms periodically."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "Your continued use of the Platform following the posting of revised Terms means that you accept and agree to the changes. You are expected to check this page frequently so you are aware of any changes, as they are binding on you."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use Service."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "19. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, "Waiver And Severability")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "No waiver by Company of any term or condition set forth in Terms shall be deemed a further or continuing waiver of such term or condition or a waiver of any other term or condition, and any failure of Company to assert a right or provision under Terms shall not constitute a waiver of such right or provision."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "If any provision of Terms is held by a court or other tribunal of competent jurisdiction to be invalid, illegal or unenforceable for any reason, such provision shall be eliminated or limited to the minimum extent such that the remaining provisions of Terms will continue in full force and effect."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "20. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, "Acknowledgement")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "BY USING SERVICE OR OTHER SERVICES PROVIDED BY US, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS OF SERVICE AND AGREE TO BE BOUND BY THEM."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "21. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, "Contact Us")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "Please send your feedback, comments, requests for technical support by email: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null, "valhallamediagroup@gmail.com"), "."));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Terms);

/***/ }),

/***/ "./assets/images/101.jpg":
/*!*******************************!*\
  !*** ./assets/images/101.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/101.0dc25d7d.jpg";

/***/ }),

/***/ "./assets/images/another-support-article.jpg":
/*!***************************************************!*\
  !*** ./assets/images/another-support-article.jpg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/another-support-article.5598c7ef.jpg";

/***/ }),

/***/ "./assets/images/anxiety-article.jpg":
/*!*******************************************!*\
  !*** ./assets/images/anxiety-article.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/anxiety-article.de180d92.jpg";

/***/ }),

/***/ "./assets/images/anxiety-chum.jpg":
/*!****************************************!*\
  !*** ./assets/images/anxiety-chum.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/anxiety-chum.a2096055.jpg";

/***/ }),

/***/ "./assets/images/balloon.jpg":
/*!***********************************!*\
  !*** ./assets/images/balloon.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/balloon.d03eb16a.jpg";

/***/ }),

/***/ "./assets/images/box.svg":
/*!*******************************!*\
  !*** ./assets/images/box.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/box.c6bf3fb3.svg";

/***/ }),

/***/ "./assets/images/career-article-2.jpg":
/*!********************************************!*\
  !*** ./assets/images/career-article-2.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/career-article-2.43ff0827.jpg";

/***/ }),

/***/ "./assets/images/career-article.jpg":
/*!******************************************!*\
  !*** ./assets/images/career-article.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/career-article.95ea1974.jpg";

/***/ }),

/***/ "./assets/images/depression-article-2.jpg":
/*!************************************************!*\
  !*** ./assets/images/depression-article-2.jpg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/depression-article-2.d7235eda.jpg";

/***/ }),

/***/ "./assets/images/depression-article.jpg":
/*!**********************************************!*\
  !*** ./assets/images/depression-article.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/depression-article.9dbb1668.jpg";

/***/ }),

/***/ "./assets/images/difficult-path.png":
/*!******************************************!*\
  !*** ./assets/images/difficult-path.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/difficult-path.f16e19b5.png";

/***/ }),

/***/ "./assets/images/eating-disorders-article.jpg":
/*!****************************************************!*\
  !*** ./assets/images/eating-disorders-article.jpg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/eating-disorders-article.62baba86.jpg";

/***/ }),

/***/ "./assets/images/emotions-article.jpg":
/*!********************************************!*\
  !*** ./assets/images/emotions-article.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/emotions-article.5a70e299.jpg";

/***/ }),

/***/ "./assets/images/hands.jpg":
/*!*********************************!*\
  !*** ./assets/images/hands.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/hands.96d0ad9a.jpg";

/***/ }),

/***/ "./assets/images/happy-face.jpg":
/*!**************************************!*\
  !*** ./assets/images/happy-face.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/happy-face.f28ed895.jpg";

/***/ }),

/***/ "./assets/images/hero.png":
/*!********************************!*\
  !*** ./assets/images/hero.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/hero.39bfe40e.png";

/***/ }),

/***/ "./assets/images/holding-hands.jpg":
/*!*****************************************!*\
  !*** ./assets/images/holding-hands.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/holding-hands.df91d203.jpg";

/***/ }),

/***/ "./assets/images/hope.jpg":
/*!********************************!*\
  !*** ./assets/images/hope.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/hope.c040f2eb.jpg";

/***/ }),

/***/ "./assets/images/intro-101-article.jpg":
/*!*********************************************!*\
  !*** ./assets/images/intro-101-article.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/intro-101-article.caa14e3d.jpg";

/***/ }),

/***/ "./assets/images/kenyan-flag.png":
/*!***************************************!*\
  !*** ./assets/images/kenyan-flag.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/kenyan-flag.6cefe89d.png";

/***/ }),

/***/ "./assets/images/lift-your-mood.jpg":
/*!******************************************!*\
  !*** ./assets/images/lift-your-mood.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/lift-your-mood.b5466497.jpg";

/***/ }),

/***/ "./assets/images/logo-small-screen.svg":
/*!*********************************************!*\
  !*** ./assets/images/logo-small-screen.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/logo-small-screen.fd53e9ba.svg";

/***/ }),

/***/ "./assets/images/logo.svg":
/*!********************************!*\
  !*** ./assets/images/logo.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/logo.09e251da.svg";

/***/ }),

/***/ "./assets/images/meditating.jpg":
/*!**************************************!*\
  !*** ./assets/images/meditating.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/meditating.5c212494.jpg";

/***/ }),

/***/ "./assets/images/mental-health-matters.jpg":
/*!*************************************************!*\
  !*** ./assets/images/mental-health-matters.jpg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/mental-health-matters.05031009.jpg";

/***/ }),

/***/ "./assets/images/mental-help-article-2.jpg":
/*!*************************************************!*\
  !*** ./assets/images/mental-help-article-2.jpg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/mental-help-article-2.05969945.jpg";

/***/ }),

/***/ "./assets/images/mental-help-article.jpg":
/*!***********************************************!*\
  !*** ./assets/images/mental-help-article.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/mental-help-article.77edb8eb.jpg";

/***/ }),

/***/ "./assets/images/mental-problems-article.jpg":
/*!***************************************************!*\
  !*** ./assets/images/mental-problems-article.jpg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/mental-problems-article.23ffc9eb.jpg";

/***/ }),

/***/ "./assets/images/mental-support-article.jpg":
/*!**************************************************!*\
  !*** ./assets/images/mental-support-article.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/mental-support-article.cb226f1c.jpg";

/***/ }),

/***/ "./assets/images/mentalke.svg":
/*!************************************!*\
  !*** ./assets/images/mentalke.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/mentalke.6c8abd07.svg";

/***/ }),

/***/ "./assets/images/mindfullness-article.jpg":
/*!************************************************!*\
  !*** ./assets/images/mindfullness-article.jpg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/mindfullness-article.01fd7219.jpg";

/***/ }),

/***/ "./assets/images/mood-article.jpg":
/*!****************************************!*\
  !*** ./assets/images/mood-article.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/mood-article.da02c14d.jpg";

/***/ }),

/***/ "./assets/images/phone-a-friend.jpg":
/*!******************************************!*\
  !*** ./assets/images/phone-a-friend.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/phone-a-friend.7acddff1.jpg";

/***/ }),

/***/ "./assets/images/question.svg":
/*!************************************!*\
  !*** ./assets/images/question.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/question.5a844a08.svg";

/***/ }),

/***/ "./assets/images/spiral.svg":
/*!**********************************!*\
  !*** ./assets/images/spiral.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/spiral.7fe1ca2a.svg";

/***/ }),

/***/ "./assets/images/star.svg":
/*!********************************!*\
  !*** ./assets/images/star.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/star.aafd9a56.svg";

/***/ }),

/***/ "./assets/images/stories-of-hope.jpg":
/*!*******************************************!*\
  !*** ./assets/images/stories-of-hope.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/stories-of-hope.789daab3.jpg";

/***/ }),

/***/ "./assets/images/support-article.jpg":
/*!*******************************************!*\
  !*** ./assets/images/support-article.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/support-article.46e60198.jpg";

/***/ }),

/***/ "./assets/images/we-hurt.jpg":
/*!***********************************!*\
  !*** ./assets/images/we-hurt.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/we-hurt.9d7d4bc1.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/build/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_material-ui_core_esm_AppBar_AppBar_js-node_modules_material-ui_core_esm_-c8cbc1"], () => (__webpack_require__("./assets/js/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVoREE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9qcy9BcHAuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9BcHBSb3V0ZXMuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9TY3JvbGxUb1RvcC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FydGljbGVzL0FueGlldHlEaXNvcmRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FydGljbGVzL0FydGljbGVXcmFwcGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXJ0aWNsZXMvQ2FyZWVyU3R1ZGllcy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FydGljbGVzL0RlcHJlc3Npb24uanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcnRpY2xlcy9NZW50YWxBd2FyZW5lc3MuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcnRpY2xlcy9NZW50YWxIZWFsdGhEaXNvcmRlcnMuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcnRpY2xlcy9NZW50YWxTdGlnbWEuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcnRpY2xlcy9NZW50YWxTdXBwb3J0LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXJ0aWNsZXMvTW9vZERpc29yZGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXJ0aWNsZXMvT3ZlcnZpZXdNZW50YWwuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcnRpY2xlcy9TdG9yeU9mSG9wZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FydGljbGVzL2NvbXBvbmVudHMvQXJ0aWNsZUltYWdlLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXJ0aWNsZXMvY29tcG9uZW50cy9QdWxsUXVvdGUuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0FydGljbGVQcmV2aWV3LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Db250YWN0VXMuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0NvbnRhaW5lZEJsdWVCdXR0b24uanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ZpZnRoU2VjdGlvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvRm9vdGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Gb3VydGhTZWN0aW9uLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9IZXJvU2VjdGlvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvTmF2QmFyLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9PdXRsaW5lZFByaW1hcnlBcHBCdXR0b24uanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1BhdHRlcm5zLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9TZWNvbmRTZWN0aW9uLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9TZWNvbmRhcnlBcHBCdXR0b24uanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1NpeHRoU2VjdGlvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvVGhpcmRTZWN0aW9uLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9XaG9BcmVXZURpYWxvZy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvZW1iZWRlZFZpZGVvL0VtYmVkZWRWaWRlb0RpYWxvZy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvZW1iZWRlZFZpZGVvL0hvbWVWaWRlb1NlY3Rpb25Eb3duLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9lbWJlZGVkVmlkZW8vVmlkZW9QYXBlci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbmV3c0xldHRlci9OZXdzTGV0dGVyRGlhbG9nLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3ByaXZhY3kvUHJpdmFjeS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3Rlcm1zL1Rlcm1zLmpzeCIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovLy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgY3JlYXRlVGhlbWUsXG4gIEZhYixcbiAgbWFrZVN0eWxlcyxcbiAgVGhlbWVQcm92aWRlcixcbiAgdXNlU2Nyb2xsVHJpZ2dlcixcbiAgWm9vbSxcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBLZXlib2FyZEFycm93VXAgfSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMnXG5pbXBvcnQgQXBwUm91dGVzIGZyb20gJy4vQXBwUm91dGVzJ1xuaW1wb3J0IENvbnRhY3RVcyBmcm9tICcuL2NvbXBvbmVudHMvQ29udGFjdFVzJ1xuaW1wb3J0IEZpZnRoU2VjdGlvbiBmcm9tICcuL2NvbXBvbmVudHMvRmlmdGhTZWN0aW9uJ1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL2NvbXBvbmVudHMvRm9vdGVyJ1xuaW1wb3J0IE5hdkJhciBmcm9tICcuL2NvbXBvbmVudHMvTmF2QmFyJ1xuaW1wb3J0IFNpeHRoU2VjdGlvbiBmcm9tICcuL2NvbXBvbmVudHMvU2l4dGhTZWN0aW9uJ1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICBib3R0b206IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgcmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXG4gIH0sXG59KSlcblxuY29uc3QgQXBwID0gKCkgPT4ge1xuICBjb25zdCB0aGVtZSA9IGNyZWF0ZVRoZW1lKHtcbiAgICBwYWxldHRlOiB7XG4gICAgICBwcmltYXJ5OiB7XG4gICAgICAgIG1haW46ICcjN0RFQkJEJyxcbiAgICAgIH0sXG4gICAgICBzZWNvbmRhcnk6IHtcbiAgICAgICAgbWFpbjogJyMxODFFNEUnLFxuICAgICAgfSxcbiAgICB9LFxuICB9KVxuXG4gIGZ1bmN0aW9uIFNjcm9sbFRvcCh7IGNoaWxkcmVuIH0pIHtcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcblxuICAgIGNvbnN0IHRyaWdnZXIgPSB1c2VTY3JvbGxUcmlnZ2VyKHtcbiAgICAgIGRpc2FibGVIeXN0ZXJlc2lzOiB0cnVlLFxuICAgICAgdGhyZXNob2xkOiAyNTAsXG4gICAgfSlcblxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gZXZlbnQgPT4ge1xuICAgICAgY29uc3QgYW5jaG9yID0gKGV2ZW50LnRhcmdldC5vd25lckRvY3VtZW50IHx8IGRvY3VtZW50KS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAnI2JhY2stdG8tdG9wLWFuY2hvcidcbiAgICAgIClcblxuICAgICAgaWYgKGFuY2hvcikge1xuICAgICAgICBhbmNob3Iuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcsIGJsb2NrOiAnY2VudGVyJyB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8Wm9vbSBpbj17dHJpZ2dlcn0+XG4gICAgICAgIDxkaXYgb25DbGljaz17aGFuZGxlQ2xpY2t9IHJvbGU9XCJwcmVzZW50YXRpb25cIiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvWm9vbT5cbiAgICApXG4gIH1cblxuICBTY3JvbGxUb3AucHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuZWxlbWVudC5pc1JlcXVpcmVkLFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgPE5hdkJhciAvPlxuICAgICAgPEFwcFJvdXRlcyAvPlxuICAgICAgPEZpZnRoU2VjdGlvbiAvPlxuICAgICAgPENvbnRhY3RVcyAvPlxuICAgICAgPFNpeHRoU2VjdGlvbiAvPlxuICAgICAgPEZvb3RlciAvPlxuICAgICAgPFNjcm9sbFRvcD5cbiAgICAgICAgPEZhYiBjb2xvcj1cInByaW1hcnlcIiBzaXplPVwic21hbGxcIiBhcmlhLWxhYmVsPVwic2Nyb2xsIGJhY2sgdG8gdG9wXCI+XG4gICAgICAgICAgPEtleWJvYXJkQXJyb3dVcCAvPlxuICAgICAgICA8L0ZhYj5cbiAgICAgIDwvU2Nyb2xsVG9wPlxuICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHBcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFJvdXRlLCBSb3V0ZXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IEFueGlldHlEaXNvcmRlciBmcm9tICcuL2FydGljbGVzL0FueGlldHlEaXNvcmRlcidcbmltcG9ydCBDYXJlZXJTdHVkaWVzIGZyb20gJy4vYXJ0aWNsZXMvQ2FyZWVyU3R1ZGllcydcbmltcG9ydCBEZXByZXNzaW9uIGZyb20gJy4vYXJ0aWNsZXMvRGVwcmVzc2lvbidcbmltcG9ydCBNZW50YWxBd2FyZW5lc3MgZnJvbSAnLi9hcnRpY2xlcy9NZW50YWxBd2FyZW5lc3MnXG5pbXBvcnQgTWVudGFsSGVhbHRoRGlzb3JkZXJzIGZyb20gJy4vYXJ0aWNsZXMvTWVudGFsSGVhbHRoRGlzb3JkZXJzJ1xuaW1wb3J0IE1lbnRhbFN0aWdtYSBmcm9tICcuL2FydGljbGVzL01lbnRhbFN0aWdtYSdcbmltcG9ydCBNZW50YWxTdXBwb3J0IGZyb20gJy4vYXJ0aWNsZXMvTWVudGFsU3VwcG9ydCdcbmltcG9ydCBNb29kRGlzb3JkZXIgZnJvbSAnLi9hcnRpY2xlcy9Nb29kRGlzb3JkZXInXG5pbXBvcnQgT3ZlcnZpZXdNZW50YWwgZnJvbSAnLi9hcnRpY2xlcy9PdmVydmlld01lbnRhbCdcbmltcG9ydCBTdG9yeU9mSG9wZSBmcm9tICcuL2FydGljbGVzL1N0b3J5T2ZIb3BlJ1xuaW1wb3J0IEhvbWVWaWRlb1NlY3Rpb25Eb3duIGZyb20gJy4vY29tcG9uZW50cy9lbWJlZGVkVmlkZW8vSG9tZVZpZGVvU2VjdGlvbkRvd24nXG5pbXBvcnQgRm91cnRoU2VjdGlvbiBmcm9tICcuL2NvbXBvbmVudHMvRm91cnRoU2VjdGlvbidcbmltcG9ydCBIZXJvU2VjdGlvbiBmcm9tICcuL2NvbXBvbmVudHMvSGVyb1NlY3Rpb24nXG5pbXBvcnQgU2Vjb25kU2VjdGlvbiBmcm9tICcuL2NvbXBvbmVudHMvU2Vjb25kU2VjdGlvbidcbmltcG9ydCBUaGlyZFNlY3Rpb24gZnJvbSAnLi9jb21wb25lbnRzL1RoaXJkU2VjdGlvbidcbmltcG9ydCBQcml2YWN5IGZyb20gJy4vcHJpdmFjeS9Qcml2YWN5J1xuaW1wb3J0IFRlcm1zIGZyb20gJy4vdGVybXMvVGVybXMnXG5cbmNvbnN0IEFwcFJvdXRlcyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Um91dGVzPlxuICAgICAgPFJvdXRlXG4gICAgICAgIHBhdGg9XCIvXCJcbiAgICAgICAgZWxlbWVudD17XG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxIZXJvU2VjdGlvbiAvPlxuICAgICAgICAgICAgPEhvbWVWaWRlb1NlY3Rpb25Eb3duIC8+XG4gICAgICAgICAgICA8U2Vjb25kU2VjdGlvbiAvPlxuICAgICAgICAgICAgPFRoaXJkU2VjdGlvbiAvPlxuICAgICAgICAgICAgPEZvdXJ0aFNlY3Rpb24gLz5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgfVxuICAgICAgLz5cbiAgICAgIDxSb3V0ZVxuICAgICAgICBwYXRoPVwiL2FydGljbGUvbXktY2FyZWVyLXN0dWRpZXMtY2F1c2VkLW15LW1lbnRhbC1pbGxuZXNzXCJcbiAgICAgICAgZWxlbWVudD17PENhcmVlclN0dWRpZXMgLz59XG4gICAgICAvPlxuICAgICAgPFJvdXRlXG4gICAgICAgIHBhdGg9XCIvYXJ0aWNsZS9kZXByZXNzaW9uLWFuZC1jYW1wdXMtbGlmZVwiXG4gICAgICAgIGVsZW1lbnQ9ezxEZXByZXNzaW9uIC8+fVxuICAgICAgLz5cbiAgICAgIDxSb3V0ZVxuICAgICAgICBwYXRoPVwiL2FydGljbGUvbWVudGFsLWlsbG5lc3Mtc3RpZ21hLWhlbHAtc2Vla2luZy1hbmQtcHVibGljLWhlYWx0aC1wcm9ncmFtc1wiXG4gICAgICAgIGVsZW1lbnQ9ezxNZW50YWxTdGlnbWEgLz59XG4gICAgICAvPlxuICAgICAgPFJvdXRlXG4gICAgICAgIHBhdGg9XCIvYXJ0aWNsZS9pbnRyb2R1Y3Rpb24tdG8tbWVudGFsLWhlYWx0aC1kaXNvcmRlcnMtMTAxXCJcbiAgICAgICAgZWxlbWVudD17PE1lbnRhbEhlYWx0aERpc29yZGVycyAvPn1cbiAgICAgIC8+XG4gICAgICA8Um91dGVcbiAgICAgICAgcGF0aD1cIi9hcnRpY2xlL21lbnRhbC1oZWFsdGgtc3VwcG9ydFwiXG4gICAgICAgIGVsZW1lbnQ9ezxNZW50YWxTdXBwb3J0IC8+fVxuICAgICAgLz5cbiAgICAgIDxSb3V0ZVxuICAgICAgICBwYXRoPVwiL2FydGljbGUvbW9vZC1kaXNvcmRlcnMtYW5kLXRyZWF0bWVudFwiXG4gICAgICAgIGVsZW1lbnQ9ezxNb29kRGlzb3JkZXIgLz59XG4gICAgICAvPlxuICAgICAgPFJvdXRlXG4gICAgICAgIHBhdGg9XCIvYXJ0aWNsZS9tZW50YWwtaGVhbHRoLWF3YXJlbmVzc1wiXG4gICAgICAgIGVsZW1lbnQ9ezxNZW50YWxBd2FyZW5lc3MgLz59XG4gICAgICAvPlxuICAgICAgPFJvdXRlXG4gICAgICAgIHBhdGg9XCIvYXJ0aWNsZS93aGF0LWlzLWFueGlldHktYXR0YWNrXCJcbiAgICAgICAgZWxlbWVudD17PEFueGlldHlEaXNvcmRlciAvPn1cbiAgICAgIC8+XG4gICAgICA8Um91dGVcbiAgICAgICAgcGF0aD1cIi9hcnRpY2xlL2FuLW92ZXJ2aWV3LW9mLW1lbnRhbC1oZWFsdGgtZGlzb3JkZXJzXCJcbiAgICAgICAgZWxlbWVudD17PE92ZXJ2aWV3TWVudGFsIC8+fVxuICAgICAgLz5cbiAgICAgIDxSb3V0ZSBwYXRoPVwiL2FydGljbGUvc3Rvcmllcy1vZi1ob3BlLTFcIiBlbGVtZW50PXs8U3RvcnlPZkhvcGUgLz59IC8+XG4gICAgICA8Um91dGUgcGF0aD1cIi9wcml2YWN5LXBvbGljeVwiIGVsZW1lbnQ9ezxQcml2YWN5IC8+fSAvPlxuICAgICAgPFJvdXRlIHBhdGg9XCIvdGVybXNcIiBlbGVtZW50PXs8VGVybXMgLz59IC8+XG4gICAgPC9Sb3V0ZXM+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwUm91dGVzXG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2Nyb2xsVG9Ub3AoKSB7XG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZUxvY2F0aW9uKClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICB9LCBbcGF0aG5hbWVdKVxuXG4gIHJldHVybiBudWxsXG59XG4iLCJpbXBvcnQgeyBUeXBvZ3JhcGh5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQXJ0aWNsZVdyYXBwZXIgZnJvbSAnLi9BcnRpY2xlV3JhcHBlcidcbmltcG9ydCBwaG90byBmcm9tICcuLi8uLi9pbWFnZXMvYW54aWV0eS1hcnRpY2xlLmpwZydcbmltcG9ydCBQdWxsUXVvdGUgZnJvbSAnLi9jb21wb25lbnRzL1B1bGxRdW90ZSdcblxuY29uc3QgQW54aWV0eURpc29yZGVyID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxBcnRpY2xlV3JhcHBlciB0aGVtZVBob3RvPXtwaG90b30+XG4gICAgICA8VHlwb2dyYXBoeT5cbiAgICAgICAgQW4gYW54aWV0eSBkaXNvcmRlciBpcyBhIHR5cGUgb2YgbWVudGFsIGhlYWx0aCBjb25kaXRpb24uIElmIHlvdSBoYXZlIGFuXG4gICAgICAgIGFueGlldHkgZGlzb3JkZXIsIHlvdSBtYXkgcmVzcG9uZCB0byBjZXJ0YWluIHRoaW5ncyBhbmQgc2l0dWF0aW9ucyB3aXRoXG4gICAgICAgIGZlYXIgYW5kIGRyZWFkLiBZb3UgbWF5IGFsc28gZXhwZXJpZW5jZSBwaHlzaWNhbCBzaWducyBvZiBhbnhpZXR5LCBzdWNoXG4gICAgICAgIGFzIGEgcG91bmRpbmcgaGVhcnQgYW5kIHN3ZWF0aW5nLllvdSBtYXkgZmVlbCBhbnhpb3VzIG9yIG5lcnZvdXMgaWYgeW91XG4gICAgICAgIGhhdmUgdG8gdGFja2xlIGEgcHJvYmxlbSBhdCB3b3JrLCBnbyB0byBhbiBpbnRlcnZpZXcsIHRha2UgYSB0ZXN0IG9yXG4gICAgICAgIG1ha2UgYW4gaW1wb3J0YW50IGRlY2lzaW9uLiBBbmQgYW54aWV0eSBjYW4gZXZlbiBiZSBiZW5lZmljaWFsLiBGb3JcbiAgICAgICAgZXhhbXBsZSwgYW54aWV0eSBoZWxwcyB1cyBub3RpY2UgZGFuZ2Vyb3VzIHNpdHVhdGlvbnMgYW5kIGZvY3VzZXMgb3VyXG4gICAgICAgIGF0dGVudGlvbiwgc28gd2Ugc3RheSBzYWZlLlxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPFR5cG9ncmFwaHk+XG4gICAgICAgIEJ1dCBhbiBhbnhpZXR5IGRpc29yZGVyIGdvZXMgYmV5b25kIHRoZSByZWd1bGFyIG5lcnZvdXNuZXNzIGFuZCBzbGlnaHRcbiAgICAgICAgZmVhciB5b3UgbWF5IGZlZWwgZnJvbSB0aW1lIHRvIHRpbWUuIEFuIGFueGlldHkgZGlzb3JkZXIgaGFwcGVucyB3aGVuO1xuICAgICAgICBpdCBpbnRlcmZlcmVzIHdpdGggeW91ciBhYmlsaXR5IHRvIGZ1bmN0aW9uLCB5b3Ugb2Z0ZW4gb3ZlcnJlYWN0IHdoZW5cbiAgICAgICAgc29tZXRoaW5nIHRyaWdnZXJzIHlvdXIgZW1vdGlvbnMgYW5kIHlvdSBjYW7igJl0IGNvbnRyb2wgeW91ciByZXNwb25zZXMgdG9cbiAgICAgICAgc2l0dWF0aW9ucy4gQW54aWV0eSBkaXNvcmRlcnMgY2FuIG1ha2UgaXQgZGlmZmljdWx0IHRvIGdldCB0aHJvdWdoIHRoZVxuICAgICAgICBkYXkuIEZvcnR1bmF0ZWx5LCB0aGVyZSBhcmUgc2V2ZXJhbCBlZmZlY3RpdmUgdHJlYXRtZW50cyBmb3IgYW54aWV0eVxuICAgICAgICBkaXNvcmRlcnMuXG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8UHVsbFF1b3RlPlxuICAgICAgICBBbiBhbnhpZXR5IGRpc29yZGVyIGhhcHBlbnMgd2hlbjsgaXQgaW50ZXJmZXJlcyB3aXRoIHlvdXIgYWJpbGl0eSB0b1xuICAgICAgICBmdW5jdGlvbiwgeW91IG9mdGVuIG92ZXJyZWFjdCB3aGVuIHNvbWV0aGluZyB0cmlnZ2VycyB5b3VyIGVtb3Rpb25zIGFuZFxuICAgICAgICB5b3UgY2Fu4oCZdCBjb250cm9sIHlvdXIgcmVzcG9uc2VzIHRvIHNpdHVhdGlvbnNcbiAgICAgIDwvUHVsbFF1b3RlPlxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+XG4gICAgICAgIFdobyBpcyBhdCByaXNrIGZvciBhbnhpZXR5IGRpc29yZGVycz9cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxUeXBvZ3JhcGh5PlxuICAgICAgICBBIG1peCBvZiBnZW5ldGljIGFuZCBlbnZpcm9ubWVudGFsIGZhY3RvcnMgY2FuIHJhaXNlIGEgcGVyc29u4oCZcyByaXNrIGZvclxuICAgICAgICBkZXZlbG9waW5nIGFueGlldHkgZGlzb3JkZXJzLiBZb3UgbWF5IGJlIGF0IGhpZ2hlciByaXNrIGlmIHlvdSBoYXZlIG9yXG4gICAgICAgIGhhZCBjZXJ0YWluIHBlcnNvbmFsaXR5IHRyYWl0cywgc3VjaCBhcyBzaHluZXNzIG9yIGJlaGF2aW9yYWwgaW5oaWJpdGlvblxuICAgICAgICDigJQgZmVlbGluZyB1bmNvbWZvcnRhYmxlIHdpdGgsIGFuZCBhdm9pZGluZywgdW5mYW1pbGlhciBwZW9wbGUsXG4gICAgICAgIHNpdHVhdGlvbnMgb3IgZW52aXJvbm1lbnRzLiBTdHJlc3NmdWwgb3IgdHJhdW1hdGljIGV2ZW50cyBpbiBlYXJseVxuICAgICAgICBjaGlsZGhvb2Qgb3IgYWR1bHRob29kLiBGYW1pbHkgaGlzdG9yeSBvZiBhbnhpZXR5IG9yIG90aGVyIG1lbnRhbCBoZWFsdGhcbiAgICAgICAgY29uZGl0aW9ucy4gQ2VydGFpbiBwaHlzaWNhbCBjb25kaXRpb25zLCBpbmNsdWRpbmcgdGh5cm9pZCBwcm9ibGVtcyBhbmRcbiAgICAgICAgaGVhcnQgYXJyaHl0aG1pYXMgKHVudXN1YWwgaGVhcnQgcmh5dGhtcykuIEFueGlldHkgZGlzb3JkZXJzIG9jY3VyIG1vcmVcbiAgICAgICAgb2Z0ZW4gaW4gd29tZW4uIFJlc2VhcmNoZXJzIGFyZSBzdGlsbCBzdHVkeWluZyB3aHkgdGhhdCBoYXBwZW5zLiBJdCBtYXlcbiAgICAgICAgY29tZSBmcm9tIHdvbWVu4oCZcyBob3Jtb25lcywgZXNwZWNpYWxseSB0aG9zZSB0aGF0IGZsdWN0dWF0ZSB0aHJvdWdob3V0XG4gICAgICAgIHRoZSBtb250aC4gVGhlIGhvcm1vbmUgdGVzdG9zdGVyb25lIG1heSBwbGF5IGEgcm9sZSwgdG9vIOKAlCBtZW4gaGF2ZVxuICAgICAgICBtb3JlLCBhbmQgaXQgbWF5IGVhc2UgYW54aWV0eS4gSXTigJlzIGFsc28gcG9zc2libGUgdGhhdCB3b21lbiBhcmUgbGVzc1xuICAgICAgICBsaWtlbHkgdG8gc2VlayB0cmVhdG1lbnQsIHNvIHRoZSBhbnhpZXR5IHdvcnNlbnMuXG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5cbiAgICAgICAgV2hhdCBhcmUgdGhlIHR5cGVzIG9mIGFueGlldHkgZGlzb3JkZXJzP1xuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPFR5cG9ncmFwaHk+XG4gICAgICAgIFRoZXJlIGFyZSBzZXZlcmFsIHR5cGVzIG9mIGFueGlldHkgZGlzb3JkZXJzLCBpbmNsdWRpbmc6IEdlbmVyYWxpemVkXG4gICAgICAgIGFueGlldHkgZGlzb3JkZXIgKEdBRCkuIFBhbmljIGRpc29yZGVyLiBQaG9iaWFzIGFuZCBTZXBhcmF0aW9uIGFueGlldHkuXG4gICAgICAgIE90aGVyIG1lbnRhbCBoZWFsdGggY29uZGl0aW9ucyBzaGFyZSBmZWF0dXJlcyB3aXRoIGFueGlldHkgZGlzb3JkZXJzLlxuICAgICAgICBUaGVzZSBpbmNsdWRlIHBvc3QtdHJhdW1hdGljIHN0cmVzcyBkaXNvcmRlciBhbmQgb2JzZXNzaXZlLWNvbXB1bHNpdmVcbiAgICAgICAgZGlzb3JkZXIuXG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5cbiAgICAgICAgV2hhdCBpcyBnZW5lcmFsaXplZCBhbnhpZXR5IGRpc29yZGVyIChHQUQpP1xuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPFR5cG9ncmFwaHk+XG4gICAgICAgIFdpdGggR0FELCB5b3UgbWF5IGZlZWwgZXh0cmVtZSBhbmQgdW5yZWFsaXN0aWMgd29ycnkgYW5kIHRlbnNpb24g4oCUIGV2ZW5cbiAgICAgICAgaWYgdGhlcmXigJlzIG5vdGhpbmcgdG8gdHJpZ2dlciB0aGVzZSBmZWVsaW5ncy4gTW9zdCBkYXlzLCB5b3UgbWF5IHdvcnJ5IGFcbiAgICAgICAgbG90IGFib3V0IHZhcmlvdXMgdG9waWNzLCBpbmNsdWRpbmcgaGVhbHRoLCB3b3JrLCBzY2hvb2wgYW5kXG4gICAgICAgIHJlbGF0aW9uc2hpcHMuIFlvdSBtYXkgZmVlbCB0aGF0IHRoZSB3b3JyeSBjb250aW51ZXMgZnJvbSBvbmUgdGhpbmcgdG9cbiAgICAgICAgdGhlIG5leHQuXG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8VHlwb2dyYXBoeT5cbiAgICAgICAgUGh5c2ljYWwgc3ltcHRvbXMgb2YgR0FEIGNhbiBpbmNsdWRlIHJlc3RsZXNzbmVzcywgZGlmZmljdWx0eVxuICAgICAgICBjb25jZW50cmF0aW5nIGFuZCBzbGVlcGluZyBwcm9ibGVtcy5cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIHN0eWxlPXt7IG1hcmdpblRvcDogJzIwcHgnIH19PlxuICAgICAgICBXaGF0IGlzIGEgcGFuaWMgZGlzb3JkZXI/XG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8VHlwb2dyYXBoeT5cbiAgICAgICAgSWYgeW91IGhhdmUgYSBwYW5pYyBkaXNvcmRlciwgeW91IGdldCBpbnRlbnNlLCBzdWRkZW4gcGFuaWMgYXR0YWNrcy5cbiAgICAgICAgVGhlc2UgYXR0YWNrcyBvZnRlbiBmZWF0dXJlIHN0cm9uZ2VyLCBtb3JlIGludGVuc2UgZmVlbGluZ3MgdGhhbiBvdGhlclxuICAgICAgICB0eXBlcyBvZiBhbnhpZXR5IGRpc29yZGVycy5cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxUeXBvZ3JhcGh5PlxuICAgICAgICBUaGUgZmVlbGluZ3Mgb2YgdGVycm9yIG1heSBzdGFydCBzdWRkZW5seSBhbmQgdW5leHBlY3RlZGx5IG9yIHRoZXkgbWF5XG4gICAgICAgIGNvbWUgZnJvbSBhIHRyaWdnZXIsIGxpa2UgZmFjaW5nIGEgc2l0dWF0aW9uIHlvdSBkcmVhZC4gUGFuaWMgYXR0YWNrc1xuICAgICAgICBjYW4gcmVzZW1ibGUgaGVhcnQgYXR0YWNrcy4gSWYgdGhlcmXigJlzIGFueSBjaGFuY2UgeW914oCZcmUgZXhwZXJpZW5jaW5nIGFcbiAgICAgICAgaGVhcnQgYXR0YWNrLCBnbyB0byB0aGUgZW1lcmdlbmN5IHJvb20uIEl04oCZcyBiZXR0ZXIgdG8gZXJyIG9uIHRoZSBzaWRlXG4gICAgICAgIG9mIGNhdXRpb24gYW5kIGhhdmUgYSBoZWFsdGhjYXJlIHByb2Zlc3Npb25hbCBjaGVjayB5b3UuXG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5Ib3cgY29tbW9uIGFyZSBhbnhpZXR5IGRpc29yZGVycz88L1R5cG9ncmFwaHk+XG4gICAgICA8VHlwb2dyYXBoeT5cbiAgICAgICAgQW54aWV0eSBkaXNvcmRlcnMgYXJlIHRoZSBtb3N0IGNvbW1vbiBtZW50YWwgaGVhbHRoIGNvbmRpdGlvbnMgaW4gdGhlXG4gICAgICAgIFUuUy4gVGhleSBhZmZlY3QgYWJvdXQgNDAgbWlsbGlvbiBBbWVyaWNhbnMuIFRoZXkgaGFwcGVuIHRvIG5lYXJseSAzMCVcbiAgICAgICAgb2YgYWR1bHRzIGF0IHNvbWUgcG9pbnQuIEFueGlldHkgZGlzb3JkZXJzIG1vc3Qgb2Z0ZW4gYmVnaW4gaW5cbiAgICAgICAgY2hpbGRob29kLCBhZG9sZXNjZW5jZSBvciBlYXJseSBhZHVsdGhvb2QuXG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5cbiAgICAgICAgSG93IGRvIGFueGlldHkgZGlzb3JkZXJzIGFmZmVjdCBjaGlsZHJlbj9cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxUeXBvZ3JhcGh5PlxuICAgICAgICBJdOKAmXMgbm9ybWFsIGZvciBjaGlsZHJlbiB0byBmZWVsIHNvbWUgYW1vdW50IG9mIGFueGlldHksIHdvcnJ5IG9yIGZlYXJcbiAgICAgICAgYXQgY2VydGFpbiBwb2ludHMuIEZvciBleGFtcGxlLCBhIGNoaWxkIG1heSBmZWVsIHNjYXJlZCBvZiBhXG4gICAgICAgIHRodW5kZXJzdG9ybSBvciBiYXJraW5nIGRvZy4gQSB0ZWVuYWdlciBtaWdodCBnZXQgYW54aW91cyBhYm91dCBhblxuICAgICAgICB1cGNvbWluZyB0ZXN0IG9yIHNjaG9vbCBkYW5jZS5cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxUeXBvZ3JhcGh5PlxuICAgICAgICBCdXQgc29tZXRpbWVzLCBjaGlsZHJlbiBhcHByb2FjaCB0aGVzZSBzaXR1YXRpb25zIHdpdGggb3ZlcndoZWxtaW5nXG4gICAgICAgIGRyZWFkIG9yIHRoZXkgY2Fu4oCZdCBzdG9wIHRoaW5raW5nIGFib3V0IGFsbCB0aGUgZmVhcnMgdGllZCB0byBvbmUgb2ZcbiAgICAgICAgdGhlc2UgZXZlbnRzLiBJdCBtYXkgc2VlbSB0aGF0IG5vbmUgb2YgeW91ciBjb21mb3J0cyBoZWxwLiBUaGVzZVxuICAgICAgICBjaGlsZHJlbiBvZnRlbiBnZXQg4oCcc3R1Y2vigJ0gb24gdGhlaXIgd29ycmllcy4gVGhleSBoYXZlIGEgaGFyZCB0aW1lIGRvaW5nXG4gICAgICAgIHRoZWlyIGRhaWx5IGFjdGl2aXRpZXMsIGxpa2UgZ29pbmcgdG8gc2Nob29sLCBwbGF5aW5nIGFuZCBmYWxsaW5nXG4gICAgICAgIGFzbGVlcC4gVGhleeKAmXJlIGV4dHJlbWVseSByZWx1Y3RhbnQgdG8gdHJ5IHNvbWV0aGluZyBuZXcuXG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8VHlwb2dyYXBoeT5cbiAgICAgICAgV2hlbiB0aGlua2luZyBhYm91dCB5b3VyIGNoaWxk4oCZcyBhbnhpZXR5IGxldmVscywg4oCcZ2V0dGluZyBzdHVja+KAnSBpcyBrZXkuXG4gICAgICAgIEl0IHNlcGFyYXRlcyB0aGUgcmVndWxhciB3b3JyaWVzIG9mIGNoaWxkaG9vZCBmcm9tIGFuIGFueGlldHkgZGlzb3JkZXJcbiAgICAgICAgdGhhdCBuZWVkcyBwcm9mZXNzaW9uYWwgaGVscC4gSWYgdGhlIGFueGlldHkgb3Igd29ycnkgaW50ZXJmZXJlcyB3aXRoXG4gICAgICAgIHlvdXIgY2hpbGTigJlzIGFiaWxpdHkgdG8gZnVuY3Rpb24sIGl0IG1heSBiZSB0aW1lIHRvIHNlZWsgaGVscC5cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPlxuICAgICAgICBIb3cgZG9lcyBtZWRpY2F0aW9uIHRyZWF0IGFueGlldHkgZGlzb3JkZXJzP1xuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPFR5cG9ncmFwaHk+XG4gICAgICAgIE1lZGljYXRpb25zIGNhbuKAmXQgY3VyZSBhbiBhbnhpZXR5IGRpc29yZGVyLiBCdXQgdGhleSBjYW4gaW1wcm92ZVxuICAgICAgICBzeW1wdG9tcyBhbmQgaGVscCB5b3UgZnVuY3Rpb24gYmV0dGVyLiBNZWRpY2F0aW9ucyBmb3IgYW54aWV0eSBkaXNvcmRlcnNcbiAgICAgICAgb2Z0ZW4gaW5jbHVkZTpcbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxUeXBvZ3JhcGh5PlxuICAgICAgICBBbnRpLWFueGlldHkgbWVkaWNhdGlvbnMsIHN1Y2ggYXMgYmVuem9kaWF6ZXBpbmVzLCBtYXkgZGVjcmVhc2UgeW91clxuICAgICAgICBhbnhpZXR5LCBwYW5pYyBhbmQgd29ycnkuIFRoZXkgd29yayBxdWlja2x5LCBidXQgeW91IGNhbiBidWlsZCB1cCBhXG4gICAgICAgIHRvbGVyYW5jZSB0byB0aGVtLiBUaGF0IG1ha2VzIHRoZW0gbGVzcyBlZmZlY3RpdmUgb3ZlciB0aW1lLiBZb3VyXG4gICAgICAgIGhlYWx0aGNhcmUgcHJvdmlkZXIgbWF5IHByZXNjcmliZSBhbiBhbnRpLWFueGlldHkgbWVkaWNhdGlvbiBmb3IgdGhlXG4gICAgICAgIHNob3J0LXRlcm0sIHRoZW4gdGFwZXIgeW91IG9mZiBvciB0aGUgcHJvdmlkZXIgbWF5IGFkZCBhbiBhbnRpZGVwcmVzc2FudFxuICAgICAgICB0byB0aGUgbWl4LlxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPFR5cG9ncmFwaHk+XG4gICAgICAgIEFudGlkZXByZXNzYW50cyBjYW4gYWxzbyBoZWxwIHdpdGggYW54aWV0eSBkaXNvcmRlcnMuIFRoZXkgdHdlYWsgaG93XG4gICAgICAgIHlvdXIgYnJhaW4gdXNlcyBjZXJ0YWluIGNoZW1pY2FscyB0byBpbXByb3ZlIG1vb2QgYW5kIHJlZHVjZSBzdHJlc3MuXG4gICAgICAgIEFudGlkZXByZXNzYW50cyBtYXkgdGFrZSBzb21lIHRpbWUgdG8gd29yaywgc28gYmUgcGF0aWVudC4gSWYgeW91IGZlZWxcbiAgICAgICAgbGlrZSB5b3XigJlyZSByZWFkeSB0byBzdG9wIHRha2luZyBhbnRpZGVwcmVzc2FudHMsIHRhbGsgdG8geW91ciBwcm92aWRlclxuICAgICAgICBmaXJzdC5cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxUeXBvZ3JhcGh5PlxuICAgICAgICBCZXRhLWJsb2NrZXJzLCB1c3VhbGx5IHVzZWQgZm9yIGhpZ2ggYmxvb2QgcHJlc3N1cmUsIGNhbiBoZWxwIHJlZHVjZVxuICAgICAgICBzb21lIG9mIHRoZSBwaHlzaWNhbCBzeW1wdG9tcyBvZiBhbnhpZXR5IGRpc29yZGVycy4gVGhleSBjYW4gcmVsaWV2ZVxuICAgICAgICByYXBpZCBoZWFydGJlYXQsIHNoYWtpbmcgYW5kIHRyZW1ibGluZy5cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxUeXBvZ3JhcGh5PlxuICAgICAgICBZb3VyIGhlYWx0aGNhcmUgcHJvdmlkZXIgd2lsbCB3b3JrIHdpdGggeW91IHRvIGZpbmQgdGhlIHJpZ2h0IG1lZGljYXRpb25cbiAgICAgICAgY29tYmluYXRpb24gYW5kIGRvc2FnZS4gRG9u4oCZdCBjaGFuZ2UgdGhlIGRvc2Ugd2l0aG91dCBjb25zdWx0aW5nIHlvdXJcbiAgICAgICAgcHJvdmlkZXIuIFRoZXnigJlsbCBtb25pdG9yIHlvdSB0byBtYWtlIHN1cmUgdGhlIG1lZGljaW5lcyBhcmUgd29ya2luZ1xuICAgICAgICB3aXRob3V0IGNhdXNpbmcgbmVnYXRpdmUgc2lkZSBlZmZlY3RzLlxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+XG4gICAgICAgIEhvdyBkb2VzIHBzeWNob3RoZXJhcHkgdHJlYXQgYW54aWV0eSBkaXNvcmRlcnM/XG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8VHlwb2dyYXBoeT5cbiAgICAgICAgUHN5Y2hvdGhlcmFweSwgb3IgY291bnNlbGluZywgaGVscHMgeW91IGRlYWwgd2l0aCB5b3VyIGVtb3Rpb25hbFxuICAgICAgICByZXNwb25zZSB0byB0aGUgaWxsbmVzcy4gQSBtZW50YWwgaGVhbHRoIHByb3ZpZGVyIHRhbGtzIHRocm91Z2hcbiAgICAgICAgc3RyYXRlZ2llcyB0byBoZWxwIHlvdSBiZXR0ZXIgdW5kZXJzdGFuZCBhbmQgbWFuYWdlIHRoZSBkaXNvcmRlci5cbiAgICAgICAgQXBwcm9hY2hlcyBpbmNsdWRlOlxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPFR5cG9ncmFwaHk+XG4gICAgICAgIENvZ25pdGl2ZSBiZWhhdmlvcmFsIHRoZXJhcHkgKENCVCkgd2hpY2ggaXMgdGhlIG1vc3QgY29tbW9uIHR5cGUgb2ZcbiAgICAgICAgcHN5Y2hvdGhlcmFweSB1c2VkIHdpdGggYW54aWV0eSBkaXNvcmRlcnMuIENCVCBmb3IgYW54aWV0eSB0ZWFjaGVzIHlvdVxuICAgICAgICB0byByZWNvZ25pemUgdGhvdWdodCBwYXR0ZXJucyBhbmQgYmVoYXZpb3JzIHRoYXQgbGVhZCB0byB0cm91Ymxlc29tZVxuICAgICAgICBmZWVsaW5ncy4gWW91IHRoZW4gd29yayBvbiBjaGFuZ2luZyB0aGVtLlxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPFR5cG9ncmFwaHk+XG4gICAgICAgIEV4cG9zdXJlIHRoZXJhcHkgZm9jdXNlcyBvbiBkZWFsaW5nIHdpdGggdGhlIGZlYXJzIGJlaGluZCB0aGUgYW54aWV0eVxuICAgICAgICBkaXNvcmRlci4gSXQgaGVscHMgeW91IGVuZ2FnZSB3aXRoIGFjdGl2aXRpZXMgb3Igc2l0dWF0aW9ucyB5b3UgbWF5IGhhdmVcbiAgICAgICAgYmVlbiBhdm9pZGluZy4gWW91ciBwcm92aWRlciBtYXkgYWxzbyB1c2UgcmVsYXhhdGlvbiBleGVyY2lzZXMgYW5kXG4gICAgICAgIGltYWdlcnkgd2l0aCBleHBvc3VyZSB0aGVyYXB5LlxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+XG4gICAgICAgIFdoYXQgaGFwcGVucyBpZiBJIGRvbuKAmXQgZ2V0IHRyZWF0bWVudCBmb3IgbXkgY2hpbGQgd2l0aCBhbiBhbnhpZXR5XG4gICAgICAgIGRpc29yZGVyP1xuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPFR5cG9ncmFwaHk+XG4gICAgICAgIEdldHRpbmcgeW91ciBjaGlsZCBoZWxwIGZvciBhbiBhbnhpZXR5IGRpc29yZGVyIGNhbiBpbXByb3ZlIHRoZWlyXG4gICAgICAgIGRldmVsb3BtZW50IGFuZCBzZWxmLWVzdGVlbS4gQnV0IHVudHJlYXRlZCBhbnhpZXR5IGRpc29yZGVycyBjYW4gaGFybTpcbiAgICAgICAgRmFtaWx5IHJlbGF0aW9uc2hpcHMsIFNjaG9vbCBwZXJmb3JtYW5jZSBhbmQgU29jaWFsIGZ1bmN0aW9uaW5nLlxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPFR5cG9ncmFwaHk+XG4gICAgICAgIFlvdXIgY2hpbGQgbWF5IGFsc28gZW5kIHVwIHdpdGggbW9yZSBzZXJpb3VzIG1lbnRhbCBhbmQgcGh5c2ljYWwgaGVhbHRoXG4gICAgICAgIHByb2JsZW1zLiBGb3J0dW5hdGVseSwgdGhlcmUgYXJlIHNldmVyYWwgdHJlYXRtZW50cyBmb3IgYW54aWV0eVxuICAgICAgICBkaXNvcmRlcnMuIFRoZSByaWdodCB0cmVhdG1lbnQgY2FuIGhlbHAgeW91ciBjaGlsZCBtYW5hZ2UgdGhlaXIgc3ltcHRvbXNcbiAgICAgICAgYW5kIGZlZWwgdGhlaXIgYmVzdC5cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICA8L0FydGljbGVXcmFwcGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFueGlldHlEaXNvcmRlclxuIiwiaW1wb3J0IHtcbiAgQXZhdGFyLFxuICBCb3gsXG4gIENvbnRhaW5lcixcbiAgR3JpZCxcbiAgVHlwb2dyYXBoeSxcbiAgbWFrZVN0eWxlcyxcbiAgSWNvbkJ1dHRvbixcbiAgTWVudSxcbiAgTWVudUl0ZW0sXG4gIExpc3RJdGVtSWNvbixcbiAgTGlzdEl0ZW1UZXh0LFxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcbmltcG9ydCB7IGRlZXBQdXJwbGUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMnXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IHsgRmlsdGVyTm9uZVR3b1RvbmUsIE1vcmVWZXJ0LCBTaGFyZVR3b1RvbmUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMnXG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgdGl0bGU6IHtcbiAgICBjb2xvcjogJyMyOTI5MjknLFxuICAgIGZvbnRTaXplOiAnMS44cmVtJyxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XG4gICAgICBmb250U2l6ZTogJzQ1cHgnLFxuICAgICAgbGluZUhlaWdodDogJzYwcHgnLFxuICAgIH0sXG4gIH0sXG4gIGNvbnRlbnQ6IHtcbiAgICAnJiA+IHAnOiB7XG4gICAgICBmb250U2l6ZTogJzE2cHgnLFxuICAgICAgbGluZUhlaWdodDogJzMycHgnLFxuICAgICAgY29sb3I6ICcjMjkyOTI5JyxcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcbiAgICAgICAgZm9udFNpemU6ICcyMXB4JyxcbiAgICAgIH0sXG4gICAgICBmb250RmFtaWx5OiBbXG4gICAgICAgICdTb3VyY2UgU2VyaWYgUHJvJyxcbiAgICAgICAgJ3NlcmlmJyxcbiAgICAgICAgJ0dlb3JnaWEnLFxuICAgICAgICAnQ2FtYnJpYScsXG4gICAgICAgICdUaW1lcyBOZXcgUm9tYW4nLFxuICAgICAgICAnIFRpbWVzJyxcbiAgICAgICAgJ3NlcmlmJyxcbiAgICAgIF0uam9pbignLCcpLFxuICAgICAgZm9udEtlcm5pbmc6ICdub3JtYWwnLFxuICAgIH0sXG4gICAgJyYgPiBwOm50aC1jaGlsZChldmVuKSc6IHtcbiAgICAgIG1hcmdpbjogJzIwcHggMCcsXG4gICAgfSxcbiAgICAnJiA+IGg1Jzoge1xuICAgICAgbWFyZ2luOiAnMjBweCAwJyxcbiAgICB9LFxuICB9LFxufSkpXG5cbmNvbnN0IEFydGljbGVXcmFwcGVyID0gKHsgY2hpbGRyZW4sIHRoZW1lUGhvdG8gfSkgPT4ge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcblxuICBjb25zdCB7IHN0YXRlIH0gPSB1c2VMb2NhdGlvbigpXG5cbiAgY29uc3QgW2FuY2hvckVsLCBzZXRBbmNob3JFbF0gPSB1c2VTdGF0ZShudWxsKVxuXG4gIGNvbnN0IGhhbmRsZU1vcmVPcHRpb25zQ2xpY2sgPSBlID0+IHtcbiAgICBzZXRBbmNob3JFbChlLmN1cnJlbnRUYXJnZXQpXG4gIH1cblxuICBjb25zdCBoYW5kbGVNb3JlT3B0aW9uc0Nsb3NlID0gKCkgPT4ge1xuICAgIHNldEFuY2hvckVsKG51bGwpXG4gIH1cblxuICBjb25zdCBoYW5kbGVDb3B5TGluayA9ICgpID0+IHtcbiAgICB3aW5kb3cubmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoXG4gICAgICBgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufS9hcnRpY2xlLyR7c3RhdGUuc2x1Z31gXG4gICAgKVxuXG4gICAgaGFuZGxlTW9yZU9wdGlvbnNDbG9zZSgpXG4gIH1cblxuICBjb25zdCBoYW5kbGVTaGFyZUNsaWNrID0gKCkgPT4ge1xuICAgIGlmICh3aW5kb3cubmF2aWdhdG9yLnNoYXJlKSB7XG4gICAgICB3aW5kb3cubmF2aWdhdG9yLnNoYXJlKHtcbiAgICAgICAgdGl0bGU6IHN0YXRlLnRpdGxlLFxuICAgICAgICB0ZXh0OiBzdGF0ZS5pbnRybyxcbiAgICAgICAgdXJsOiBgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufS9hcnRpY2xlLyR7c3RhdGUuc2x1Z31gLFxuICAgICAgfSlcbiAgICB9XG4gICAgaGFuZGxlTW9yZU9wdGlvbnNDbG9zZSgpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgc3R5bGU9e3sgbWFyZ2luVG9wOiAnNzBweCcgfX0+XG4gICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0gZGlyZWN0aW9uPVwiY29sdW1uXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezd9PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoM1wiIGNvbG9yPVwidGV4dFByaW1hcnlcIj5cbiAgICAgICAgICAgIDxCb3ggdGV4dEFsaWduPVwiY2VudGVyXCIgZm9udFdlaWdodD17NDAwfSBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxuICAgICAgICAgICAgICB7c3RhdGUudGl0bGV9XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgbXk9XCIyMHB4XCJcbiAgICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICAgICAgICA8QXZhdGFyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogZGVlcFB1cnBsZVs1MDBdLFxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDU2LFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1NixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3N0YXRlLmluaXRpYWxzfVxuICAgICAgICAgICAgICA8L0F2YXRhcj5cbiAgICAgICAgICAgICAgPEJveCBtbD1cIjEwcHhcIiBkaXNwbGF5PVwiZmxleFwiIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBjb2xvcj1cInRleHRQcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAgICA8Qm94IGZvbnRXZWlnaHQ9XCJib2xkXCI+e3N0YXRlLmF1dGhvck5hbWV9PC9Cb3g+XG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwiYm9keTJcIlxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogJzVweCcgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAxNSBPY3QsIDIwMjFcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwib3B0aW9uc1wiXG4gICAgICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgY29sb3I9XCJkZWZhdWx0XCJcbiAgICAgICAgICAgICAgYXJpYS1jb250cm9scz1cIm1vcmUtb3B0aW9uc1wiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU1vcmVPcHRpb25zQ2xpY2t9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxNb3JlVmVydCAvPlxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgPE1lbnVcbiAgICAgICAgICAgICAgaWQ9XCJtb3JlLW9wdGlvbnNcIlxuICAgICAgICAgICAgICBhbmNob3JFbD17YW5jaG9yRWx9XG4gICAgICAgICAgICAgIGtlZXBNb3VudGVkXG4gICAgICAgICAgICAgIG9wZW49e0Jvb2xlYW4oYW5jaG9yRWwpfVxuICAgICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVNb3JlT3B0aW9uc0Nsb3NlfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlQ29weUxpbmt9PlxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24gc3R5bGU9e3sgbWluV2lkdGg6ICczMHB4JyB9fT5cbiAgICAgICAgICAgICAgICAgIDxGaWx0ZXJOb25lVHdvVG9uZSBmb250U2l6ZT1cInNtYWxsXCIgLz5cbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0PkNvcHkgbGluazwvTGlzdEl0ZW1UZXh0PlxuICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICAgICB7d2luZG93Lm5hdmlnYXRvci5zaGFyZSAmJiAoXG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZVNoYXJlQ2xpY2t9PlxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbiBzdHlsZT17eyBtaW5XaWR0aDogJzMwcHgnIH19PlxuICAgICAgICAgICAgICAgICAgICA8U2hhcmVUd29Ub25lIGZvbnRTaXplPVwic21hbGxcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0PlNoYXJlPC9MaXN0SXRlbVRleHQ+XG4gICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgICB7dGhlbWVQaG90byAmJiAoXG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHNyYz17dGhlbWVQaG90b31cbiAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIG9iamVjdEZpdDogJ2NvdmVyJyxcbiAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICcyMHB4JyxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8Qm94IHB0PVwiMTBweFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9HcmlkPlxuICAgIDwvQ29udGFpbmVyPlxuICApXG59XG5cbkFydGljbGVXcmFwcGVyLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5lbGVtZW50LmlzUmVxdWlyZWQsXG4gIHRoZW1lUGhvdG86IFByb3BUeXBlcy5zdHJpbmcsXG59XG5cbkFydGljbGVXcmFwcGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgdGhlbWVQaG90bzogbnVsbCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZVdyYXBwZXJcbiIsIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLXVuZXNjYXBlZC1lbnRpdGllcyAqL1xuaW1wb3J0IHsgVHlwb2dyYXBoeSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEFydGljbGVXcmFwcGVyIGZyb20gJy4vQXJ0aWNsZVdyYXBwZXInXG5pbXBvcnQgYm9va3MgZnJvbSAnLi4vLi4vaW1hZ2VzL2NhcmVlci1hcnRpY2xlLmpwZydcbmltcG9ydCBQdWxsUXVvdGUgZnJvbSAnLi9jb21wb25lbnRzL1B1bGxRdW90ZSdcbmltcG9ydCBBcnRpY2xlSW1hZ2UgZnJvbSAnLi9jb21wb25lbnRzL0FydGljbGVJbWFnZSdcbmltcG9ydCBhbm90aGVySW1hZ2UgZnJvbSAnLi4vLi4vaW1hZ2VzL2NhcmVlci1hcnRpY2xlLTIuanBnJ1xuXG5jb25zdCBDYXJlZXJTdHVkaWVzID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxBcnRpY2xlV3JhcHBlciB0aGVtZVBob3RvPXtib29rc30+XG4gICAgICA8VHlwb2dyYXBoeT5cbiAgICAgICAgV2hpbGUgb3RoZXIgeW91bmcgcGVvcGxlIHRoaW5rIHB1cnN1aW5nIGEgZGVncmVlIGluIG9uZSBvZiB0aGUgYmVzdFxuICAgICAgICB1bml2ZXJzaXRpZXMgaW4gdGhlIGNvdW50cnkgaXMgYSBiaWcgYWNoaWV2ZW1lbnQsIHNvbWUgb2YgdGhlIHlvdW5nXG4gICAgICAgIGluZGl2aWR1YWxzIGhhdmUgZmFpbGVkIGluIHRoZSB3aG9sZSBwcm9jZXNzIGR1ZSB0byBwb29yIGNhcmVlciBjaG9pY2UuXG4gICAgICAgIFNwZWFraW5nIHdpdGggVmFsaGFsbGEgbWVkaWEgZ3JvdXAsIEdyZW1sbHkgT3RpZW5vLCBvbmUgb2YgdGhlIG1lZGljYWxcbiAgICAgICAgYW5kIHN1cmdpY2FsIHN0dWRlbnRzIGluIHRoZSBiZXN0IHVuaXZlcnNpdHkgaW4gS2VueWEsIGFkbWl0dGVkIHRoYXQgaGlzXG4gICAgICAgIGRlZ3JlZSBjYXVzZWQgaGltIGEgbG90IG9mIG1ldGFsIGlsbG5lc3Mgd2hpY2ggaGUgbmV2ZXIgcmVhbGlzZWQgYXRcbiAgICAgICAgZmlyc3QuIENvbWluZyBmcm9tIGEgc3VjY2Vzc2Z1bCBmYW1pbHkgY2FyZWVyIHdpc2UgdGhpcyBsZWQgaGltIHRvXG4gICAgICAgIGNob29zaW5nIGEgY2FyZWVyIHRoYXQgaGUgd2FzIG5vdCBpbnRlcmVzdGVkIGluIGJ1dCBidXQgZGVjaWRlZCB0byBkbyBpdFxuICAgICAgICBkdWUgdG8gdGhlIHByZXNzdXJlIG9mIHRoZSBwYXJlbnRzIHdobyBoYXZlIGZvdW5kIHRoZWlyIHN1Y2Nlc3MgaW4gdGhlXG4gICAgICAgIG1lZGljYWwgaW5kdXN0cnkuIE5vdCBrbm93aW5nIHRoYXQgdGhlIGNoaWxk4oCZcyBpbnRlcmVzdCBpbiBzaG91bGQgYmUgcHV0XG4gICAgICAgIGZpcnN0IGJlZm9yZSBhZHZpc2luZyBoaW0gb3IgaGVyIG9uIHRoZSBjYXJlZXJzIGhlIG9yIHNoZSBtaWdodCB3YW50IHRvXG4gICAgICAgIHB1cnN1ZSB0aGF0IGlzIHdoZXJlIHdlIGFsbCBnZXQgaXQgd3JvbmcuIFwiSSBmb3VuZCBteXNlbGYgZGVwcmVzc2VkLFxuICAgICAgICB3YW50ZWQgdG8gYmUgYWxvbmUgYW5kIGV2ZW4gY29uZnVzZWQgd2l0aGluIHNvbWUgeWVhcnMgb2YgbXkgc3R1ZGllcyBhdFxuICAgICAgICB0aGUgdmFyc2l0eSBiZWNhdXNlIEkgbmV2ZXIgd2FudGVkIHRvIGRvIHRoYXQgY291cnNlIGl0IHdhcyBqdXN0IG5vdCBpblxuICAgICAgICBtZSBteSBwYXJlbnRzIGhhZCBmb3JjZWQgbWUgaW50byBzb21ldGhpbmcgdGhhdCBJIHdhcyBub3QgaW50ZXJlc3RlZCBpblwiXG4gICAgICAgIHNhaWQgR3JlbWxseS5cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxQdWxsUXVvdGU+XG4gICAgICAgIFByZXNzdXJlIHNob3VsZCBiZSB0aGUgbGFzdCB0aGluZyB5b3VuZyBwZW9wbGUgc2hvdWxkIGJlIHB1dCBpbiBhcyB0aGV5XG4gICAgICAgIHVuZGVyZ28gY2FyZWVyIGNob2ljZXMgYWZ0ZXIgc2Nob29sLlxuICAgICAgPC9QdWxsUXVvdGU+XG4gICAgICA8VHlwb2dyYXBoeT5cbiAgICAgICAgUHJlc3N1cmUgc2hvdWxkIGJlIHRoZSBsYXN0IHRoaW5nIHlvdW5nIHBlb3BsZSBzaG91bGQgYmUgcHV0IGluIGFzIHRoZXlcbiAgICAgICAgdW5kZXJnbyBjYXJlZXIgY2hvaWNlcyBhZnRlciBzY2hvb2wuIFdoZW4gYSBkYWQgaXMgYSBkb2N0b3IgZm9yIGV4YW1wbGVcbiAgICAgICAgdGhpcyBkb2VzbuKAmXQgbWFrZSBoaXMgc29uIG9yIGRhdWdodGVyIGhhdmUgaW50ZXJlc3QgaW4gYmVpbmcgYSBkb2N0b3IuXG4gICAgICAgIEV2ZXJ5IGluZGl2aWR1YWwgc2hvdWxkIGhhdmUgYW4gb3Bwb3J0dW5pdHkgdG8gcHVyc3VlIGEgY2FyZWVyIHRoYXQgdGhleVxuICAgICAgICBmZWVsIGNvbWZvcnRhYmxlIGluLiB0aGlzIGlzIGJlY2F1c2UgdGhlIHN0dWR5IHByb2Nlc3MgbmVlZHMgaW50ZXJlc3QsXG4gICAgICAgIGRyaXZpbmcgZm9yY2UgYW5kIG1vdGl2YXRpb24uIFRoaXMgd2lsbCByZWFsbHkgaGVscCBpbiB0aGUgcmVkdWN0aW9uIG9mXG4gICAgICAgIHRoZSBwcmVzc3VyZSB0aGF0IHlvdW5nIGluZGl2aWR1YWxzIGZpbmQgdGhlbXNlbHZlcyBpbiBkdXJpbmcgdGhlaXJcbiAgICAgICAgY2FtcHVzIGxpZmUgYSB0aGluZyB0aGF0IGxlYWRzIG1vc3Qgb2YgdGhlbSBlbmdhZ2luZyBpbiBkcnVnIGFuZFxuICAgICAgICBzdWJzdGFuY2UgYWJ1c2UuXG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8QXJ0aWNsZUltYWdlIHBob3RvPXthbm90aGVySW1hZ2V9IC8+XG4gICAgICA8VHlwb2dyYXBoeT5cbiAgICAgICAgUGFyZW50cyBzaG91bGQgcGxheSBhIHZlcnkgaW1wb3J0YW50IHJvbGUgaW4gY2FyZWVyIGNob2ljZXMgYW5kIG5vdFxuICAgICAgICBmb3JjZSB0aGVtIGluIGNhcmVlcnMgdGhleSBhcmUgbm90IGludGVyZXN0ZWQgaW4gdGhpcyB3aWxsIGF0IG1hbnlcbiAgICAgICAgcG9pbnRzIGxlYWQgaW50byBkZXByZXNzaW9uLiBBY2NvcmRpbmcgdG8gcmVzZWFyY2ggaXQgaXMgc3RhdGVkIHRoYXQgb25lXG4gICAgICAgIG9mIHRoZSBtYWpvciBjYXVzZXMgb2Ygc3RyZXNzIGFtb25nIHlvdW5nIGluZGl2aWR1YWxzIGlzIHdyb25nIGNhcmVlclxuICAgICAgICBzdHVkaWVzIGF0IHRoZSB1bml2ZXJzaXR5IHRoaXMgbGVhZHMgdG8gbWVudGFsIHN0cmFpbiB0aGF0IGlzIGNhdXNlZCBieVxuICAgICAgICBsYWNrIG9mIGludGVyZXN0IGluIHdoYXQgdGhleSBhcmUgc3R1ZHlpbmcsIGFuZCB0aGlzIGNhbiBsZWFkIHRvXG4gICAgICAgIHByZXNzdXJlLiBZb3VuZyBpbmRpdmlkdWFscyBhcmUgYmVsaWV2ZWQgdG8gYmUgdGhlIGxlYWRlcnMgb2YgdG9tb3Jyb3csXG4gICAgICAgIGFuZCB0aGlzIGNhbGxzIGZvciBhIHN1Y2Nlc3MgaW4gdGhlaXIgZWR1Y2F0aW9uIGFuZCBoYXZpbmcgdGhlIHJpZ2h0XG4gICAgICAgIGd1aWRhbmNlIGluIHRoZWlyIHlvdXRoIGxpZmUuIHRoaXMgcmVhbGx5IGhlbHBzIGluIGRldGVybWluaW5nIHRoZWlyXG4gICAgICAgIHRvbW9ycm93LiBZb3V0aCB3aXRoIG1lbnRhbCBoZWFsdGggZGlzb3JkZXJzIG9mdGVuIGV4cGVyaWVuY2VcbiAgICAgICAgZGlmZmljdWx0aWVzIGluIGEgdmFyaWV0eSBzZXR0aW5nIGluY2x1ZGluZyB3aXRoaW4gdGhlaXIgZmFtaWxpZXMgYXRcbiAgICAgICAgaG9tZSwgaW4gc2Nob29sIGFuZCBpbiB0aGUgY29tbXVuaXR5LiBXaXRoIG1lbnRhbCBoZWFsdGggaXNzdWVzIGNhbiBsZWFkXG4gICAgICAgIHRvIHRoZSB5b3VuZyBpbmRpdmlkdWFscyBmYWNpbmcgZGlzY2lwbGluYXJ5IGFjdGlvbnMgaW4gc2Nob29sIGV2ZW4gYW5kXG4gICAgICAgIHRoaXMgbWF5YmUgZHVlIHRvIGRpc3R1cmJlZCBtaW5kIHdoaWNoIGNhbiBsZWFkIHRvIGNoYW5nZSBvZiBiZWhhdmlvdXIsXG4gICAgICAgIHRob3VnaHRzIGFuZCBlbW90aW9ucy5cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxUeXBvZ3JhcGh5PlxuICAgICAgICBBY2NvcmRpbmcgdG8gc3RhdGlzdGljcywgNDAlIG9mIHlvdW5nIHBlb3BsZSBzdWZmZXIgbWVudGFsIGlsbG5lc3NcbiAgICAgICAgY2F1c2VkIGJ5IGFueGlldHkgYW5kIGRlcHJlc3Npb24gd2hpY2ggbWVhbnMgYXBwcm94aW1hdGVseSBvdXQgb2YgMTBcbiAgICAgICAgeW91dGhzIDQgYXJlIG1lbnRhbGx5IGlsbC4gV2UgYXMgYSBzb2NpZXR5IGhhdmUgYSByb2xlIHRvIHBsYXkgaW4gdGhlXG4gICAgICAgIGxpdmVzIG9mIG91ciB5b3VuZyBnZW5lcmF0aW9uIGlmIHdlIGRvbuKAmXQgd2FudCB0byBsb3NlIHRoZW0gdGFraW5nIGNhcmVcbiAgICAgICAgb2YgdGhlbSBzaG91bGQgYmUgYSBwcmlvcml0eSBpbiBldmVyeW9uZeKAmXMgbGlmZS4gUHJldmVudGlvbiBhbmQgZWFybHlcbiAgICAgICAgaW50ZXJ2ZW50aW9uIGluIHlvdXRoIG1lbnRhbCBoZWFsdGggc2hvdWxkIGJlIHB1dCBpbnRvIGNvbnNpZGVyYXRpb25cbiAgICAgICAgYmVmb3JlIHRoaW5ncyBnZXQgb3V0IG9mIGhhbmQuXG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8VHlwb2dyYXBoeT5cbiAgICAgICAgRXZpZGVuY2Ugc3VnZ2VzdHMgdGhhdCBpdCB3b3VsZCBiZSB1bnJlYWxpc3RpYyB0byBjb25zaWRlciBwcm9tb3Rpb24gYW5kXG4gICAgICAgIHByZXZlbnRpb24gaW4gbWVudGFsIGhlYWx0aCBwcm9mZXNzaW9uYWwgYWxvbmcuIEludGVncmF0ZWQgYW5kXG4gICAgICAgIG11bHRpZGlzY2lwbGluYXJ5IHNlcnZpY2VzIGFyZSBuZWVkZWQgdG8gaW5jcmVhc2UgdGhlIHJhbmdlIG9mIHBvc3NpYmxlXG4gICAgICAgIGludGVydmVudGlvbnMgYW5kIGxpbWl0IHRoZSByaXNrIG9mIHBvb3IgbG9uZy10ZXJtIG91dGNvbWUsIHdpdGggYWxzb1xuICAgICAgICBwb3RlbnRpYWwgYmVuZWZpdHMgYmVuZWZpdHMgaW4gdGVybXMgb2YgaGVhbHRoY2FyZSBzeXN0ZW0gY29zdHMuIEhvd2V2ZXJcbiAgICAgICAgbWVudGFsIGhlYWx0aCBwcm9mZXNzaW9uYWwgaGFzIHRoZSBzY2llbnRpZmljLCBldGhpY2FsIGFuZCBtb3JhbFxuICAgICAgICByZXNwb25zaWJpbGl0eSB0byBpbmRpY2F0ZSB0aGUgZGlyZWN0aW9uIHRvIGFsbCBzb2NpYWwsIHBvbGl0aWNhbCBhbmRcbiAgICAgICAgb3RoZXIgaGVhbHRoIGNhcmUgYm9kaWVzIGludm9sdmVkIGluIHRoZSBwcm9jZXNzIG9mIG1lZXRpbmcgbWVudGFsXG4gICAgICAgIGhlYWx0aCBuZWVkcyBkdXJpbmcgeW91dGggeWVhcnMuIE91ciBjYXJlZXJzIHB1cnN1aW5nIHByb2Nlc3Mgc2hvdWxkXG4gICAgICAgIGdpdmUgb3VyIHlvdW5nIHBlb3BsZSBwZWFjZSBvZiBtaW5kIGFuZCBzdWNjZXNzIGluIGxpZmUgYW5kIG5vdFxuICAgICAgICBkaXN0dXJiZWQgbWluZHMuXG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgPC9BcnRpY2xlV3JhcHBlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJlZXJTdHVkaWVzXG4iLCJpbXBvcnQgeyBUeXBvZ3JhcGh5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQXJ0aWNsZVdyYXBwZXIgZnJvbSAnLi9BcnRpY2xlV3JhcHBlcidcbmltcG9ydCBkZXByZXNzaW9uUGhvdG8gZnJvbSAnLi4vLi4vaW1hZ2VzL2RlcHJlc3Npb24tYXJ0aWNsZS5qcGcnXG5pbXBvcnQgUHVsbFF1b3RlIGZyb20gJy4vY29tcG9uZW50cy9QdWxsUXVvdGUnXG5pbXBvcnQgQXJ0aWNsZUltYWdlIGZyb20gJy4vY29tcG9uZW50cy9BcnRpY2xlSW1hZ2UnXG5pbXBvcnQgYW5vdGhlclBob3RvIGZyb20gJy4uLy4uL2ltYWdlcy9kZXByZXNzaW9uLWFydGljbGUtMi5qcGcnXG5cbmNvbnN0IERlcHJlc3Npb24gPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEFydGljbGVXcmFwcGVyIHRoZW1lUGhvdG89e2RlcHJlc3Npb25QaG90b30+XG4gICAgICA8VHlwb2dyYXBoeT5cbiAgICAgICAgTWVudGFsIGhlYWx0aCBpbmNsdWRlcyBvdXIgZW1vdGlvbmFsLCBwc3ljaG9sb2dpY2FsLCBhbmQgc29jaWFsXG4gICAgICAgIHdlbGwtYmVpbmcuIEl0IGFmZmVjdHMgaG93IHdlIHRoaW5rLCBmZWVsLCBhbmQgYWN0LiBJdCBhbHNvIGhlbHBzXG4gICAgICAgIGRldGVybWluZSBob3cgd2UgaGFuZGxlIHN0cmVzcywgcmVsYXRlIHRvIG90aGVycywgYW5kIG1ha2UgY2hvaWNlcy5cbiAgICAgICAgTWVudGFsIGhlYWx0aCBpcyBpbXBvcnRhbnQgYXQgZXZlcnkgc3RhZ2Ugb2YgbGlmZSwgZnJvbSBjaGlsZGhvb2QgYW5kXG4gICAgICAgIGFkb2xlc2NlbmNlIHRocm91Z2ggYWR1bHRob29kLlxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPFR5cG9ncmFwaHk+XG4gICAgICAgIERvbmUgd2l0aCBoaWdoc2Nob29sPyBnb29kLCBqb2luZWQgdGhlIHVuaXZlcnNpdHk/IFRoYXQgaXMgZXZlbiBiZXR0ZXJcbiAgICAgICAgYnV0IHdoYXQgaGFwcGVucyBkdXJpbmcgdGhhdCBwZXJpb2Qgb2YgdHJhbnNpdGlvbiBjYW4gYmUgZGV0cmltZW50YWwgdG9cbiAgICAgICAgc29tZSBzdHVkZW50cyZhcG9zOyBwc3ljaG9sb2dpY2FsIHdlbGwtYmVpbmcuIEZpcnN0IGFuZCBmb3JlbW9zdCB0aGVyZVxuICAgICAgICBpcyB0aGUgY3VsdHVyZSBzaG9jay4gVGhlIHVuaXZlcnNpdHkgZW52aXJvbm1lbnQgaXMgdG90YWxseSBkaWZmZXJlbnRcbiAgICAgICAgZnJvbSB0aGF0IG9mIGhpZ2hzY2hvb2wgdGhlcmVmb3JlIHRoZSBmZWVsaW5ncyBvZiB1bmNlcnRhaW50eSwgY29uZnVzaW9uXG4gICAgICAgIGFuZCB0aGUgcGVyaW9kcyBvZiBmcnVzdHJhdGlvbiBtYXkgbGVhZCB0byBhbnhpZXR5IG9yIGV2ZW4gZGVwcmVzc2lvbi5cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxUeXBvZ3JhcGh5PlxuICAgICAgICBHcm93aW5nIHVwLCBtb3N0IG9mIHVzIHdhbnRlZCB0byBiZSBsYXd5ZXJzLCBkb2N0b3JzLCBwaWxvdHMsXG4gICAgICAgIGpvdXJuYWxpc3RzIHRvIG5hbWUgYnV0IGEgZmV3IGJ1dCBub3cgaGVyZSB3ZSBhcmUgYXQgdGhlIHVuaXZlcnNpdHkgbm9cbiAgICAgICAgbG9uZ2VyIHN1cmUgaWYgd2Ugc3RpbGwgd2FudCB0byBwdXJzdWUgdGhvc2UgY2FyZWVycyBwcm9iYWJseSBkdWUgdG8gdGhlXG4gICAgICAgIGdyYWRlcyB3ZSBnb3Qgb3Igd2UgYXJlIGp1c3Qgbm90IGludGVyZXN0ZWQgaW4gdGhlbSBhbnltb3JlLiBUaGVcbiAgICAgICAgdW5jZXJ0YWludHkgYWJvdXQgY2FyZWVyIHBhdGhzIHdlaWdocyB1cyBkb3duLiBXZSBkbyBub3QgaGF2ZSBhbnlvbmUgdG9cbiAgICAgICAgdGFsayB0byBzbyB3ZSB1bmtub3dpbmdseSBmYWxsIGludG8gZGVwcmVzc2lvbi5cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxUeXBvZ3JhcGh5PlxuICAgICAgICBBbGwgcGFyZW50cyB3YW50IHRvIHNlZSB0aGVpciBjaGlsZHJlbiBzdWNjZWVkIGluIGxpZmUgaGVuY2UgcHV0IHRvb1xuICAgICAgICBtdWNoIHByZXNzdXJlIG9uIHRoZW0gYW5kIGF0IHRoZSBzYW1lIHRpbWUgdGhlIGNoaWxkcmVuIGFyZSBwcmVzc3VyaW5nXG4gICAgICAgIHRoZW1zZWx2ZXMgdG8gc3VjY2VlZCBpbiBhY2FkZW1pY3MuIFRoZXkgaGF2ZSBzdHJlc3Mgb2YgbWVldGluZ1xuICAgICAgICBkZWFkbGluZXMgYW5kIGV4cGVjdGF0aW9ucy4gVGhpcyBzbG93bHkgbWVzc2VzIHVwIHdpdGggbW9zdFxuICAgICAgICBzdHVkZW50cyZhcG9zOyBtZW50YWwgaGVhbHRoLlxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPFB1bGxRdW90ZT5cbiAgICAgICAgQWxsIHBhcmVudHMgd2FudCB0byBzZWUgdGhlaXIgY2hpbGRyZW4gc3VjY2VlZCBpbiBsaWZlIGhlbmNlIHB1dCB0b29cbiAgICAgICAgbXVjaCBwcmVzc3VyZSBvbiB0aGVtIGFuZCBhdCB0aGUgc2FtZSB0aW1lIHRoZSBjaGlsZHJlbiBhcmUgcHJlc3N1cmluZ1xuICAgICAgICB0aGVtc2VsdmVzIHRvIHN1Y2NlZWQgaW4gYWNhZGVtaWNzLlxuICAgICAgPC9QdWxsUXVvdGU+XG4gICAgICA8VHlwb2dyYXBoeT5cbiAgICAgICAgSW4gdGhpcyBuZXcgZXJhIG9mIHRlY2hub2xvZ2ljYWwgYWR2YW5jZW1lbnQsIGEgbG90IGdvZXMgb24gb24gc29jaWFsXG4gICAgICAgIG1lZGlhLiBNb3N0IHVuaXZlcnNpdHkgc3R1ZGVudHMgYXJlIG1vcmUgb3IgbGVzcyBhZGRpY3RlZCB0byBzb2NpYWxcbiAgICAgICAgbWVkaWEgZXNwZWNpYWxseSBXaGF0c0FwcCwgSW5zdGFncmFtLCBUaWt0b2sgYW5kIFR3aXR0ZXIuIFBlb3BsZSBvdXRcbiAgICAgICAgaGVyZSBhcmUgc2V0dGluZyBzdGFuZGFyZHMgb24gdGhlc2UgcGFnZXMuIFZhY2F0aW9ucywgZGF0ZXMsIG5pZ2h0cyBvdXQsXG4gICAgICAgIGdldGF3YXlzIGFyZSB0aGUgb3JkZXIgb2YgdGhlIGRheS4gQWNjb3JkaW5nIHRvIHNvY2lhbCBtZWRpYSwgcGVvcGxlIGFyZVxuICAgICAgICByZWFsbHkgZW5qb3lpbmcgbGlmZS4gQSBsb3Qgb2YgdW5pdmVyc2l0eSBzdHVkZW50cyB0ZW5kIHRvIGNvbXBhcmUgdGhlaXJcbiAgICAgICAgbGl2ZXMgdG8gd2hhdCBpcyBoYXBwZW5pbmcgb24gc29jaWFsIG1lZGlhLiBUaGV5IGJhcmVseSByZWFsaXplIHRoYXRcbiAgICAgICAgbW9zdCBwZW9wbGUgb25seSBwb3N0IHRoZWlyIGhpZ2ggbW9tZW50cy4gVGhleSB0aGVyZWZvcmUgZW5kIHVwIHB1dHRpbmdcbiAgICAgICAgdW5uZWNlc3NhcnkgcHJlc3N1cmUgb24gdGhlbXNlbHZlcy5cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxUeXBvZ3JhcGh5PlxuICAgICAgICBUaGUgdW5pdmVyc2l0eSBsaWZlIGNvbWVzIHdpdGggYSBsb3Qgb2YgZnJlZWRvbS4gRnJlZWRvbSB0aGF0IG1vc3RcbiAgICAgICAgc3R1ZGVudHMgaGF2ZSBuZXZlciBleHBlcmllbmNlZCBiZWZvcmUuIFRoZSB1bml2ZXJzaXR5IGVudmlyb25tZW50IGFsc29cbiAgICAgICAgY29udGFpbnMgcGVvcGxlIGZyb20gYWxsIHdhbGtzIG9mIGxpZmUuIFRoZWlyIGlzIGRlZmluaXRlbHkgdG9vIG11Y2hcbiAgICAgICAgcGVlciBwcmVzc3VyZSBlc3BlY2lhbGx5IHdoZW4gaXQgY29tZXMgdG8gZHJ1Z3MgYW5kIHN1YnN0YW5jZSBhYnVzZS5cbiAgICAgICAgTW9zdCBzdHVkZW50cyBzdGFydCBhYnVzaW5nIGRydWdzIHdoZW4gdGhleSBhcmUgaW4gdGhlIHVuaXZlcnNpdHkuIFRoZVxuICAgICAgICBhdmFpbGFiaWxpdHkgYW5kIGFmZm9yZGFiaWxpdHkgb2YgdGhlc2UgZHJ1Z3MgYWxzbyBlbmNvdXJhZ2VzIHRoZSBoYWJpdC5cbiAgICAgICAgRHJ1Z3MgYW5kIHN1YnN0YW5jZSBhYnVzZSBzbG93bHkgbWVzc2VzIHVwIHdpdGggdGhlIG1lbnRhbCBoZWFsdGggb2ZcbiAgICAgICAgdGhlc2Ugc3R1ZGVudHMgYW5kIHdpdGhvdXQgZXZlbiByZWFsaXppbmcgdGhleSBnZXQgYWRkaWN0ZWQgYW5kIHNvbWVcbiAgICAgICAgZXZlbiBmYWxsIGludG8gZGVwcmVzc2lvbi5cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxUeXBvZ3JhcGh5PlxuICAgICAgICBBIGJpZyBwZXJjZW50YWdlIG9mIHVuaXZlcnNpdHkgc3R1ZGVudHMgZXNwZWNpYWxseSB0aGUgbWFsZSBnZW5kZXIgYXJlXG4gICAgICAgIG9ubHkgc3VwcG9ydGVkIGZpbmFuY2lhbGx5IGJ5IHRoZWlyIHBhcmVudHMgZHVyaW5nIHRoZSBmaXJzdCB5ZWFyIG9mXG4gICAgICAgIHRoZWlyIHN0dWRpZXMuIFdoZW4gdGhleSBqb2luIHRoZSBzZWNvbmQgeWVhciwgdGhleSBhcmUgc2VlbiBhcyBncm93blxuICAgICAgICB1cHMgd2hvIGNhbiBmZW5kIGZvciB0aGVtc2VsdmVzLiBGaW5hbmNpYWwgd29ycmllcyBpcyB0aGVyZWZvcmUgb25lIG9mXG4gICAgICAgIHRoZSBncmVhdGVzdCBmYWN0b3IgYWZmZWN0aW5nIG1lbnRhbCBoZWFsdGggaW4gdGhlIHVuaXZlcnNpdGllcy4gU29tZVxuICAgICAgICBvcGVuIHVwIGJ1c2luZXNzZXMgYW5kIHdoZW4gdGhleSBib29tLCB0aGV5IGNhbiBubyBsb25nZXIgYmFsYW5jZVxuICAgICAgICBzY2hvb2xpbmcgYW5kIGJ1c2luZXNzLiBPdGhlcnMgdGhlaXIgYnVzaW5lc3NlcyBiYXJlbHkgdGhyaXZlLiBJbiBib3RoXG4gICAgICAgIHNjZW5hcmlvcyB0aGUgc3R1ZGVudHMgYXJlIG5vdCBpbiB0aGUgcmlnaHQgc3RhdGUgb2YgbWluZC5cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxBcnRpY2xlSW1hZ2UgcGhvdG89e2Fub3RoZXJQaG90b30gLz5cbiAgICAgIDxUeXBvZ3JhcGh5PlxuICAgICAgICBEZWFsaW5nIHdpdGggbWVudGFsIGlsbG5lc3MgaW4gdGhlIHVuaXZlcnNpdGllcyBzaG91bGQgYmUgYSB0b3BcbiAgICAgICAgcHJpb3JpdHkuIENyZWF0aW5nIGF3YXJlbmVzcyBvbiBtZW50YWwgZGlzb3JkZXJzLCB0aGUgc2lnbnMsIGNhdXNlcyBhbmRcbiAgICAgICAgY29uc2VxdWVuY2VzIHRoZXNlIGRpc29yZGVycyBoYXZlIG9uIHBlb3BsZSBpcyB0aGUgdmVyeSBmaXJzdCBzdGVwLlxuICAgICAgICBTdHVkZW50cyZhcG9zOyB3ZWxsYmVpbmcgaXMgZXNzZW50aWFsIGluIGZvc3RlcmluZyBhIGdvb2QgbGVhcm5pbmdcbiAgICAgICAgZW52aXJvbm1lbnQgYW5kIHdlbGxuZXNzIGNhbXBhaWducyBjYW4gYmUgcXVpdGUgZWZmZWN0aXZlIGluIGFkZHJlc3NpbmdcbiAgICAgICAgdGhlIG1lbnRhbCBoZWFsdGggaXNzdWVzLlxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPFR5cG9ncmFwaHk+XG4gICAgICAgIEVtcG93ZXJpbmcgb2Ygc3R1ZGVudHMgaXMgcXVpdGUgaW1wb3J0YW50LiBUaGUgbW9tZW50IHRoZXNlIHN0dWRlbnRzXG4gICAgICAgIGZlZWwgbG92ZWQgYW5kIHJlc3BlY3RlZCBpbiB0aGF0IHRoZWlyIGlkZWFzIGFyZSBsaXN0ZW5lZCB0byBhbmQgdGhleVxuICAgICAgICBnZXQgZmVlZGJhY2sgaW4gc2hvcnQgdGhlaXIgaW5wdXQgaXMgdmFsdWVkIGl0IGJyaW5ncyBvdXQgYSBzZW5zZSBhIHNlbGZcbiAgICAgICAgY29uZmlkZW5jZSwgc2VsZiBlZmZpY2FjeSBhbmQgYW4gYWJpbGl0eSB0byBkZWFsIHdpdGggaXNzdWVzIGFyb3VuZFxuICAgICAgICB0aGVtLlxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPFR5cG9ncmFwaHk+XG4gICAgICAgIENvdW5zZWxpbmcgY2FuIGdvIGEgbG9uZyB3YXkgaW4gZGVhbGluZyB3aXRoIG1lbnRhbCBoZWFsdGggaXNzdWVzLiBBc1xuICAgICAgICBzdGF0ZWQgZWFybGllciBvbiBtYW55IHN0dWRlbnRzIGZhbGwgaW50byBkZXByZXNzaW9uIGR1ZSB0byB1bmNlcnRhaW50eVxuICAgICAgICBhYm91dCBjYXJlZXIgcGF0aHMsIHBhcmVudGFsIHByZXNzdXJlLCBzb2NpYWwgbWVkaWEgcHJlc3N1cmUsIHN1YnN0YW5jZVxuICAgICAgICBhYnVzZSBhbmQgY3VsdHVyZSBzaG9jay4gVGhlc2UgYXJlIGlzc3VlcyB0aGF0IGNhbiBiZSBhZGRyZXNzZWQgdGhyb3VnaFxuICAgICAgICBndWlkYW5jZSBhbmQgY291bnNlbGluZy4gSGF2aW5nIHRoZXNlIHNlc3Npb25zIHJlZ3VsYXJseSBhbmQgbW9yZXNvXG4gICAgICAgIGltbWVkaWF0ZWx5IG5ldyBzdHVkZW50cyBhcmUgYWRtaXR0ZWQgaW50byB0aGUgdW5pdmVyc2l0aWVzIHdpbGwgc2F2ZSBhXG4gICAgICAgIGxhcmdlIG51bWJlciBmcm9tIGJlY29taW5nIHZpY3RpbXMgb2YgbWVudGFsIGlsbG5lc3Nlcy5cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxUeXBvZ3JhcGh5PlxuICAgICAgICBQcm92aXNpb24gb2Ygc3RyZXNzIG1hbmFnZW1lbnQgcmVzb3VyY2VzIGNhbiBoZWxwIGFkZHJlc3MgdGhlIGlzc3VlLlxuICAgICAgICBVbml2ZXJzaXRpZXMgY2FuIGhhdmUgZ3ltcyB3aGVyZSBzdHVkZW50cyBjYW4gZXhlcmNpc2UsIHByb3ZpZGVcbiAgICAgICAgbmVjZXNzYXJ5IGVxdWlwbWVudCBmb3IgZGlmZmVyZW50IHNwb3J0cyBhbmQgZ2FtZXMsIHNldCBhc2lkZSByb29tcyBmb3JcbiAgICAgICAgZW50ZXJ0YWlubWVudCwgb3JnYW5pemUgZXZlbnRzIHdoZXJlYnkgc3R1ZGVudHMgY2FuIHNob3djYXNlIHRoZWlyXG4gICAgICAgIHRhbGVudHMsIGdyYW50IHBlcm1pc3Npb24gdG8gc3R1ZGVudHMgdG8gb3JnYW5pemUgaW50ZXJzY2hvb2wgZ2FtZXNcbiAgICAgICAgY29tcGV0aXRpb24gYW5kIGV2ZW4gYXdhcmQgdGhlIHdpbm5pbmcgdGVhbXMuIFN1Y2ggYWN0aXZpdGllcyBwcm92aWRlIGFuXG4gICAgICAgIG9wcG9ydHVuaXR5IGZvciBzdHVkZW50cyB0byB1bndpbmQuXG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8VHlwb2dyYXBoeT5cbiAgICAgICAgRGVhbGluZyB3aXRoIG1lbnRhbCBoZWFsdGggaXNzdWVzIGNhbiBhbHNvIGJlIGEgcGVyc29uYWwgaW5pdGlhdGl2ZS5cbiAgICAgICAgVGFraW5nIHByZXZlbnRpdmUgbWVhc3VyZXMgY2FuIHNhdmUgb25lIGZyb20gZ29pbmcgdGhyb3VnaCBoZWxsLiBUYWxraW5nXG4gICAgICAgIHRvIHNvbWVvbmUgYWJvdXQgeW91ciBmZWVsaW5ncyBoZWxwcyByZWR1Y2UgdGhlIG1lbnRhbCB0b3J0dXJlLCBrZWVwaW5nXG4gICAgICAgIGluIGNvbnRhY3Qgd2l0aCBmcmllbmRzLCBsZWFybmluZyBuZXcgc2tpbGxzLCBkb2luZyBzdHVmZiB0aGF0IHlvdVxuICAgICAgICBlbmpveSwgZXhlcmNpc2luZywgdGFraW5nIGEgYnJlYWsgZnJvbSBvbmUmYXBvcztzIGRhaWx5IHJvdXRpbmUsXG4gICAgICAgIHZvbHVudGVlcmluZyBhbmQgbGFzdCBidXQgbm90IGxlYXN0IGFjY2VwdGluZyBvbmVzZWxmLlxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPFR5cG9ncmFwaHk+XG4gICAgICAgIFN0dWRlbnRzIGluIHRoZSB1bml2ZXJzaXRpZXMgZXhwZXJpZW5jZSBhIGxvdCBvZiBzdHJ1Z2dsZXMuIFRoZSBlYXJsaWVyXG4gICAgICAgIHRoZSBpc3N1ZXMgYXJlIGFkZHJlc3NlZCB0aGUgYmV0dGVyIHNpbmNlIGl0IHNhdmVzIHRoZSBzdHVkZW50IGZyb21cbiAgICAgICAgZXhwZXJpZW5jaW5nIG1lbnRhbCBkaXNvcmRlcnMgdGhhdCBhZmZlY3QgcGVyZm9ybWFuY2UgaW4gdGhlIGxvbmctcnVuLlxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgIDwvQXJ0aWNsZVdyYXBwZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGVwcmVzc2lvblxuIiwiaW1wb3J0IHsgVHlwb2dyYXBoeSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEFydGljbGVXcmFwcGVyIGZyb20gJy4vQXJ0aWNsZVdyYXBwZXInXG5pbXBvcnQgcGhvdG8gZnJvbSAnLi4vLi4vaW1hZ2VzL21pbmRmdWxsbmVzcy1hcnRpY2xlLmpwZydcbmltcG9ydCBQdWxsUXVvdGUgZnJvbSAnLi9jb21wb25lbnRzL1B1bGxRdW90ZSdcblxuY29uc3QgTWVudGFsQXdhcmVuZXNzID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxBcnRpY2xlV3JhcHBlciB0aGVtZVBob3RvPXtwaG90b30+XG4gICAgICA8VHlwb2dyYXBoeT5cbiAgICAgICAgTWVudGFsIGhlYWx0aCBhd2FyZW5lc3MgaXMgdGhlIHJlY29nbml0aW9uIHRoYXQgb3VyIHBzeWNob2xvZ2ljYWxcbiAgICAgICAgd2VsbC1iZWluZyBpcyBhbiBpbXBvcnRhbnQgcGFydCBvZiBvdXIgb3duIGhlYWx0aCxwcm9kdWN0aXZpdHkgYW5kXG4gICAgICAgIGhhcGluZXNzICxhcyB3ZWxsIGFzIHRoZSB3ZWxsIC1iZWluZyBvZiBvdXIgY29tbXVuaXRpZXMuIEl0IGluY2x1ZGVzIG91clxuICAgICAgICBlbW90aW9uYWwscHN5Y2hvbG9naWNhbCBhbmQgc29jaWFsIHdlbGwtYmVpbmcuSXQgYWZmZWN0cyBob3cgd2VcbiAgICAgICAgZmVlbCx0aGluayBhbmQgYWN0LiBNZW50YWwgaWxsbmVzc2VzIGFmZmVjdCAxOSUgb2YgdGhlIGFkdWx0XG4gICAgICAgIHBvcHVsdGlvbiw0NiUgb2YgdGVlbmFnZXJzIGFuZCAxMyUgb2YgY2hpbGRyZW4gZWFjaCB5ZWFyLlxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPFR5cG9ncmFwaHk+XG4gICAgICAgIE1lbnRhbCBoZWFsdGggaXMgY2F1c2VkIGJ5IGRpZmZlcmVudCBpc3N1ZXMuU29tZSBvZiB0aGVtIGFyZTogQ2hpbGRob29kXG4gICAgICAgIGFidXNlICx0cmF1bWEgb3IgbmVnbGVjdCAtU29jaWFsIGlzb2xhdG9uIG9yIGxvbmVsaW5lc3MsIEV4cGVyaWVuY2luZ1xuICAgICAgICBkaXNjcmltaW5hdGlvbiBhbmQgc3RpZ21hLCBTb2NpYWwgZGlzYWR2YW50YWdlICxwb3ZlcnR5IG9yIGRlYnRcbiAgICAgICAgLEJlcmVhdmVtZW50KGxvc2luZyBzb21lb25lIGNsb3NlIHRvIHlvdSksIFNldmVyZSBvciBsb25nLXRlcm0gc3RyZXNzLFxuICAgICAgICBIYXZpbmcgYSBsb25nLXRlcm0gcGh5c2ljYWwgaGVhbHRoIGNvbmRpdGlvbiBVbmVtcGxveW1lbnQgb3IgbG9zaW5nIHlvdXJcbiAgICAgICAgam9iXG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8UHVsbFF1b3RlPlxuICAgICAgICBNZW50YWwgaGVhbHRoIGF3YXJlbmVzcyBpbmNyZWFzZXMgdGhlIGNoYW5jZXMgZm9yIGVhcmx5XG4gICAgICAgIGludGVydmVudGlvbix3aGljaCBjYW4gcmVzdWx0IGluIGEgZmFzdCByZWNvdmVyeS4gQXdhcmVuZXNzIHJlZHVjZXNcbiAgICAgICAgbmVnYXRpdmUgYWRqZWN0aXZlcyB0aGF0IGhhdmUgYmVlbiBzZXQgdG8gZGVzY3JpYmUgb3VyIHBlb3BsZSB3aXRoIGFcbiAgICAgICAgbWVudGFsIGlsbG5lc3NcbiAgICAgIDwvUHVsbFF1b3RlPlxuICAgICAgPFR5cG9ncmFwaHk+XG4gICAgICAgIFRoZSBtYWluIHdhcm5pbmcgc2lnbnMgb2YgbWVudGFsIGlsbG5lc3MgYXJlIGFzIGZvbGxvd3M6IEV4Y2Vzc2l2ZVxuICAgICAgICBwYXJhbm9pYSx3b3JyeSwgb3IgYW54aWV0eS4gTG9uZy1sYXN0aW5nIHNhZG5lc3Mgb3IgaXJyaXRhYmlsaXR5LlxuICAgICAgICBFeHRyZW1lIGNoYW5nZXMgaW4gbW9vZHMuIFNvY2lhbCB3aXRoZHJhd2FsLiBEcmFtYXRpYyBjaGFuZ2VzIGluIGVhdGluZ1xuICAgICAgICBvciBzbGVlcGluZyBwYXR0ZXJuLlxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPFR5cG9ncmFwaHk+XG4gICAgICAgIE1lbnRhbCBoZWFsdGggYXdhcmVuZXNzIGluY3JlYXNlcyB0aGUgY2hhbmNlcyBmb3IgZWFybHlcbiAgICAgICAgaW50ZXJ2ZW50aW9uLHdoaWNoIGNhbiByZXN1bHQgaW4gYSBmYXN0IHJlY292ZXJ5LiBBd2FyZW5lc3MgcmVkdWNlc1xuICAgICAgICBuZWdhdGl2ZSBhZGplY3RpdmVzIHRoYXQgaGF2ZSBiZWVuIHNldCB0byBkZXNjcmliZSBvdXIgcGVvcGxlIHdpdGggYVxuICAgICAgICBtZW50YWwgaWxsbmVzcy4gQnkgcmFpc2luZyBhd2FyZW5lc3MsIG1lbnRhbCBoZWFsdGggY2FuIG5vdyBiZSBzZWVuIGFzXG4gICAgICAgIGFuIGlsbG5lc3MuIFRoZXNlIGlsbG5lc3NlcyBjYW4gYmUgbWFuYWdlZCBieSB0cmVhdG1lbnQuXG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8VHlwb2dyYXBoeT5cbiAgICAgICAgVGhlcmUgYXJlIHNldmVyYWwgd2F5cyB0byBwYXJ0aWNpcGF0ZSBpbiBNZW50YWwgSGVhbHRoIEF3YXJlbmVzcy5UaGV5XG4gICAgICAgIGluY2x1ZGUgdGhlIGZvbGxvd2luZzpcbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPlNoYXJlIHlvdXIgc3Rvcnk8L1R5cG9ncmFwaHk+XG4gICAgICA8VHlwb2dyYXBoeT5cbiAgICAgICAgT25lIG9mIHRoZSBiZXN0IHdheSB0byBiZWF0IHRoZSBzdGlnbWEgc29ycm91bmRpbmcgbWVudGFsIGhlYWx0aFxuICAgICAgICBjaGFsbGVuZ2VzIGlzIHRvIGtlZXAgdGhlIHRvcGljIGluIHRoZSBjb252ZXJzYXRpb24uXG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5cbiAgICAgICAgRWR1Y2F0ZSB5b3Vyc2VsZiBvbiBNZW50YWwgSGVhbHRoIEFuZCBXZWxsbmVzc1xuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPFR5cG9ncmFwaHk+XG4gICAgICAgIFRoaXMgaW5jbHVkZSBsZWFybmluZyBob3cgdG8gcHJhY3RpY2UgZ29vZCBzZWxmLWNhcmUgaGFiaXRzIHRvIHByb3RlY3RcbiAgICAgICAgeW91ciBvd24gbWVudGFsIHdlbGxuZXNzLlxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+VGFsayB0byBhIHRoZXJhcGlzdDwvVHlwb2dyYXBoeT5cbiAgICAgIDxUeXBvZ3JhcGh5PlxuICAgICAgICBBbm90aGVyIHRoaW5nIHlvdSBjYW4gZG8gaXMgdG8gc3BlYWsgd2l0aCBhIHRoZXJhcGlzdCB0byBhZGRyZXNzcyBhbnlcbiAgICAgICAgbWVudGFsIGhlYWx0aCBjaGFsbGVuZ2VzIHRoYXQgeW91YHJlIGZhY2luZ2luIHlvdXIgbGlmZS5cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPkZvY3VzIE9uIFlvdXIgU2VsZi1jYXJlPC9UeXBvZ3JhcGh5PlxuICAgICAgPFR5cG9ncmFwaHk+XG4gICAgICAgIFRoaXMgcGxheXMgYW4gaW1wb3J0YW50IHJvbGUgaW4gbWVudGFsIGhlYWx0aC4gU3VjaCBoYWJpdHMgaW5jbHVkZTotXG4gICAgICAgIGdldHRpbmcgdGhlIHByb3BlciBhbW91bnQgb2Ygc2xlZXAsIGFtb25nIG90aGVycy5cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPlN1cG9ydCB0aG9zZSBhcm91bmQgeW91PC9UeXBvZ3JhcGh5PlxuICAgICAgPFR5cG9ncmFwaHk+XG4gICAgICAgIFRoaXMgaW5jbHVkZSBoZWxwaW5nIHRoZW0gdG8gcmVhY2ggb3V0IGZvciBwcm9mZXNzaW9uYWwgaGVscCBmcm9tIGFcbiAgICAgICAgdGhlcmFwaXN0IG9yIHlvdSBjaGVjayBpbiB3aXRoIHRoZW0gcmVndXJsYXJseSB0byBzZWUgaWYgdGhlcmVgc1xuICAgICAgICBhbnl0aGluZyB5b3UgY2FuIGRvIHRvIHN1cG9ydCB0aGVtLlxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPFR5cG9ncmFwaHk+XG4gICAgICAgIEluY3JlYXNlZCBpbnZlc3RtZW50IGlzIHJlcXVpcmQgb24gYWxsIGZyb250czogZm9yIG1lbnRhbCBoZWFsdGhcbiAgICAgICAgYXdhcmVuZXNzIHRvIGluY3JlYXNlIHVuZGVyc3RhbmRpbmcgYW5kIHJlZHVjZSBzdGlnbWEsZm9yIGVmZm9ydHMgdG9cbiAgICAgICAgaW5jcmVhc2UgYWNjZXNzIHRvIHF1YWxpdHkgbWVudGFsIGhlYWx0aCBjYXJlIHNuZCBlZmZlY3RpdmUgdHJlYXRtZW50c1xuICAgICAgICBhbmQgZm9yIHJlc2VhcmNoIHRvIGlkZW50aWZ5IG5ldyB0cmVhdG1lbnRzIGFuZCBpbXByb3ZlIGV4aXN0aW5nXG4gICAgICAgIHRyZWF0bWVudHMgZm9yIGFsbCBtZW50YWwgZGlzb3JkZXJzLlxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgIDwvQXJ0aWNsZVdyYXBwZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVudGFsQXdhcmVuZXNzXG4iLCJpbXBvcnQgeyBCb3gsIExpc3QsIFR5cG9ncmFwaHksIG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBBcnRpY2xlV3JhcHBlciBmcm9tICcuL0FydGljbGVXcmFwcGVyJ1xuaW1wb3J0IHBob3RvIGZyb20gJy4uLy4uL2ltYWdlcy9pbnRyby0xMDEtYXJ0aWNsZS5qcGcnXG5pbXBvcnQgUHVsbFF1b3RlIGZyb20gJy4vY29tcG9uZW50cy9QdWxsUXVvdGUnXG5pbXBvcnQgYW5vdGhlclBob3RvIGZyb20gJy4uLy4uL2ltYWdlcy9lYXRpbmctZGlzb3JkZXJzLWFydGljbGUuanBnJ1xuaW1wb3J0IEFydGljbGVJbWFnZSBmcm9tICcuL2NvbXBvbmVudHMvQXJ0aWNsZUltYWdlJ1xuaW1wb3J0IHlldEFub3RoZXJQaG90byBmcm9tICcuLi8uLi9pbWFnZXMvZW1vdGlvbnMtYXJ0aWNsZS5qcGcnXG5pbXBvcnQgYW54aWV0eVBob3RvIGZyb20gJy4uLy4uL2ltYWdlcy9hbnhpZXR5LWNodW0uanBnJ1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIHBhcmFncmFwaDoge1xuICAgIGZvbnRTaXplOiAnMTZweCcsXG4gICAgbGluZUhlaWdodDogJzMycHgnLFxuICAgIGNvbG9yOiAnIzI5MjkyOScsXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xuICAgICAgZm9udFNpemU6ICcyMXB4JyxcbiAgICB9LFxuICAgIGZvbnRGYW1pbHk6IFtcbiAgICAgICdTb3VyY2UgU2VyaWYgUHJvJyxcbiAgICAgICdzZXJpZicsXG4gICAgICAnR2VvcmdpYScsXG4gICAgICAnQ2FtYnJpYScsXG4gICAgICAnVGltZXMgTmV3IFJvbWFuJyxcbiAgICAgICcgVGltZXMnLFxuICAgICAgJ3NlcmlmJyxcbiAgICBdLmpvaW4oJywnKSxcbiAgICBmb250S2VybmluZzogJ25vcm1hbCcsXG4gIH0sXG59KSlcblxuY29uc3QgTWVudGFsSGVhbHRoRGlzb3JkZXJzID0gKCkgPT4ge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcblxuICByZXR1cm4gKFxuICAgIDxBcnRpY2xlV3JhcHBlciB0aGVtZVBob3RvPXtwaG90b30+XG4gICAgICA8VHlwb2dyYXBoeT5cbiAgICAgICAgQXMgdGhlIG5hbWUgc3VnZ2VzdHMsIG1lbnRhbCBoZWFsdGggZGlzb3JkZXJzIGFyZSBpbGxuZXNzIHRoYXQgYWZmZWN0XG4gICAgICAgIHRoZSBjb2duaXRpdmUgZmFjdG9yIHRodXMgYWZmZWN0aW5nIGFuIGluZGl2aWR1YWzigJlzIG1vb2QsIGZlZWxpbmcsXG4gICAgICAgIHRoaW5raW5nIGFuZCBiZWhhdmlvci4gU3R1ZGllcyBoYXZlIHNob3duIHRoYXQgdXAgdG8gNTAlIHdobyByZXF1aXJlXG4gICAgICAgIG1lbnRhbCBoZWFsdGggc2VydmljZXMgYXJlIGFsc28gaW52b2x2ZWQgaW4gc3Vic3RhbmNlIGFidXNlIHByb2JsZW1zLlxuICAgICAgICBTdWJzdGFuY2UgdXNlIHN1Y2ggYXMgQ2FubmFiaXMgZXNwZWNpYWxseSBpbiBoaWdoIGNvbnRlbnQgaXMgc2FpZCB0b1xuICAgICAgICBoYXZlIGEgZHVhbCBkaWFnbm9zaXMgb3IgYSBjb25jdXJyZW50IGRpc29yZGVyLiBXaHkgaXMgdGhpcz8gUGVvcGxlIHdob1xuICAgICAgICBzdWZmZXIgZnJvbSBtZW50YWwgZGlzb3JkZXJzIG9mdGVuIHRoYW4gbm90IGFidXNlIGFsY29ob2wgYW5kIG90aGVyXG4gICAgICAgIGRydWdzIHRvIGxlc3NlbiB0aGUgc3ltcHRvbXMgb2YgbWVudGFsIGlsbG5lc3MuXG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8UHVsbFF1b3RlPlxuICAgICAgICBTdHVkaWVzIGhhdmUgc2hvd24gdGhhdCB1cCB0byA1MCUgd2hvIHJlcXVpcmUgbWVudGFsIGhlYWx0aCBzZXJ2aWNlcyBhcmVcbiAgICAgICAgYWxzbyBpbnZvbHZlZCBpbiBzdWJzdGFuY2UgYWJ1c2UgcHJvYmxlbXMuXG4gICAgICA8L1B1bGxRdW90ZT5cbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiPlNjaGl6b2FmZmVjdGl2ZSBEaXNvcmRlcjwvVHlwb2dyYXBoeT5cbiAgICAgIDxUeXBvZ3JhcGh5PlxuICAgICAgICBBbiBpbmRpdmlkdWFsIGlzIGRpYWdub3NlZCB3aXRoIHRoaXMgZGlzb3JkZXIgd2hlbiB0aGV5IGhhdmUgYm90aCBhIG1vb2RcbiAgICAgICAgZGlzb3JkZXIgYW5kIGEgcHN5Y2hvdGljIGRpc29yZGVyIGF0IHRoZSBzYW1lIHRpbWUuIFRoZSBkaXNwaXJpdGluZ1xuICAgICAgICBzeW1wdG9tcyBvZiBzY2hpem9hZmZlY3RpdmUgZGlzb3JkZXIgaW5jbHVkZSBoYWxsdWNpbmF0aW9ucywgZGVsdXNpb25zLFxuICAgICAgICBkaXNvcmdhbml6ZWQgdGhvdWdodHMsIHN1aWNpZGFsIHRob3VnaHRzIGFuZCBjb25jZW50cmF0aW9uIGltcGFpcm1lbnQuXG4gICAgICAgIFRoZSBtYW5pYWMgc3ltcHRvbXMgb2YgdGhpcyBkaXNvcmRlciBpbmNsdWRlIGV4dHJlbWUgZm9ybXMgb2YgZWxhdGlvblxuICAgICAgICB3aXRoIGluY3JlYXNlZCBzZWxmLWNvaW5jaWRlbmNlLiBUaGUgaW5kaXZpZHVhbCBvZnRlbiBhY3RzIGluYXBwcm9wcmlhdGVcbiAgICAgICAgaW4gc29jaWFsIHNpdHVhdGlvbnMsIHN5bXB0b21zIG9mIHBzeWNob3NpcyBhcmUgcHJlc2VudCBtYWtpbmcgdGhlaXJcbiAgICAgICAgYmVoYXZpb3IgYXBwZWFyIHVudXN1YWwuXG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIj5Qc3ljaG9zaXM8L1R5cG9ncmFwaHk+XG4gICAgICA8VHlwb2dyYXBoeT5cbiAgICAgICAgVGhpcyBtb3N0bHkgaXMgYXNzb2NpYXRlZCB3aXRoIHRoZSBtaW5kIHdoZXJlIHRoZXJlIGlzIGRldGFjaG1lbnQgZnJvbVxuICAgICAgICByZWFsaXR5LiBBIHBzeWNob3RpYyBlcGlzb2RlIGlzIGEgdGVybSB3aGVuIGFuIGluZGl2aWR1YWwgZXhwZXJpZW5jZVxuICAgICAgICB0aGlzIHBzeWNob3NpcyBzeW1wdG9tcy4gSXQgYWZmZWN0cyBhbiBpbmRpdmlkdWFs4oCZcyB0aG91Z2h0cywgZmVlbGluZ3MsXG4gICAgICAgIHRob3VnaHRzIGFuZCBiZWhhdmlvciB3aGljaCBjYW4gYmUgYSByZXN1bHQgb2YgdXNpbmcgb3Igd2l0aGRyYXdpbmcgZnJvbVxuICAgICAgICBkcnVncyBhbmQgYWxjb2hvbC4gSW4gc3RhdGlzdGljcyBhYm91dCAzIG91dCBvZiBldmVyeSAxMDAgcGVvcGxlXG4gICAgICAgIGV4cGVyaWVuY2UgYSBwc3ljaG90aWMgZXBpc29kZS5cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxUeXBvZ3JhcGh5PlNpZ25zIGFuZCBzeW1wdG9tcyBvZiBwc3ljaG9zaXM6PC9UeXBvZ3JhcGh5PlxuICAgICAgPExpc3Q+XG4gICAgICAgIDxvbCBjbGFzc05hbWU9e2NsYXNzZXMucGFyYWdyYXBofT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBzdHlsZT17eyBmb250RmFtaWx5OiAnaW5oZXJpdCcsIGZvbnRTaXplOiAnaW5oZXJpdCcgfX0+XG4gICAgICAgICAgICAgIEFueGlldHlcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN0eWxlPXt7IGZvbnRGYW1pbHk6ICdpbmhlcml0JywgZm9udFNpemU6ICdpbmhlcml0JyB9fT5cbiAgICAgICAgICAgICAgU29jaWFsIHdpdGhkcmF3YWxcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN0eWxlPXt7IGZvbnRGYW1pbHk6ICdpbmhlcml0JywgZm9udFNpemU6ICdpbmhlcml0JyB9fT5cbiAgICAgICAgICAgICAgU2xlZXAgZGlzdHVyYmFuY2VcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN0eWxlPXt7IGZvbnRGYW1pbHk6ICdpbmhlcml0JywgZm9udFNpemU6ICdpbmhlcml0JyB9fT5cbiAgICAgICAgICAgICAgUmVkdWNlZCBkcml2ZSBhbmQgbW90aXZhdGlvblxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3R5bGU9e3sgZm9udEZhbWlseTogJ2luaGVyaXQnLCBmb250U2l6ZTogJ2luaGVyaXQnIH19PlxuICAgICAgICAgICAgICBCZWhhdmlvdXJhbCBjaGFuZ2VzXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBzdHlsZT17eyBmb250RmFtaWx5OiAnaW5oZXJpdCcsIGZvbnRTaXplOiAnaW5oZXJpdCcgfX0+XG4gICAgICAgICAgICAgIElycml0YWJpbGl0eVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3R5bGU9e3sgZm9udEZhbWlseTogJ2luaGVyaXQnLCBmb250U2l6ZTogJ2luaGVyaXQnIH19PlxuICAgICAgICAgICAgICBEaXNvcmdhbml6ZWQgdGhpbmtpbmdcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN0eWxlPXt7IGZvbnRGYW1pbHk6ICdpbmhlcml0JywgZm9udFNpemU6ICdpbmhlcml0JyB9fT5cbiAgICAgICAgICAgICAgSGFsbHVjaW5hdGlvbnNcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L29sPlxuICAgICAgPC9MaXN0PlxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCI+QW54aWV0eSBEaXNvcmRlcnM8L1R5cG9ncmFwaHk+XG4gICAgICA8VHlwb2dyYXBoeT5cbiAgICAgICAgVGhpcyBkaXNvcmRlciBpcyBkaXN0aW5ndWlzaGVkIGJ5IGl0cyBwZWN1bGlhcml0eSBpbiBhZmZlY3RpbmcgdGhlXG4gICAgICAgIHBoeXNpY2FsIGhlYWx0aCBvZiB0aGUgaW5kaXZpZHVhbC4gSXQgaXMgY2F1c2VkIGJ5IGJpb2xvZ2ljYWwgYW5kXG4gICAgICAgIHNpdHVhdGlvbmFsIGNpcmN1bXN0YW5jZXMsIGhlaWdodGVuZWQgYW5kIGNvbnRpbnVpbmcgcmVzcG9uc2UgdG8gYVxuICAgICAgICBwZXJjZWl2ZWQgdGhyZWF0LiBUeXBlcyBvZiBhbnhpZXR5IGRpc29yZGVyczpcbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxBcnRpY2xlSW1hZ2UgcGhvdG89e2FueGlldHlQaG90b30gLz5cbiAgICAgIDxCb3ggbXk9XCIxNXB4XCIgcGw9XCIyMHB4XCI+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPkdlbmVyYWwgQW54aWV0eTwvVHlwb2dyYXBoeT5cbiAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcmFncmFwaH0+XG4gICAgICAgICAgQ29udGludW91cyBhbmQgcmVkdW5kYW50IHdvcnJpZXMgdGhhdCBsYXN0IGF0IGxlYXN0IHNpeCBtb250aHMgaW5cbiAgICAgICAgICByZWxhdGlvbiB0byByb3V0aW5lIGxpZmUgZXZlbnRzIGFuZCBhY3Rpdml0aWVzIGZvciBleGFtcGxlIHdvcmssXG4gICAgICAgICAgcmVsYXRpb25zaGlwcywgZmFtaWx5IGFuZCBmaW5hbmNlcy5cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5QYW5pYyBBdHRhY2tzPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMucGFyYWdyYXBofT5cbiAgICAgICAgICBUaGlzIGlzIHRoZSBmZWFyIG9mIGRlYXRoIGxlYWRpbmcgdG8gaGVhcnQgcGFscGF0aW9ucywgbmF1c2VhLFxuICAgICAgICAgIGNob2tpbmcsIHZlcnRpZ28sIGNoZXN0IHBhaW4gYW5kIHBlcnNwaXJhdGlvbi5cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5QYW5pYyBEaXNvcmRlcnM8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXJhZ3JhcGh9PlxuICAgICAgICAgIERyZWFkIG9mIHNpdHVhdGlvbnMgdGhhdCBtYXkgY2F1c2UgYSBwYW5pYyBhdHRhY2suXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+UGhvYmlhczwvVHlwb2dyYXBoeT5cbiAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcmFncmFwaH0+XG4gICAgICAgICAgT3ZlcndoZWxtaW5nIGZlZWxpbmcgb2YgdGVycm9yIHRvd2FyZHMgYSBzcGVjaWZpYyBvYmplY3QsIHNpdHVhdGlvbiBvclxuICAgICAgICAgIGFjdGl2aXR5LlxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPk9ic2Vzc2l2ZS1jb21wdWxzaXZlIGRpc29yZGVyPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMucGFyYWdyYXBofT5cbiAgICAgICAgICBSZWN1cnJpbmcgYWN0aW9ucyB1c2VkIHRvIGNvcGUgd2l0aCB1bndhbnRlZCB0aG91Z2h0cy5cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5Qb3N0LXRyYW1hdW1hdGljIHN0cmVzcyBkaXNvcmRlcjwvVHlwb2dyYXBoeT5cbiAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcmFncmFwaH0+XG4gICAgICAgICAgSXQgaXMgdGhlIHJlLWV4cGVyaWVuY2luZyBvZiBhIHRyYXVtYXRpYyBldmVudCBmb3IgYSBsb25nIHBlcmlvZCBvZlxuICAgICAgICAgIHRpbWUuXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDwvQm94PlxuICAgICAgPEFydGljbGVJbWFnZSBwaG90bz17eWV0QW5vdGhlclBob3RvfSAvPlxuXG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIj5TY2hpem9waHJlbmlhPC9UeXBvZ3JhcGh5PlxuICAgICAgPFR5cG9ncmFwaHk+XG4gICAgICAgIEl0IGlzIGNhdXNlZCBieSBhIGNoZW1pY2FsIGRpc3R1cmJhbmNlIG9mIHRoZSBicmFpbnMgZnVuY3Rpb25pbmcuIFRodXMsXG4gICAgICAgIHRoaXMgZGlzb3JkZXIgaXMgY2hhcmFjdGVyaXplZCBieSB0aGUgY2hhbmdlcyBpbiB0aGUgYmVoYXZpb3Igb3JcbiAgICAgICAgc3ltcHRvbXMgcHJlc2VudCBpbiBhIHBlcmlvZCBvZiBzaXggbW9udGhzLlxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPFR5cG9ncmFwaHk+XG4gICAgICAgIEl0IGFmZmVjdHMgYWJvdXQgb25lIG91dCBvZiBldmVyeSAxMDAgcGVvcGxlLiBDb21tb24gc3ltcHRvbXM7XG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8TGlzdD5cbiAgICAgICAgPG9sIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXJhZ3JhcGh9PlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN0eWxlPXt7IGZvbnRGYW1pbHk6ICdpbmhlcml0JywgZm9udFNpemU6ICdpbmhlcml0JyB9fT5cbiAgICAgICAgICAgICAgSGVhcmluZyB2b2ljZXMgbWF5IGFmZmVjdCBhbGwgdGhlIHNlbnNlc1xuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3R5bGU9e3sgZm9udEZhbWlseTogJ2luaGVyaXQnLCBmb250U2l6ZTogJ2luaGVyaXQnIH19PlxuICAgICAgICAgICAgICBQYXJhbm9pYVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3R5bGU9e3sgZm9udEZhbWlseTogJ2luaGVyaXQnLCBmb250U2l6ZTogJ2luaGVyaXQnIH19PlxuICAgICAgICAgICAgICBSZWxpZ2lvdXMgcHJlb2NjdXBhdGlvblxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3R5bGU9e3sgZm9udEZhbWlseTogJ2luaGVyaXQnLCBmb250U2l6ZTogJ2luaGVyaXQnIH19PlxuICAgICAgICAgICAgICBUaGlua2luZyB0aGF0IHlvdSBjYW4gY29udHJvbCBzb21lb25l4oCZcyB0aG91Z2h0cyBvciB0aGF0IHNvbWUgaXNcbiAgICAgICAgICAgICAgY29udHJvbGxpbmcgeW91ciB0aG91Z2h0cy5cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN0eWxlPXt7IGZvbnRGYW1pbHk6ICdpbmhlcml0JywgZm9udFNpemU6ICdpbmhlcml0JyB9fT5cbiAgICAgICAgICAgICAgRGlzam9pbnRlZCB0aG91Z2h0cy5cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN0eWxlPXt7IGZvbnRGYW1pbHk6ICdpbmhlcml0JywgZm9udFNpemU6ICdpbmhlcml0JyB9fT5cbiAgICAgICAgICAgICAgUmlnaHRlb3VzbmVzc1xuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvb2w+XG4gICAgICA8L0xpc3Q+XG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIj5FYXRpbmcgRGlzb3JkZXJzPC9UeXBvZ3JhcGh5PlxuICAgICAgPFR5cG9ncmFwaHk+XG4gICAgICAgIEludm9sdmVzIHRoZSBkaXN0b3J0aW9uIG9mIGJvZHkgaW1hZ2VzIHRoYXQgbWFrZSBpdCBoYXJkIGZvciBwZW9wbGUgdG9cbiAgICAgICAgbm91cmlzaCB0aGVtc2VsdmVzIGluIGEgaGVhbHRoeSB3YXkuIEl0IG1vc3RseSBhZmZlY3RzIG1lbiBhbmQgd29tZW5cbiAgICAgICAgdW5kZXIgdGhlIGFnZSAzMC5cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxCb3ggbXk9XCIxNXB4XCIgcGw9XCIyMHB4XCI+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPkFub3JleGlhIE5lcnZvc2E8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXJhZ3JhcGh9PlxuICAgICAgICAgIERyYW1hdGljIHdlaWdodCBsb3NzIGR1ZSB0byBmYXN0aW5nIGFuZCBleGNlc3NpdmUgZXhlcmNpc2VcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5CdWxpbWlhIE5lcnZvc2E8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXJhZ3JhcGh9PlxuICAgICAgICAgIEJpbmdlIGVhdGluZyBhY2NvbXBhbmllZCBieSBzZWxmLWluZHVjaW5nIHZvbWl0XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDwvQm94PlxuICAgICAgPEFydGljbGVJbWFnZSBwaG90bz17YW5vdGhlclBob3RvfSAvPlxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCI+VHJlYXRtZW50IGFuZCBSZWNvdmVyeTwvVHlwb2dyYXBoeT5cbiAgICAgIDxUeXBvZ3JhcGh5PlxuICAgICAgICBBY3Rpb25zIHRvIGJlIHRha2VuIGZvciBhbnkgbWVudGFsIGlsbG5lc3Mgd2hldGhlciBvciBub3QgaXQgaXNcbiAgICAgICAgY29udm9sdXRlZCBieSBhbGNvaG9sIG9yIGFueSBkcnVnIG1pc3VzZSBzeW1wdG9tcyBzaG91bGQgYmUgZXZpZGVudC5cbiAgICAgICAgQXBwcm9hY2hlcyB0byBiZSB0YWtlbjpcbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxCb3ggbXk9XCIxNXB4XCIgcGw9XCIyMHB4XCI+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPkVkdWNhdGlvbjwvVHlwb2dyYXBoeT5cbiAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcmFncmFwaH0+XG4gICAgICAgICAgSXQgaGVscHMgeW91ciBmYW1pbHkgdW5kZXJzdGFuZCB0aGUgY2F1c2VzIGFuZCBlZmZlY3RzIGFuZCB3YXlzIG9mXG4gICAgICAgICAgZGVhbGluZyB3aXRoIHRoZSBzeW1wdG9tc1xuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPiBNZWRpY2F0aW9uPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMucGFyYWdyYXBofT5cbiAgICAgICAgICBEZWJ1dCBvZiBuZXcgbWVkaWNhdGlvbiBhdmFpbGFibGUgd2l0aCBmZXdlciBzaWRlIGVmZmVjdHNcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5Qc3ljaG9sb2dpY2FsIFRoZXJhcHk8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXJhZ3JhcGh9PlxuICAgICAgICAgIENvdW5zZWxsaW5nIGhlbHBzIGFuIGluZGl2aWR1YWwgdW5kZXJzdGFuZCB3aGF0IGlzIGdvaW5nIG9uLCBjaGFuZ2VcbiAgICAgICAgICB5b3VyIGxpZmVzdHlsZSB0byBvcHRpbWl6ZSB0aGUgY2hhbmNlcyBvZiByZWNvdmVyeSBhbmQgbGVhcm4gbmV3XG4gICAgICAgICAgc2tpbGxzLlxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPlxuICAgICAgICAgIFNvY2lhbCwgRW1wbG95bWVudCBhbmQgRWR1Y2F0aW9uIFN1cHBvcnRcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMucGFyYWdyYXBofT5cbiAgICAgICAgICBUaGlzIGlzIHZpdGFsIHNvIHRoYXQgb25lIGlzIGFibGUgdG8gbWFpbnRhaW4gc2tpbGwgZGV2ZWxvcG1lbnQgYW5kXG4gICAgICAgICAgY29udGludWF0aW9uIG9mIGluY29tZSBpbiBvcmRlciBub3QgdG8gYmUgY3V0IG9mZiBieSBmcmllbmRzIGFuZFxuICAgICAgICAgIGZhbWlseS4gUmVzZWFyY2ggaGFzIHNob3duIHRoYXQgcGVvcGxlIHdobyBhcmUgbWVudGFsbHkgaWxsIGFuZCBoYXZlIGFcbiAgICAgICAgICBzdXBwb3J0IHN5c3RlbSBoYXZlIG1pbmltYWwgcmVsYXBzZXMuXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDwvQm94PlxuICAgIDwvQXJ0aWNsZVdyYXBwZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVudGFsSGVhbHRoRGlzb3JkZXJzXG4iLCJpbXBvcnQgeyBMaXN0LCBtYWtlU3R5bGVzLCBUeXBvZ3JhcGh5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQXJ0aWNsZVdyYXBwZXIgZnJvbSAnLi9BcnRpY2xlV3JhcHBlcidcbmltcG9ydCBtZW50YWxIZWxwUGhvdG8gZnJvbSAnLi4vLi4vaW1hZ2VzL21lbnRhbC1oZWxwLWFydGljbGUuanBnJ1xuaW1wb3J0IFB1bGxRdW90ZSBmcm9tICcuL2NvbXBvbmVudHMvUHVsbFF1b3RlJ1xuaW1wb3J0IGFub3RoZXJQaG90byBmcm9tICcuLi8uLi9pbWFnZXMvbWVudGFsLWhlbHAtYXJ0aWNsZS0yLmpwZydcbmltcG9ydCBBcnRpY2xlSW1hZ2UgZnJvbSAnLi9jb21wb25lbnRzL0FydGljbGVJbWFnZSdcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICBsaXN0OiB7XG4gICAgJyYgPiAqJzoge1xuICAgICAgZm9udFNpemU6ICcxNnB4JyxcbiAgICAgIGxpbmVIZWlnaHQ6ICczMnB4JyxcbiAgICAgIGNvbG9yOiAnIzI5MjkyOScsXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XG4gICAgICAgIGZvbnRTaXplOiAnMjFweCcsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59KSlcblxuY29uc3QgTWVudGFsU3RpZ21hID0gKCkgPT4ge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcblxuICByZXR1cm4gKFxuICAgIDxBcnRpY2xlV3JhcHBlciB0aGVtZVBob3RvPXttZW50YWxIZWxwUGhvdG99PlxuICAgICAgPFR5cG9ncmFwaHk+XG4gICAgICAgIEdsb2JhbGx5LCBtb3JlIHRoYW4gNzAlIG9mIHBlb3BsZSB3aXRoIG1lbnRhbCBpbGxuZXNzIHJlY2VpdmUgbm9cbiAgICAgICAgdHJlYXRtZW50IGZyb20gaGVhbHRoIGNhcmUgc3RhZmYuIEZhY3RvcnMgaW5jcmVhc2luZyB0aGUgbGlrZWxpaG9vZCBvZlxuICAgICAgICB0cmVhdG1lbnQgYXZvaWRhbmNlIG9yIGRlbGF5IGluY2x1ZGU6XG4gICAgICAgIDxMaXN0PlxuICAgICAgICAgIDxvbCBjbGFzc05hbWU9e2NsYXNzZXMubGlzdH0+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udEZhbWlseTogJ2luaGVyaXQnLCBmb250U2l6ZTogJ2luaGVyaXQnIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBMYWNrIG9mIGtub3dsZWRnZSB0byBpZGVudGlmeSBmZWF0dXJlcyBvZiBtZW50YWwgaWxsbmVzc1xuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRGYW1pbHk6ICdpbmhlcml0JywgZm9udFNpemU6ICdpbmhlcml0JyB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgSWdub3JhbmNlIGFib3V0IGhvdyB0byBhY2Nlc3MgdHJlYXRtZW50XG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udEZhbWlseTogJ2luaGVyaXQnLCBmb250U2l6ZTogJ2luaGVyaXQnIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBQcmVqdWRpY2UgYWdhaW5zdCBwZW9wbGUgd2hvIGhhdmUgbWVudGFsIGlsbG5lc3NcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250RmFtaWx5OiAnaW5oZXJpdCcsIGZvbnRTaXplOiAnaW5oZXJpdCcgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIEV4cGVjdGF0aW9ucyBvZiBkaXNjcmltaW5hdGlvbiBhZ2FpbnN0IHBlb3BsZSBkaWFnbm9zZWQgd2l0aFxuICAgICAgICAgICAgICAgIG1lbnRhbCBpbGxuZXNzXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC9vbD5cbiAgICAgICAgPC9MaXN0PlxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPFR5cG9ncmFwaHk+XG4gICAgICAgIEluIHRoaXMgYXJ0aWNsZSwgd2UgcmV2aWV3ZWQgdGhlIGV2aWRlbmNlIG9mIHdoZXRoZXIgbGFyZ2VyIHNjYWxlXG4gICAgICAgIGFudGktc3RpZ21hIGNhbXBhaWducyBjb3VsZCBsZWFkIHRvIGluY3JlYXNlZCBsZXZlbHMgb2YgaGVscCBzZWVraW5nLlxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPFR5cG9ncmFwaHk+XG4gICAgICAgIFRoaXMgYXJ0aWNsZSBhbHNvIGRlc2NyaWJlcyB0aGUgcm9sZXMgdGhhdCBzdGlnbWEgYW5kIGRpc2NyaW1pbmF0aW9uXG4gICAgICAgIGNvbnRyaWJ1dGUgdG8gdGhlIHRyZWF0bWVudCBnYXAgYW5kIGFzc2Vzc2VzIHRoZSBldmlkZW5jZSB0aGF0IHB1YmxpY1xuICAgICAgICBoZWFsdGggYXBwcm9hY2hlcyB0byBzdGlnbWEgYW5kIGRpc2NyaW1pbmF0aW9uIGNhbiBmYWNpbGl0YXRlIGFjY2VzcyB0b1xuICAgICAgICBtZW50YWwgaGVhbHRoIGNhcmUuXG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIj5cbiAgICAgICAgRGlzY3JpbWluYXRpb24sIFN0aWdtYSBhbmQgTWVudGFsIEhlYWx0aCBDYXJlIEFjY2Vzc1xuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPFR5cG9ncmFwaHk+XG4gICAgICAgIFRoZSByZWxhdGlvbnNoaXAgYmV0d2VlbiBzdGlnbWEgYW5kIGRpc2NyaW1pbmF0aW9uIGFuZCBhY2Nlc3MgdG8gY2FyZSBpc1xuICAgICAgICBtdWx0aWZhY2V0ZWQgOyBzdGlnbWEgYW5kIGRpc2NyaW1pbmF0aW9uIGNhbiBpbXBlZGUgYWNjZXNzIGF0XG4gICAgICAgIGluc3RpdHV0aW9uYWwsIGNvbW11bml0eSBhbmQgaW5kaXZpZHVhbCBsZXZlbHMuXG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8VHlwb2dyYXBoeT5cbiAgICAgICAgQWRkcmVzc2luZyBwdWJsaWMgc3RpZ21hIG1pZ2h0IHJlZHVjZSBleHBlcmllbmNlZCBhbmQgYW50aWNpcGF0ZWQgc3RpZ21hXG4gICAgICAgIGFtb25nIHNlcnZpY2UgdXNlcnMgYW5kIGZhY2lsaXRhdGUgaGVscCBzZWVraW5nIGFuZCBlbmdhZ2VtZW50IHdpdGhcbiAgICAgICAgbWVudGFsIGhlYWx0aCBjYXJlLiBGb3IgZXhhbXBsZSwgaW5kaXZpZHVhbCBzZXJ2aWNlIHVzZXJzIGxpdmluZyBpblxuICAgICAgICBjb3VudHJpZXMgd2l0aCBoaWdoZXIgcmF0ZXMgb2YgaGVscCBzZWVraW5nIGFuZCB0cmVhdG1lbnQgdXRpbGl6YXRpb24sXG4gICAgICAgIGluIGFkZGl0aW9uIHRvIGJldHRlciBwZXJjZWl2ZWQgYWNjZXNzIHRvIGluZm9ybWF0aW9uIGFib3V0IGhvdyB0byBkZWFsXG4gICAgICAgIHdpdGggbWVudGFsIGhlYWx0aCBtZW50YWwgaGVhbHRoIHByb2JsZW1zIGFuZCBsZXNzIHN0aWdtYXRpemluZ1xuICAgICAgICBhdHRpdHVkZXMsIHRlbmRlZCB0byBoYXZlIGxvd2VyIHJhdGVzIG9mIHNlbGYgc3RpZ21hIGFuZCBwZXJjZWl2ZWRcbiAgICAgICAgZGlzY3JpbWluYXRpb24uXG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8UHVsbFF1b3RlPlxuICAgICAgICBBZGRyZXNzaW5nIHB1YmxpYyBzdGlnbWEgbWlnaHQgcmVkdWNlIGV4cGVyaWVuY2VkIGFuZCBhbnRpY2lwYXRlZCBzdGlnbWFcbiAgICAgICAgYW1vbmcgc2VydmljZSB1c2VycyBhbmQgZmFjaWxpdGF0ZSBoZWxwIHNlZWtpbmcgYW5kIGVuZ2FnZW1lbnQgd2l0aFxuICAgICAgICBtZW50YWwgaGVhbHRoIGNhcmUuXG4gICAgICA8L1B1bGxRdW90ZT5cbiAgICAgIDxUeXBvZ3JhcGh5PlxuICAgICAgICBTZWUgZ2xvYmFsbHksIGhvd2V2ZXIsIHN0aWdtYXRpemluZyBhdHRpdHVkZXMgcGVyc2lzdCBhbW9uZyB0aGUgcHVibGljXG4gICAgICAgIGFuZCBoYXZlIGJlZW4gc2hvd24gdG8gYmUgcHJldmFsZW50IGFuZCBhc3NvY2lhdGVkIHdpdGggYSByZWx1Y3RhbmNlIHRvXG4gICAgICAgIHNlZWsgaGVscC5cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxUeXBvZ3JhcGh5PlxuICAgICAgICBTdGlnbWEgYW5kIGRpc2NyaW1pbmF0aW9uIGFuZCB0aGVpciBpbmZsdWVuY2Ugb24gYWNjZXNzIHRvIGNhcmUgbWF5IHZhcnlcbiAgICAgICAgYmFzZWQgb24gZXhwZXJpZW5jZSBvZiBtZW50YWwgZGlzdHJlc3Mgb3Igb3RoZXIgc29jaW9kZW1vZ3JhcGhpY1xuICAgICAgICBmYWN0b3JzLiBGb3IgaW5zdGFuY2UsIHBzeWNob3RpYyBkaXNvcmRlcnMgYXJlIGhpZ2hseSBzdGlnbWF0aXppbmcsIGFuZFxuICAgICAgICBwZW9wbGUgd2l0aCBwc3ljaG9zaXMgYXJlIG1vcmUgbGlrZWx5IHRvIGJlIHBlcmNlaXZlZCBhcyB2aW9sZW50IGFuZFxuICAgICAgICB1bnByZWRpY3RhYmxlIHJlbGF0aXZlIHRvIHBlb3BsZSB3aXRoIG90aGVyIG1lbnRhbCBoZWFsdGggcHJvYmxlbXMuIFRoaXNcbiAgICAgICAgY2FuIGxlYWQgdG8gaGlnaCBsZXZlbHMgb2YgZXhwZXJpZW5jZWQgYW5kIGFudGljaXBhdGVkIGRpc2NyaW1pbmF0aW9uIGluXG4gICAgICAgIGhlYWx0aCBjYXJlIHNldHRpbmdzLiBNb3Jlb3Zlciwgc3Vic3RhbmNlIGFidXNlIGlzIGNvbnNpc3RlbnRseVxuICAgICAgICBhc3NvY2lhdGVkIHdpdGggaGlnaCByYXRlcyBvZiBwdWJsaWMgc3RpZ21hIGFuZCBzdWJzdGFuY2UgYWJ1c2UgcHJvYmxlbXNcbiAgICAgICAgZnJvbSBnZXR0aW5nIGhlYWx0aCBjYXJlIDsgdGhlc2UgaW5kaXZpZHVhbHMgZmVhciBwb29yIHRyZWF0bWVudCBieVxuICAgICAgICBoZWFsdGggY2FyZSBwcm92aWRlcnMgb3IgdHJvdWJsZSB3aXRoIHRoZSBhdXRob3JpdGllcy5cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiPlxuICAgICAgICBJbXBhY3Qgb2YgUHVibGljIEhlYWx0aCBQcm9ncmFtcyBvbiBIZWxwIFNlZWtpbmdcbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxUeXBvZ3JhcGh5PlxuICAgICAgICBCZWNhdXNlIG9mIHRoZSBjb21wbGV4IG11bHRpZmFjZXRlZCBuYXR1cmUgb2Ygc3RpZ21hIGFuZCBkaXNjcmltaW5hdGlvblxuICAgICAgICBhbmQgdGhlIHN1YnNlcXVlbnQgYmFycmllcnMgYXNzb2NpYXRlZCB3aXRoIGFjY2Vzc2luZyBjYXJlLCB0aGVcbiAgICAgICAgc29sdXRpb25zIGZvciByZWR1Y2luZyBzdGlnbWEgYW5kIGRpc2NyaW1pbmF0aW9uIGFuZCBmYWNpbGl0YXRpbmcgYWNjZXNzXG4gICAgICAgIHRvIGNhcmUgd2lsbCBuZWVkIHRvIGJlIGVxdWFsbHkgZGl2ZXJzZS5cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxUeXBvZ3JhcGh5PlxuICAgICAgICBUaGVyZSBzaG91bGQgYmUgc2VwYXJhdGUgbmF0aW9uYWwgcHJvZ3JhbXMgdG8gcmVkdWNlIHN0aWdtYSBhbmRcbiAgICAgICAgZGlzY3JpbWluYXRpb24uIEVhY2ggb2YgdGhlc2UgYW50aS1zdGlnbWEgcHJvZ3JhbXMgbmVlZCB0byBjb25zaXN0IG9mXG4gICAgICAgIG11bHRpcGxlIGNvbXBvbmVudHMgYWltZWQgYXQgc3BlY2lmaWMgdGFyZ2V0IGdyb3VwcyAoZWcsIHRoZSBtZWRpYSxcbiAgICAgICAgeW91bmcgcGVvcGxlKSBhbmQgYXQgdGhlIGdlbmVyYWwgcHVibGljLCBhbmQgb3BlcmF0ZXMgYXQgbXVsdGlwbGUgbGV2ZWxzXG4gICAgICAgIChpZSwgbmF0aW9uYWwgc29jaWFsIG1hcmtldGluZyBjYW1wYWlnbnMgYW5kIHJlZ2lvbmFsIGFjdGl2aXRpZXMpIGFuZCBhdFxuICAgICAgICB0aGUgbGV2ZWwgb2Ygc21hbGwgY29tbXVuaXR5IGdyb3VwcyBmdW5kZWQgdG8gY2Fycnkgb3V0IGxvY2FsXG4gICAgICAgIGFudGktZGlzY3JpbWluYXRpb24gd29yay5cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxUeXBvZ3JhcGh5PlxuICAgICAgICBNZW50YWwgaGVhbHRoIHByb2dyYW1zIGhhdmUgaW50ZW50aW9ucyB0byBzZWVrIGhlbHAgZm9yIGEgbWVudGFsIGlsbG5lc3NcbiAgICAgICAgYW5kIHRvIGRpc2Nsb3NlIHN1Y2ggYW4gaWxsbmVzcyB0byBmYW1pbHkgYW5kIGZyaWVuZHMsIHdoaWNoIHVuZGVybGluZXNcbiAgICAgICAgdGhlIGltcG9ydGFuY2Ugb2YgbWVudGFsIGhlYWx0aCBsaXRlcmFjeS4gVGhpcyBhcHBsaWVzIHRvIHR3byB0eXBlcyBvZlxuICAgICAgICBrbm93bGVkZ2UgbWVhc3VyZWQgYnkgdGhlIG1lbnRhbCBoZWFsdGgga25vd2xlZGdlIHNjaGVkdWxlLiBUaGUgZmlyc3QgaXNcbiAgICAgICAga25vd2xlZGdlIHRoYXQgbWlnaHQgaW5mbHVlbmNlIHN1YnNlcXVlbnQgbWVudGFsIGhlYWx0aCByZWxhdGVkXG4gICAgICAgIGF0dGl0dWRlcyBhbmQgYmVoYXZpb3JzLiBUaGUgc2Vjb25kIGlzIHdoZXRoZXIgbWFqb3IgcHN5Y2hpYXRyaWNcbiAgICAgICAgZGlzb3JkZXJzIGFyZSBjb25zaWRlcmVkIG1lbnRhbCBpbGxuZXNzZXMsIHdoaWNoIGlzIGFzc29jaWF0ZWQgd2l0aCBoZWxwXG4gICAgICAgIHNlZWtpbmcgaW50ZW50aW9ucyBmcm9tIGEgcHJpbWFyeSBjYXJlIHBoeXNpY2lhbi5cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxBcnRpY2xlSW1hZ2UgcGhvdG89e2Fub3RoZXJQaG90b30gLz5cbiAgICAgIDxUeXBvZ3JhcGh5PlxuICAgICAgICBJbnRlbnRpb25zIHRvIHNlZWsgaGVscCBmb3IgYSBtZW50YWwgaGVhbHRoIHByb2JsZW0gYXJlIGFzc29jaWF0ZWQgd2l0aFxuICAgICAgICBhdHRpdHVkZXMgb2YgdG9sZXJhbmNlIGFuZCBzdXBwb3J0IGZvciBjb21tdW5pdHkgY2FyZSwgYnV0IG5vdCB3aXRoXG4gICAgICAgIHN0aWdtYXRpemluZyBhdHRpdHVkZXMgb2YgUHJlanVkaWNlIGFuZCBleGNsdXNpb24uXG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8VHlwb2dyYXBoeT5cbiAgICAgICAgQWxzbywgaWYgc29jaWFsIG1hcmtldGluZyBjYW1wYWlnbnMgd2VyZSBlZmZlY3RpdmUgYXQgaW1wcm92aW5nXG4gICAgICAgIGtub3dsZWRnZSBhbmQgcG9zaXRpdmUgYXR0aXR1ZGVzLCB0aGV5IHdvdWxkIHJlc3VsdCBpbiBpbmNyZWFzZWRcbiAgICAgICAgaW50ZW50aW9ucyB0b3dhcmRzIGhlbHAgc2Vla2luZy5cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICA8L0FydGljbGVXcmFwcGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnRhbFN0aWdtYVxuIiwiaW1wb3J0IHsgVHlwb2dyYXBoeSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEFydGljbGVXcmFwcGVyIGZyb20gJy4vQXJ0aWNsZVdyYXBwZXInXG5pbXBvcnQgcGhvdG8gZnJvbSAnLi4vLi4vaW1hZ2VzL21lbnRhbC1zdXBwb3J0LWFydGljbGUuanBnJ1xuaW1wb3J0IFB1bGxRdW90ZSBmcm9tICcuL2NvbXBvbmVudHMvUHVsbFF1b3RlJ1xuXG5jb25zdCBNZW50YWxTdXBwb3J0ID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxBcnRpY2xlV3JhcHBlciB0aGVtZVBob3RvPXtwaG90b30+XG4gICAgICA8VHlwb2dyYXBoeT5cbiAgICAgICAgSW4gdGhlIHJlY2VudCB5ZWFycywgdGhlcmUgaGFzIGJlZW4gbW9yZSBpbmNyZWFzZSBpbiB0aGUgYWNrbm93bGVkZ2VtZW50XG4gICAgICAgIG9mIHRoZSBpbXBvcnRhbnQgcm9sZSBvZiBtZW50YWwgaGVhbHRoLiBBcyBpdCBwbGF5cyBhIGNydWNpYWwgcm9sZSBpblxuICAgICAgICBhY2hpZXZpbmcgZ2xvYmFsIGRldmVsb3BtZW50IGdvYWxzLCB3aGljaCBpcyBpbGx1c3RyYXRlZCBieSB0aGVcbiAgICAgICAgaW5jbHVzaW9uIG9mIG1lbnRhbCBoZWFsdGggaW4gdGhlIFN1c3RhaW5hYmxlIERldmVsb3BtZW50IEdvYWxzLlxuICAgICAgICBEZXByZXNzaW9uIGlzIG9uZSBvZiB0aGUgbGVhZGluZyBjYXVzZXMgYnkgZGlzYWJpbGl0eSBvZiBtZW50YWwgaGVhbHRoXG4gICAgICAgIGFuZCBmb2xsb3dlZCBieSBzdWljaWRlIGFzIHRoZSBzZWNvbmQgbGVhZGluZyBjYXVzZSBvZiBkZWF0aCBhbW9uZyB0aGVcbiAgICAgICAgcmFuZ2Ugb2YgMTXCrS0yOSB5ZWFyIG9sZHMuIFBlb3BsZSB3aXRoIHNldmVyZSBtZW50YWwgaGVhbHRoIGNvbmRpdGlvbnNcbiAgICAgICAgZGllIHByZW1hdHVyZWx5IGFzIG11Y2ggYXMgdHdvIGRlY2FkZXMgZWFybHkgZHVlIHRvIHByZXZlbnRhYmxlIHBoeXNpY2FsXG4gICAgICAgIGNvbmRpdGlvbnMuXG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8VHlwb2dyYXBoeT5cbiAgICAgICAgRGVzcGl0ZSBzb21lIHByb2dyZXNzLCBwZW9wbGUgd2l0aCBtZW50YWwgaGVhbHRoIGNvbmRpdGlvbnMgb2Z0ZW5cbiAgICAgICAgZXhwZXJpZW5jZSBzZXZlcmUgaHVtYW4gcmlnaHRzIHZpb2xhdGlvbnMsIGRpc2NyaW1pbmF0aW9uIGFuZCBzdGlnbWEuXG4gICAgICAgIE1hbnkgbWVudGFsIGhlYWx0aCBjb25kaXRpb25zIGNhbiBiZSBlZmZlY3RpdmVseSB0cmVhdGVkIGF0IHJlbGF0aXZlbHlcbiAgICAgICAgbG93IGNvc3QsIHlldCB0aGUgZ2FwIGJldHdlZW4gdGhlIHBlb3BsZSBuZWVkaW5nIGNhcmUgYW5kIHRob3NlIHdpdGhcbiAgICAgICAgYWNjZXNzIHRvIGNhcmUgcmVtYWlucyBzdWJzdGFudGlhbC4gRWZmZWN0aXZlIHRyZWF0bWVudCBjb3ZlcmFnZSByZW1haW5zXG4gICAgICAgIGV4dHJlbWVseSBsb3cuXG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8UHVsbFF1b3RlPlxuICAgICAgICBEZXNwaXRlIHNvbWUgcHJvZ3Jlc3MsIHBlb3BsZSB3aXRoIG1lbnRhbCBoZWFsdGggY29uZGl0aW9ucyBvZnRlblxuICAgICAgICBleHBlcmllbmNlIHNldmVyZSBodW1hbiByaWdodHMgdmlvbGF0aW9ucywgZGlzY3JpbWluYXRpb24gYW5kIHN0aWdtYVxuICAgICAgPC9QdWxsUXVvdGU+XG4gICAgICA8VHlwb2dyYXBoeT5cbiAgICAgICAgSW5jcmVhc2luZyBpbnZlc3RtZW50IGlzIHJlcXVpcmVkIG9uIGFsbCBmcm9udHMgZm9yIG1lbnRhbCBoZWFsdGhcbiAgICAgICAgYXdhcmVuZXNzIGFuZCB0byBpbmNyZWFzZSB1bmRlcnN0YW5kaW5nIGFuZCBhbHNvIHRvIHJlZHVjZSBzdGlnbWEuIE9uXG4gICAgICAgIHRoZSBvdGhlciBzaWRlIGVmZm9ydCBpcyBuZWVkZWQgdG8gaW5jcmVhc2UgYWNjZXNzIHRvIHF1YWxpdHkgbWVudGFsXG4gICAgICAgIGhlYWx0aCBjYXJlIGFuZCBlZmZlY3RpdmUgdHJlYXRtZW50IGFuZCB0aGUgcmVzZWFyY2ggdG8gaWRlbnRpZnkgbmV3XG4gICAgICAgIHRyZWF0bWVudCBhbmQgaW1wcm92ZSBleGlzdGluZyB0cmVhdG1lbnQgZm9yIGFsbCBtZW50YWwgZGlzb3JkZXJzLiBJblxuICAgICAgICAyMDE5LCBXb3JsZCBIZWFsdGggT3JnYW5pemF0aW9uIChXSE8pIGxhdW5jaGVkIHRoZSBXSE8gU3BlY2lhbFxuICAgICAgICBJbml0aWF0aXZlIGZvciBNZW50YWwgSGVhbHRoICgyMDE5LTIwMjMpOiBVbml2ZXJzYWwgSGVhbHRoIENvdmVyYWdlIGZvclxuICAgICAgICBNZW50YWwgSGVhbHRoIHRvIGVuc3VyZSBhY2Nlc3MgdG8gcXVhbGl0eSBhbmQgYWZmb3JkYWJsZSBjYXJlIGZvciBtZW50YWxcbiAgICAgICAgaGVhbHRoIGNvbmRpdGlvbnMgaW4gMTIgcHJpb3JpdHkgY291bnRyaWVzIHRvIDEwMCBtaWxsaW9uIG1vcmUgcGVvcGxlLlxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPFR5cG9ncmFwaHk+XG4gICAgICAgIE1lbnRhbCBoZWFsdGggY29uZGl0aW9ucyBhcmUgaW5jcmVhc2luZyB3b3JsZHdpZGUuIE1haW5seSBzaW1wbHkgYmVjYXVzZVxuICAgICAgICBvZiBkZW1vZ3JhcGhpYyBjaGFuZ2VzLCB0aGVyZSBoYXMgYmVlbiBhcmlzZSB0byAxMyUgaW4gbWVudGFsIGhlYWx0aFxuICAgICAgICBjb25kaXRpb25zIGFuZCBzdWJzdGFuY2VzIHVzZSBkaXNvcmRlcnMgdGhlIGxhc3QgZGVjYWRlICgyMDE3KS4gQXJvdW5kXG4gICAgICAgIDIwJSBvZiB0aGUgd29ybGTigJlzIGNoaWxkcmVuIGFuZCBhZG9sZXNjZW50cyBoYXZlIGEgbWVudGFsIGhlYWx0aFxuICAgICAgICBjb25kaXRpb24sIHdpdGggc3VpY2lkZSBiZWluZyB0aGUgc2Vjb25kIGxlYWRpbmcgY2F1c2VzIG9mIGRlYXRoIGFtb25nXG4gICAgICAgIDE1LTI5IHllYXIgb2xkcy4gQXBwcm94aW1hdGVseSBvbmUgaW4gZml2ZSBwZW9wbGUgaW4gcG9zdC1jb25mbGljdFxuICAgICAgICBzZXR0aW5ncyBoYXZlIGEgbWVudGFsIGhlYWx0aCBjb25kaXRpb24uXG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8VHlwb2dyYXBoeT5cbiAgICAgICAgTWVudGFsIGhlYWx0aCBjb25kaXRpb25zIGNhbiBoYXZlIHN1YnN0YW50aWFsIGVmZmVjdHMgaW4gdGhlIGxpZmUsIHN1Y2hcbiAgICAgICAgYXMgc2Nob29sIG9yIHBsYWNlIG9mIHdvcmsgcGVyZm9ybWFuY2UsIHJlbGF0aW9uc2hpcCB3aXRoIGZhbWlseSBhbmRcbiAgICAgICAgZnJpZW5kcyBhbmQgYWxzbyBhYmlsaXR5IHRvIHBhcnRpY2lwYXRlIGluIHRoZSBjb21tdW5pdHkuIFRoZSB0d28gbW9zdFxuICAgICAgICBjb21tb24gbWVudGFsIGhlYWx0aCBjb25kaXRpb25zIGluY2x1ZGUgZGVwcmVzc2lvbiBhbmQgYW54aWV0eS5cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxUeXBvZ3JhcGh5PlxuICAgICAgICBXSE8gd29ya3Mgd2l0aCBNZW1iZXIgU3RhdGVzIGFuZCBwYXJ0bmVycyB0byBpbXByb3ZlIHRoZSBtZW50YWwgaGVhbHRoXG4gICAgICAgIG9mIGluZGl2aWR1YWwgYW5kIHNvY2lldHkgYXQgbGFyZ2UuIFRoaXMgaW5jbHVkZXMgdGhlIHByb21vdGlvbiBvZlxuICAgICAgICBtZW50YWwgaGVhbHRoIHdlbGwtYmVpbmcsIHRoZSBwcmV2ZW50aW9uIG9mIG1lbnRhbCBoZWFsdGggZGlzb3JkZXJzIGFuZFxuICAgICAgICBlZmZvcnQgdG8gaW5jcmVhc2UgYWNjZXNzIHRvIHF1YWxpdHkgbWVudGFsIGhlYWx0aCBjYXJlIHRoYXQgcmVzcGVjdHNcbiAgICAgICAgcGVvcGxl4oCZcyBodW1hbiByaWdodHMuXG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8VHlwb2dyYXBoeT5cbiAgICAgICAgV0hP4oCZcyBtZW50YWwgaGVhbHRoIGFjdGl2aXRpZXMgY292ZXIgbm9ybWF0aXZlIGFjdGl2aXRpZXMgYW5kIHRoZVxuICAgICAgICBjb3VudHJ5IHN1cHBvcnQgYWN0aXZpdGllcy4gV0hPIGhhcyBoZWxwZWQgYW5kIG9mZmVyIG1lbnRhbCBoZWFsdGggY2FyZVxuICAgICAgICBpbiBtb3JlIHRoYW4gMTEwIGNvdW50cmllcyBhbmQgaXMgYWN0aXZlIGluIHRoZSBmb2xsb3dpbmcgYXJlYXM6XG4gICAgICAgIGludGVncmF0aW9uIGluIGdlbmVyYWwgaGVhbHRoIGNhcmUgKHRocm91Z2ggdGhlIE1lbnRhbCBIZWFsdGggR2FwIEFjdGlvblxuICAgICAgICBQcm9ncmFtbWUsIG1oR0FQKSBhbmQgaW4gZGlzZWFzZSBvciB0b3BpYyBzcGVjaWZpYyBQcm9ncmFtbWUgc3VjaCBhcmVcbiAgICAgICAgdGhvc2UgZm9yIEhJViwgdHViZXJjdWxvc2lzIGFuZCBnZW5kZXItYmFzZWQgdmlvbGVuY2U7IHN1aWNpZGVcbiAgICAgICAgcHJldmVudGlvbiwgd29ya2ZvcmNlIGRldmVsb3BtZW50IGZvciBtZW50YWwgaGVhbHRoLCBwcm9tb3Rpb24gb2YgdGhlXG4gICAgICAgIHF1YWxpdHkgb2YgY2FyZSBhbmQgdGhlIHJpZ2h0cyBvZiB0aGUgcGVvcGxlIHJlY2VpdmluZyBjYXJlIChRdWFsaXR5XG4gICAgICAgIFJpZ2h0cyk7IG1lbnRhbCBoZWFsdGggcG9saWN5IGFuZCBsZWdpc2xhdGlvbiAsIG1lbnRhbCBoZWFsdGggYW5kXG4gICAgICAgIHBzeWNob3NvY2lhbCBzdXBwb3J0IGluIGh1bWFuaXRhcmlhbiBlbWVyZ2VuY2llcyA7IGRldmVsb3BpbmcgYW5kXG4gICAgICAgIHRlc3Rpbmcgb2YgaW5ub3ZhdGl2ZSBwc3ljaG9sb2dpY2FsIGludGVydmVudGlvbnMgaW5jbHVkaW5nIGRpZ2l0YWxcbiAgICAgICAgaW50ZXJ2ZW50aW9ucyA7IG1lbnRhbCBoZWFsdGggaW4gdGhlIHdvcmsgcGxhY2UgLCBtZW50YWwgaGVhbHRoXG4gICAgICAgIGVjb25vbWljcyAsIHRoZSBtZW50YWwgaGVhbHRoIG9mIGNoaWxkcmVuIGFuZCBhZG9sZXNjZW50cyBhbmQgbWVudGFsXG4gICAgICAgIGhlYWx0aCBwcm9tb3Rpb24uXG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgPC9BcnRpY2xlV3JhcHBlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNZW50YWxTdXBwb3J0XG4iLCJpbXBvcnQgeyBUeXBvZ3JhcGh5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQXJ0aWNsZVdyYXBwZXIgZnJvbSAnLi9BcnRpY2xlV3JhcHBlcidcbmltcG9ydCBwaG90byBmcm9tICcuLi8uLi9pbWFnZXMvbW9vZC1hcnRpY2xlLmpwZydcbmltcG9ydCBQdWxsUXVvdGUgZnJvbSAnLi9jb21wb25lbnRzL1B1bGxRdW90ZSdcblxuY29uc3QgTW9vZERpc29yZGVyID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxBcnRpY2xlV3JhcHBlciB0aGVtZVBob3RvPXtwaG90b30+XG4gICAgICA8VHlwb2dyYXBoeT5cbiAgICAgICAgTW9vZHMgYXJlIHRoZSBlbW90aW9ucyB0aGF0IGFmZmVjdCBwZW9wbGUgZWFjaCBhbmQgZXZlcnkgZGF5LCBzb21ldGltZXNcbiAgICAgICAgcGVvcGxlIGFyZSBzYWQgYW5kIG90aGVyIHRpbWUgdGhleSBhcmUgaGFwcHkuIFBlb3BsZSBtYXkgYmUgc2FkIGFuZFxuICAgICAgICBoYXBweSBpbiB0aGUgc2FtZSBkYXksIHNvbWV0aW1lcyBwZW9wbGXigJlzIG1vb2RzIGNhbiBnZXQgc3R1Y2sgb24gc2FkLlxuICAgICAgICBUaGUgbW9vZHMgbWF5IGNoYW5nZSBhIGxvdCBvciBiZWNvbWUgZXh0cmVtZSwgd2hlbiB0aGlzIGhhcHBlbnMgaXRcbiAgICAgICAgYWZmZWN0IHBlb3BsZeKAmXMgbGl2ZXMuIEFsbCB0aGlzIGlzIGNhdXNlZCBieSBhIG1lbnRhbCBpbGxuZXNzIGNhbGxlZFxuICAgICAgICBtb29kIGRpc29yZGVycy5cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxUeXBvZ3JhcGh5PlxuICAgICAgICBNb29kIGRpc29yZGVycyBhcmUgYSBncm91cCBvZiBtZW50YWwgaWxsbmVzc2VzIHRoYXQgYWZmZWN0IGhvdyB5b3UgZmVlbFxuICAgICAgICBhbmQgdGhpbmsgYWJvdXQgeW91cnNlbGYsIG90aGVyIHBlb3BsZSBhbmQgbGlmZSBpbiBnZW5lcmFsLiBUaGV5IGFyZVxuICAgICAgICBzb21lIGRpZmZlcmVudCB0eXBlcyBvZiBtb29kIGRpc29yZGVycyB3aGljaCBpbmNsdWRlOiBkZXByZXNzaW9uLFxuICAgICAgICBkeXN0aHltaWMgZGlzb3JkZXIgYW5kIGJpcG9sYXIgZGlzb3JkZXIuXG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIj5EZXByZXNzaW9uPC9UeXBvZ3JhcGh5PlxuICAgICAgPFR5cG9ncmFwaHk+XG4gICAgICAgIFRoZXNlIGFyZSBmZWVsaW5ncyB0aGF0IGxlYXZlcyBzb21lb25lIHNhZCBvciBkZXByZXNzZWQsIHNvbWUgcGVvcGxlXG4gICAgICAgIGV4cGVyaWVuY2UgZGVwcmVzc2lvbiBhcyBmZWVsaW5nIG9yIGhhdmluZyBubyBmZWVsaW5ncy4gRGVwcmVzc2lvbiBjYW5cbiAgICAgICAgbWFrZSBvbmUgZmVlbCBpcnJpdGFibGUsIGhvcGVsZXNzIGFuZCBndWlsdHkuIFRoZXJlIGFyZSBtYW55IHBlb3BsZSB3aG9cbiAgICAgICAgYXJlIGxpdmluZyB3aXRoIGRlcHJlc3Npb24gd2hvIGxvc2UgaW50ZXJlc3QgaW4gdGhpbmdzIHRoZXkgb2Z0ZW5cbiAgICAgICAgaXNvbGF0ZSB0aGVtc2VsdmVzIGZyb20gZmFtaWx5IGFuZCBmcmllbmRzLiBEZXByZXNzaW9uIGNhbiBzb21ldGltZXNcbiAgICAgICAgYWZmZWN0IG1vcmUgdGhhbiBvbmXigJlzIG1vb2QsIG9uZSBtaWdodCBoYXZlIGhhcmQgdGltZSBjb25jZW50cmF0aW5nIG9yXG4gICAgICAgIHJlbWVtYmVyaW5nLiBTb21lIHBlb3BsZSB3aGVuIGRlcHJlc3NlZCBjYW4gZWF0IG1vcmUgdGhhbiB1c3VhbCBhbmRcbiAgICAgICAgb3RoZXJzIGNhbiBvdmVyc2xlZXAgd2hlbiBkZXByZXNzZWQuIERlcHJlc3Npb24gY2FuIG1ha2Ugb25lIGZlZWwgdGlyZWRcbiAgICAgICAgYWxsIHRoZSB0aW1lIGhlbmNlIG5vdCByZWFkeSB0byBkbyBhbnl0aGluZy5cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxQdWxsUXVvdGU+XG4gICAgICAgIFRoZXNlIGFyZSBmZWVsaW5ncyB0aGF0IGxlYXZlcyBzb21lb25lIHNhZCBvciBkZXByZXNzZWQsIHNvbWUgcGVvcGxlXG4gICAgICAgIGV4cGVyaWVuY2UgZGVwcmVzc2lvbiBhcyBmZWVsaW5nIG9yIGhhdmluZyBubyBmZWVsaW5ncy4gRGVwcmVzc2lvbiBjYW5cbiAgICAgICAgbWFrZSBvbmUgZmVlbCBpcnJpdGFibGUsIGhvcGVsZXNzIGFuZCBndWlsdHlcbiAgICAgIDwvUHVsbFF1b3RlPlxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCI+U2Vhc29uYWwgYWZmZWN0aXZlIGRpc29yZGVyPC9UeXBvZ3JhcGh5PlxuICAgICAgPFR5cG9ncmFwaHk+XG4gICAgICAgIFRoaXMgaXMgYSB0eXBlIG9mIGRlcHJlc3Npb24gdGhhdCBpcyBhZmZlY3RlZCBieSB0aGUgc2Vhc29ucy4gSXQgbW9zdGx5XG4gICAgICAgIGFmZmVjdHMgdGhlIHBlb3BsZSBkdXJpbmcgd2ludGVyIG1vbnRocywgd2hlbiB0aGVyZSBpcyBsZXNzIGRheWxpZ2h0LlxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCI+UG9zdHBhcnR1bSBkZXByZXNzaW9uPC9UeXBvZ3JhcGh5PlxuICAgICAgPFR5cG9ncmFwaHk+XG4gICAgICAgIFRoaXMgaXMgYSB0eXBlIG9mIGRlcHJlc3Npb24gdGhhdCBhZmZlY3QgbW9zdGx5IG1vdGhlcnMgYWZ0ZXIgdGhleSBnaXZlXG4gICAgICAgIGJpcnRoLiBJdCBpcyBicm91Z2h0IG1vc3RseSBieSBkaWZmZXJlbnQgYmlvbG9naWNhbCBjaGFuZ2VzIGFzIHdlbGwgYXNcbiAgICAgICAgdGhlIHNvY2lhbCBhbmQgZW1vdGlvbmFsIGNoYW5nZXMgYXMgd2VsbCBhcyBzb2NpYWwgYW5kIGVtb3Rpb25hbCBjaGFuZ2VzXG4gICAgICAgIGluIHBhcmVudHPigJkgbGl2ZXMuXG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIj5CaXBvbGFyIGRpc29yZGVyPC9UeXBvZ3JhcGh5PlxuICAgICAgPFR5cG9ncmFwaHk+XG4gICAgICAgIFRoaXMgdHlwZSBvZiBtZW50YWwgaWxsbmVzcyBoYXMgdGhyZWUgZGlmZmVyZW50IHBhcnRzOiBkZXByZXNzaW9uLCBtYW5pYVxuICAgICAgICBhbmQgbm9ybWFsIGZlZWxpbmdzLiBUaGUgZGVwcmVzc2lvbiBpbiB0aGlzIGlsbG5lc3MgaXMgbm90IGRpZmZlcmVudFxuICAgICAgICBmcm9tIG5vcm1hbCBmZWVsaW5ncy4gU29tZSBwZW9wbGUgZmVlbCBkaWZmZXJlbnQsIHRoZXJlIGFyZSBzb21lIHdob1xuICAgICAgICBmZWVsIHZlcnkgaGFwcHkgYW5kIG90aGVycyBmZWVsIHZlcnkgYW5ncnkgb24gZXBpc29kZSBvZiBtYW5pYS4gVGhlXG4gICAgICAgIGNvbW1vbiBzeW1wdG9tcyBvZiBtYW55IGFyZTsgZmVlbGluZyB2ZXJ5IHBvd2VyZnVsLCBub3QgbmVlZGluZyBtdWNoXG4gICAgICAgIHNsZWVwaW5nIGFuZCBoYXZpbmcgcmFjaW5nIHRob3VnaHRzLiBEdXJpbmcgdGhlIGVwaXNvZGUgb2YgbWFuaWEsIHlvdVxuICAgICAgICB3aWxsIGZpbmQgcGVvcGxlIGRvaW5nIHRoaW5ncyB0aGF0IHRoZXkgd291bGRu4oCZdCBkbyBpbiBub3JtYWwgY29uZGl0aW9uLFxuICAgICAgICBmb3IgaW5zdGFuY2UsIHlvdSB3aWxsIGZpbmQgd29tZW4gZG9pbmcgdmVyeSBleHBlbnNpdmUgc2hvcHBpbmcgc3ByZWVzXG4gICAgICAgIHRoZXkgY2FuIG5vdCBhZmZvcmQuIFlvdSB3aWxsIGFsc28gZmluZCBzb21lIHlvdXRocyBoYXZpbmcgcmlza3kgc2V4IG9yXG4gICAgICAgIHVzZSBhbGNvaG9sIGFuZCBvdGhlciBzdWJzdGFuY2VzIHRoYW4gdXN1YWwuIFRoaXMgbWFuaWEgbWF5IHNvbWV0aW1lc1xuICAgICAgICBhcHBlYXIgZGlmZmVyZW50IGluIGVhY2ggcGVyc29uIGRlcGVuZGluZyBvbiBob3cgbG9uZyB0aGlzIG1hbmlhIGFuZFxuICAgICAgICBkZXByZXNzaW9uIGVwaXNvZGUgbGFzdCwgaG93IHNldmVyZSB0aGV5IGFyZSwgaG93IHF1aWNrbHkgYSBwZXJzb27igJlzXG4gICAgICAgIG1vb2QgY2hhbmdlcyBhbmQgaG93IGxvbmcgYSBwZXJzb24gYSBwZXJzb24gaGFzIG5vcm1hbCBtb29kIGluIGJldHdlZW4uXG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIj5EeXN0aHltaWMgZGlzb3JkZXI8L1R5cG9ncmFwaHk+XG4gICAgICA8VHlwb2dyYXBoeT5cbiAgICAgICAgVGhpcyBpcyB0aGlzIHNpbWlsYXIgdG8gZGVwcmVzc2lvbiwgdGhlIG9ubHkgZGlmZmVyZW5jZSBpcyB0aGF0IHRoZVxuICAgICAgICBzeW1wdG9tcyBvZiBkeXN0aHltaWMgZGlzb3JkZXIgYXJlIG1pbGRlciBhbmQgYWxzbyBsYXN0IGZvciBhIGxvbmdlclxuICAgICAgICBwZXJpb2QgdGhhbiB0aGF0IG9mIG5vcm1hbCBkZXByZXNzaW9uLlxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+UHN5Y2hvc2lzPC9UeXBvZ3JhcGh5PlxuICAgICAgPFR5cG9ncmFwaHk+XG4gICAgICAgIFNvbWUgcGVvcGxlIGV4cGVyaWVuY2UgcHN5Y2hvc2lzIGR1cmluZyBhbiBlcGlzb2RlIG9mIHNldmVyZSBkZXByZXNzaW9uXG4gICAgICAgIG9yIG1hbmlhLiBUaGVyZSBhcmUgdHdvIHR5cGVzIG9mIHBzeWNob3NpcyB3aGljaCBhcmU6XG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5EZWx1c2lvbnM8L1R5cG9ncmFwaHk+XG4gICAgICA8VHlwb2dyYXBoeT5cbiAgICAgICAgVGhlc2UgYXJlIHN0cm9uZyBmZWVsaW5ncyB3aGljaCBhcmUgbm90IHRydWUsIHRoZXNlIGFyZSBiZWxpZWYgYXJlIGxpa2UsXG4gICAgICAgIHNvbWVvbmUgaGFzIHNwZWNpYWwgcG93ZXJzLiBUaGlzIGlzIHdoZXJlIHBlb3BsZSBiZWxpZXZlIHRoYXQgdGhleSBoYXZlXG4gICAgICAgIHNwZWNpYWwgcG93ZXJzIHRoYXQgY2FuIGVuYWJsZSB0aGVtIGRvIGV4dHJhIG9yZGluYXJ5IHRoaW5ncyBidXQgaXQgaXNcbiAgICAgICAgbm90IHRydWUuXG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5IYWxsdWNpbmF0aW9uczwvVHlwb2dyYXBoeT5cbiAgICAgIDxUeXBvZ3JhcGh5PlxuICAgICAgICB0aGVzZSBhcmUgdGhpbmdzIHRoYXQgcGVvcGxlIHNlbnNlIHdoaWNoIGFyZSBub3QgcmVhbC4gTW9zdGx5IHBlb3BsZSB3aG9cbiAgICAgICAgaGF2ZSBiZWVuIHVzaW5nIGRydWdzIGZvciBhIGxvbmcgdGltZSBtYXkgZXhwZXJpZW5jZSB0aGlzLCB3aGVyZSB0aGV5XG4gICAgICAgIHNlbnNlIHRoaW5ncyB0aGF0IGRvIG5vdCBleGlzdCBidXQgYWZmZWN0IHRoZW0uIEluZGl2aWR1YWxzIHdobyBoYXZlXG4gICAgICAgIGJlZW4gdXNpbmcgbWFyaWp1YW5hIGhhdmUgZ290IHRoaXMgcHJvYmxlbSB3aGVyZSB0aGV5IGZlYXIgdGhpbmdzIHRoYXRcbiAgICAgICAgYXJlIG5vdCByZWFsIHdoaWNoIHRyb3VibGVzIHRoZW0uXG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIj5UcmVhdG1lbnRzPC9UeXBvZ3JhcGh5PlxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+TWVkaWNhdGlvbjwvVHlwb2dyYXBoeT5cbiAgICAgIDxUeXBvZ3JhcGh5PlxuICAgICAgICBEZXByZXNzaW9uIGlzIHVzdWFsbHkgdHJlYXRlZCB3aXRoIGEgZ3JvdXAgb2YgZGVkaWNhdGlvbnMga25vd24gYXNcbiAgICAgICAgYW50aWRlcHJlc3NhbnQgYW5kIGJpcG9sYXIgZGlzb3JkZXIgaXMgdHJlYXRlZCB3aXRoIGEgZ3JvdXAgb2ZcbiAgICAgICAgbWVkaWNhdGlvbiBrbm93biBhcyBzdGFiaWxpemVycy5cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPkxpZ2h0IHRoZXJhcHk8L1R5cG9ncmFwaHk+XG4gICAgICA8VHlwb2dyYXBoeT5cbiAgICAgICAgVGhpcyBpcyBtb3N0bHkgaGVscGZ1bCB0byBwZW9wbGUgd2hvIGV4cGVyaWVuY2Ugc2FkIGZlZWxpbmdzLiBUaGlzXG4gICAgICAgIG1ldGhvZCBvZiB0cmVhdG1lbnQgbWF5IG5vdCBmYXZvdXIgZXZlcnlvbmUgYWZmZWN0ZWQgaGVuY2UgZG9jdG9y4oCZc1xuICAgICAgICBhZHZpY2UgaXMgZW5jb3VyYWdlIGJlZm9yZSBnb2luZyBmb3IgaXQuIEl0IHVzZXMgc3BlY2lhbCBraW5kIG9mIGxpZ2h0XG4gICAgICAgIHdoaWNoIGlzIG5vcm1hbGx5IG11Y2ggYnJpZ2h0ZXIgdGhhbiBpbmRvb3IgbGlnaHRpbmcuXG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5Db3Vuc2VsbGluZzwvVHlwb2dyYXBoeT5cbiAgICAgIDxUeXBvZ3JhcGh5PlxuICAgICAgICBDb2duaXRpdmUgYmVoYXZpb3JhbCB0aGVyYXB5IGFuZCBpbnRlcnBlcnNvbmFsIHRoZXJhcHkgYXJlIHRoZSBtb3N0XG4gICAgICAgIGNvbW1vbiBjb3Vuc2VsbGluZyBmb3IgbW9vZCBkaXNvcmRlcnMuIENvZ25pdGl2ZSBiZWhhdmlvcmFsIHRoZXJhcHlcbiAgICAgICAgaGVscHMgaW4gdGVhY2hpbmcgcHJvYmxlbS1zb2x2aW5nIHNraWxscyB3aGljaCBoZWxwcyBpbiBwcmV2ZW50aW5nXG4gICAgICAgIHN5bXB0b21zLlxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPFR5cG9ncmFwaHk+XG4gICAgICAgIEludGVycGVyc29uYWwgdGhlcmFweSB0ZWFjaGVzIHRoZSB2aWN0aW0gaG93IHRvIGltcHJvdmUgaW50ZXJhY3Rpb24gd2l0aFxuICAgICAgICBvdGhlciBwZW9wbGUgZXNwZWNpYWxseSB3aGVuIG9uZSBpcyBkZXByZXNzZWQuXG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5FbGVjdHJvY29udnVsc2l2ZSB0aGVyYXB5PC9UeXBvZ3JhcGh5PlxuICAgICAgPFR5cG9ncmFwaHk+XG4gICAgICAgIFRoaXMgbW9zdGx5IGlzIG9mIGhlbHAgdG8gcGVvcGxlIHdobyBleHBlcmllbmNlIHNldmVyZSBkZXByZXNzaW9uIHdoZW5cbiAgICAgICAgb3RoZXIgdHJlYXRtZW50IGxpa2UgY291bnNlbGxpbmcgZmFpbCB0byBoZWxwLiBUaGlzIGlzIGRvbmUgYnkgcGFzc2luZ1xuICAgICAgICBhbiBlbGVjdHJpY2FsIGN1cnJlbnQgdGhyb3VnaCBvbmXigJlzIGJyYWluIGZvciBhIGZldyBzZWNvbmRzIHdoaWxlIGhlL3NoZVxuICAgICAgICBpcyB1bmRlciBnZW5lcmFsIGFuYWVzdGhlc2lhLlxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+U2VsZi1tYW5hZ2VtZW50PC9UeXBvZ3JhcGh5PlxuICAgICAgPFR5cG9ncmFwaHk+XG4gICAgICAgIFRoaXMgaW52b2x2ZXMgdGhpbmdzIHRoYXQgb25lIGNhbiBkbyBpbiBoaXMvaGVyIG93biB0byBrZWVwIHRoZSBmZWVsaW5nc1xuICAgICAgICBiZXR0ZXIgd2l0aG91dCBuZWNlc3NhcmlseSBnb2luZyB0byB0aGUgaG9zcGl0YWwuIFRoZXkgaW5jbHVkZSByZWd1bGFyXG4gICAgICAgIGV4ZXJjaXNlcywgcHJvcGVyIGVhdGluZywgc2xlZXBpbmcgZW5vdWdoIHRpbWUsIG1hbmFnaW5nIHN0cmVzcyxcbiAgICAgICAgc3BlbmRpbmcgdGltZSB3aXRoIGZyaWVuZHMgYW5kIGZhbWlseSBhbW9uZyBvdGhlcnMuXG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8VHlwb2dyYXBoeT5cbiAgICAgICAgU3Bpcml0dWFsaXR5IGFuZCBtb25pdG9yaW5nIHVzZSBvZiBtYXJpanVhbmEsIGFsY29ob2wgYW5kIG90aGVyIHJlbGF0ZWRcbiAgICAgICAgc3Vic3RhbmNlcyBjYW4gaGVscCBtYW5hZ2UgbW9vZCBwcm9ibGVtLlxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgIDwvQXJ0aWNsZVdyYXBwZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9vZERpc29yZGVyXG4iLCJpbXBvcnQgeyBUeXBvZ3JhcGh5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQXJ0aWNsZVdyYXBwZXIgZnJvbSAnLi9BcnRpY2xlV3JhcHBlcidcbmltcG9ydCBwaG90byBmcm9tICcuLi8uLi9pbWFnZXMvbWVudGFsLXByb2JsZW1zLWFydGljbGUuanBnJ1xuaW1wb3J0IFB1bGxRdW90ZSBmcm9tICcuL2NvbXBvbmVudHMvUHVsbFF1b3RlJ1xuXG5jb25zdCBPdmVydmlld01lbnRhbCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8QXJ0aWNsZVdyYXBwZXIgdGhlbWVQaG90bz17cGhvdG99PlxuICAgICAgPFR5cG9ncmFwaHk+XG4gICAgICAgIE1lbnRhbCBoZWFsdGggY2FuIGhhdmUgdmFyaWFuY2VzIGluIGRlZmluaXRpb25zIGRlcGVuZGluZyBvbiBhblxuICAgICAgICBpbmRpdmlkdWFs4oCZcyB1bmRlcnN0YW5kaW5nIG9mIHdoYXQgTWVudGFsIGhlYWx0aCByZWFsbHkgaXMuIEhvd2V2ZXIsIHRoZVxuICAgICAgICBtb3N0IGFncmVlYWJsZSBkZWZpbml0aW9uIG9mIG1lbnRhbCBoZWFsdGggaXMg4oCcYSBzdGF0ZSBvZiB3ZWxsLWJlaW5nIGluXG4gICAgICAgIHdoaWNoIHRoZSBpbmRpdmlkdWFsIHJlYWxpemVzIGhpcyBvciBoZXIgb3duIGFiaWxpdGllcywgY2FuIGNvcGUgd2l0aFxuICAgICAgICB0aGUgbm9ybWFsIHN0cmVzc2VzIG9mIGxpZmUsIGNhbiB3b3JrIHByb2R1Y3RpdmVseSBhbmQgZnJ1aXRmdWxseSwgYW5kXG4gICAgICAgIGlzIGFibGUgdG8gbWFrZSBhIGNvbnRyaWJ1dGlvbiB0byBoaXMgb3IgaGVyIGNvbW11bml0eS5cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxUeXBvZ3JhcGh5PlxuICAgICAgICBUaGVyZSBhcmUgc2V2ZXJhbCB0eXBlcyBvZiBtZW50YWwgZGlzb3JkZXIgdGhhdCBpbmZsdWVuY2XigJlzIGFuXG4gICAgICAgIGluZGl2aWR1YWzigJlzIGFiaWxpdHkgdG8gbWF4aW1pemUgaGlzIG9yIGhlciBhYmlsaXR5IHRvIG1heGltaXplIGhpcyBvclxuICAgICAgICBoZXIgcHJvZHVjdGl2aXR5LiBUaGV5IHJhbmdlIGZyb20gRGVwcmVzc2lvbiB0byBEZW1lbnRpYS4gSW4gdGhpc1xuICAgICAgICBhcnRpY2xlIHdlIHdpbGwgaG93ZXZlciBmb2N1cyBtb3JlIG9uIEJpcG9sYXIgZGlzb3JkZXIuXG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8VHlwb2dyYXBoeT5cbiAgICAgICAgQmlwb2xhciBEaXNvcmRlciwgYWxzbyByZWZlcnJlZCB0byBhcyBNYW5pYyBkZXByZXNzaW9uIGNhdXNlcyBleHRyZW1lXG4gICAgICAgIG1vb2Qgc3dpbmdzIHRoYXQgaW5jbHVkZSBlbW90aW9uYWwgaGlnaHMgKG1hbmlhIG9yIGh5cG9tYW5pYSkgYW5kIGxvd3NcbiAgICAgICAgKGRlcHJlc3Npb24pLiBQZW9wbGUgd2hvIGFyZSBkZXByZXNzZWQgdXN1YWxseSBmZWVsIHNhZCBhbmQvb3IgaG9wZWxlc3NcbiAgICAgICAgYW5kIGxvc2UgaW50ZXJlc3QgaW4gbW9zdCBhY3Rpdml0aWVzLiBGb3IgaW5zdGFuY2UsIGEgcGVyc29uIHdob1xuICAgICAgICBmcmVxdWVudGx5IGVuam95ZWQgaGFuZ2luZyBvdXQgd2l0aCBoaXMgYnVkZGllcyBiZWNvbWVzIGxlc3MgaW50ZXJlc3RlZFxuICAgICAgICBhbGwgb2YgYSBzdWRkZW4gYW5kIGNvbmZpZGVzIGhpbXNlbGYgd2l0aGluIGEgcGFydGljdWxhciBlbnZpcm9ubWVudC5cbiAgICAgICAgV2hlbiBvbmXigJlzIG1vb2Qgc2hpZnRzIHRvIG1hbmlhIG9yIGh5cG9tYW5pYSwgb25lIGZlZWxzIGludGVuc2VseVxuICAgICAgICBleGNpdGVkIGFuZCBoYXBweSwgZW5lcmdldGljIG9yIHVudXN1YWxseSBpcnJpdGFibGUuIFRoZXNlIG1vb2Qgc3dpbmdzXG4gICAgICAgIGNhbiBhZmZlY3Qgc2xlZXAsIGVuZXJneSwgYWN0aXZpdHksIGp1ZGdlbWVudCwgYmVoYXZpb3IgYW5kIHRoZSBhYmlsaXR5XG4gICAgICAgIHRvIGNsZWFybHkgbWFrZSBqdWRnbWVudHMuXG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8VHlwb2dyYXBoeT5cbiAgICAgICAgQSBwZXJzb24gc3VmZmVyaW5nIGZyb20gQmlwb2xhciBEaXNvcmRlciB0ZW5kcyB0byBleHBlcmllbmNlIGVwaXNvZGVzIG9mXG4gICAgICAgIG1vb2Qgc3dpbmdzIGZvciBhIHZlcnkgbG9uZyB0aW1lIG9yIHJhcmVseSBpbiBhIHllYXIuIFNvbWUgcGVvcGxlIHdpbGxcbiAgICAgICAgZXhwZXJpZW5jZSBzb21lIGVtb3Rpb25hbCBzeW1wdG9tcyBiZXR3ZWVuIGVwaXNvZGVzIHdoaWxlIG90aGVycyB3b27igJl0XG4gICAgICAgIGV4cGVyaWVuY2UgYW55LiBZZXMsIGJpcG9sYXIgZGlzb3JkZXIgaXMgYSBsaWZlbG9uZyBjb25kaXRpb24gYnV0IG9uZVxuICAgICAgICBjYW4gbWFuYWdlIGhpcyBvciBoZXIgbW9vZCBzd2luZ3MgYW5kIG90aGVyIHN5bXB0b21zIGJ5IGZvbGxvd2luZyBhXG4gICAgICAgIHRyZWF0bWVudCBwbGFuLCB3aGljaCBpbiBtb3N0IGNhc2VzIGlzIHRyZWF0ZWQgd2l0aCBtZWRpY2F0aW9ucyBhbmRcbiAgICAgICAgcHN5Y2hvbG9naWNhbCBjb3Vuc2VsbGluZyAocHN5Y2hvdGhlcmFweSkuXG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5TeW1wdG9tcyBvZiBCaXBvbGFyIGRpc29yZGVyczwvVHlwb2dyYXBoeT5cbiAgICAgIDxUeXBvZ3JhcGh5PlxuICAgICAgICBUaGV5IG1heSBpbmNsdWRlIG1hbmlhIG9yIGh5cG9tYW5pYSBhbmQgZGVwcmVzc2lvbiwgYW5kIGJlaGF2aW9yLFxuICAgICAgICByZXN1bHRpbmcgaW4gbm90YWJsZSBkaXN0cmVzcyBhbmQgZGlmZmljdWx0aWVzIGluIGxpZmUuXG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIj5NYW5pYSBhbmQgaHlwb21hbmlhPC9UeXBvZ3JhcGh5PlxuICAgICAgPFR5cG9ncmFwaHk+XG4gICAgICAgIFRoZXkgYXJlIHR3byBkaXN0aW5jdCB0eXBlcyBvZiBlcGlzb2RlcywgKG1hbmlhIGlzIG1vcmUgc2V2ZXJlIHRoYW5cbiAgICAgICAgaHlwb21hbmlhIGFuZCBjYXVzZXMgbW9yZSBub3RpY2VhYmxlIHByb2JsZW1zIGF0IHdvcmssIHNvY2lhbCBhY3Rpdml0aWVzXG4gICAgICAgIGFzIHdlbGwgYXMgaW4gcmVsYXRpb25zaGlwcykuIFRoZXkgYm90aCBoYXZlIHRoZSBzYW1lIHN5bXB0b21zIHRoYXRcbiAgICAgICAgaW5jbHVkZTogRGVjcmVhc2VkIG5lZWQgZm9yIHNsZWVwLCBSYWNpbmcgdGhvdWdodHMsIFBvb3IgZGVjaXNpb25cbiAgICAgICAgbWFraW5nLCBVbnVzdWFsIHRhbGthdGl2ZW5lc3MsIEV4YWdnZXJhdGVkIHNlbnNlIG9mIHdlbGwtYmVpbmcgYW5kXG4gICAgICAgIHNlbGYtY29uZmlkZW5jZS5cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxUeXBvZ3JhcGh5PlxuICAgICAgICBUaGVyZSBhcmUgYWxzbyBzeW1wdG9tcyB0aGF0IGFyZSBzZXZlcmUgZW5vdWdoIHRvIGNhdXNlIGRpZmZpY3VsdHkgaW5cbiAgICAgICAgZGF5IHRvIGRheSBhY3Rpdml0aWVzLiBJdCBpcyBhIHBoYXNlIGtub3duIGFzIHRoZSBNYWpvciBkZXByZXNzaXZlXG4gICAgICAgIGVwaXNvZGUgYW5kIGlzIGNoYXJhY3Rlcml6ZWQgYnkgdGhlIGZvbGxvd2luZyBzeW1wdG9tczogRGVwcmVzc2VkIG1vb2QsXG4gICAgICAgIHN1Y2ggYXMgZmVlbGluZyBzYWQsIGVtcHR5LCBob3BlbGVzcy4gSXQgY2FuIGFwcGVhciBhcyBpcnJpdGFiaWxpdHkgaW5cbiAgICAgICAgdGVlbnMuIExvc3Mgb2YgaW50ZXJlc3QgaW4gbW9zdCBhY3Rpdml0aWVzIHRoYXQgb25lIHVzZWQgdG8gcGFydGljaXBhdGVcbiAgICAgICAgaW4uXG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8UHVsbFF1b3RlPlxuICAgICAgICBNZW50YWwgYXdhcmVuZXNzIGlzIGtleSBpbiBvbmXigJlzIGdyb3d0aCBpbiBhbGwgYXNwZWN0c1xuICAgICAgPC9QdWxsUXVvdGU+XG4gICAgICA8VHlwb2dyYXBoeT5cbiAgICAgICAgV2l0aCB0aGUgYWJvdmUgb3ZlcnZpZXcsIHdlIGNhbiBhZ3JlZSB0aGF0IGF0IGEgY2VydGFpbiBwb2ludCBpbiBsaWZlLFxuICAgICAgICB3ZSBleHBlcmllbmNlZCBlaXRoZXIgb2YgdGhvc2UgaWYgbm90IGFsbCBidXQgcGFpZCBsaXR0bGUgb3Igbm9cbiAgICAgICAgYXR0ZW50aW9uLiBNZW50YWwgYXdhcmVuZXNzIGlzIGtleSBpbiBvbmXigJlzIGdyb3d0aCBpbiBhbGwgYXNwZWN0cy5cbiAgICAgICAgRG9taW5hbnQgc3VpY2lkYWwgdGhvdWdodHMsIG9yIGFueSB0aG91Z2h0IG9mIGh1cnRpbmcgb25lc2VsZiBpcyBjb21tb25cbiAgICAgICAgdG8gcGVvcGxlIHdpdGggYmlwb2xhciBkaXNvcmRlci4gVGhlcmUgaXMgYSBuZWVkIGZvciBvbmUgdG8gc2VlIGEgbWVudGFsXG4gICAgICAgIHNwZWNpYWxpc3Qgb3IgYWR2aWNlIGFuIGluZGl2aWR1YWwgd2l0aCB0aGUgc3RhdGVkIHN5bXB0b21zIHRvIHZpc2l0IGFcbiAgICAgICAgcHN5Y2hpYXRyaXN0LiBMZXQgdXMgYWxsIHJlbWVtYmVyIHRoYXQgdGhlIGRhbmNlIG9mIGEgbWFkIG1hbiBpbiB0aGVcbiAgICAgICAgbWFya2V0IGlzIG9ubHkgZnVubnkgdG8gdGhvc2Ugd2hvIGFyZW7igJl0IGhpcy9oZXIga2luLiBPdXIgbWVudGFsIGhlYWx0aFxuICAgICAgICBtYXR0ZXJzIVxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgIDwvQXJ0aWNsZVdyYXBwZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgT3ZlcnZpZXdNZW50YWxcbiIsImltcG9ydCB7IFR5cG9ncmFwaHkgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBBcnRpY2xlV3JhcHBlciBmcm9tICcuL0FydGljbGVXcmFwcGVyJ1xuaW1wb3J0IHBob3RvIGZyb20gJy4uLy4uL2ltYWdlcy9zdXBwb3J0LWFydGljbGUuanBnJ1xuaW1wb3J0IFB1bGxRdW90ZSBmcm9tICcuL2NvbXBvbmVudHMvUHVsbFF1b3RlJ1xuaW1wb3J0IGFub3RoZXJQaG90byBmcm9tICcuLi8uLi9pbWFnZXMvYW5vdGhlci1zdXBwb3J0LWFydGljbGUuanBnJ1xuaW1wb3J0IEFydGljbGVJbWFnZSBmcm9tICcuL2NvbXBvbmVudHMvQXJ0aWNsZUltYWdlJ1xuXG5jb25zdCBTdG9yeU9mSG9wZSA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8QXJ0aWNsZVdyYXBwZXIgdGhlbWVQaG90bz17cGhvdG99PlxuICAgICAgPFR5cG9ncmFwaHk+XG4gICAgICAgIFdoZW4gcGVvcGxlIGxvb2sgYXQgbWUgdGhleSB3b3VsZCBzZWUgYSB0eXBpY2FsIDIwIHNvbWV0aGluZyBVbml2ZXJzaXR5XG4gICAgICAgIHN0dWRlbnQsIHdobyBtYXkgY29tZSBhY3Jvc3MgYXMgYSBiaXQgcmVzZXJ2ZWQsIHF1aWV0LCB0aG91Z2h0ZnVsIGFuZCBpc1xuICAgICAgICBnZW5lcmFsbHkgcmVzcGVjdGVkIGFtb25nc3QgaGlzIHBlZXJzLiBXaGF0IHRoZXkgd291bGQgbm90IHNlZSBhcmUgdGhlXG4gICAgICAgIHNjYXJzIEkgY2FycnkuIEkgYW0gbm90IHJlZmVycmluZyB0byBwaHlzaWNhbCBzY2FycywgYnV0IGVtb3Rpb25hbCBzY2Fyc1xuICAgICAgICBvbiB0aGUgaW5zaWRlLlxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPFR5cG9ncmFwaHk+XG4gICAgICAgIEkgaGF2ZSBiZWVuIHN0cnVnZ2xpbmcgd2l0aCBteSBtZW50YWwgaGVhbHRoIG9uIGFuZCBvZmYgZm9yIG1hbnkgeWVhcnMsXG4gICAgICAgIHRocm91Z2ggdmFyaW91cyBleHBlcmllbmNlcyB0aGF0IGhhdmUgYmVlbiB0cmF1bWF0aWMgZm9yIG1lLCBiZWdpbm5pbmdcbiAgICAgICAgaW4gbXkgZWFybHkgdGVlbnMgYW5kIGNvbnRpbnVpbmcgdG8geW8teW8gYmV0d2VlbiB0aGUgaGlnaHMgYW5kIHRoZVxuICAgICAgICBleHRyZW1lIGxvd3MgbmV2ZXIgcmVhbGx5IGZlZWxpbmcgYSBiYWxhbmNlIGJldHdlZW4gdGhlIHR3by4gRHVyaW5nIG15XG4gICAgICAgIHBlcmlvZHMgb2YgYmVpbmcgZXh0cmVtZWx5IGxvdywgSSBzZWxmLWhhcm1lZCBhbmQgYXR0ZW1wdGVkIHRvIHRha2UgbXlcbiAgICAgICAgb3duIGxpZmUuXG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8VHlwb2dyYXBoeT5cbiAgICAgICAgVGhpcyB3YXMgaGlkZGVuIGFuZCBrZXB0IHNlY3JldCBmcm9tIGZhbWlseSBhbmQgY2xvc2UgZnJpZW5kcyBmb3IgYSB2ZXJ5XG4gICAgICAgIGxvbmcgdGltZSwgdW50aWwgb25lIHN1Y2ggZXBpc29kZSBpbiBNYXkgdGhpcyB5ZWFyIEkgZmluYWxseSByZWFjaGVkIG91dFxuICAgICAgICB0byBhIGNsb3NlIGZyaWVuZCB3aG8gbGlzdGVuZWQgYW5kIGRpcmVjdGVkIG1lIHRvIGdldCBwcm9mZXNzaW9uYWxcbiAgICAgICAgc3VwcG9ydCB1cmdlbnRseS4gSSBjb250YWN0ZWQgdGhlIEd1aWRhbmNlIGFuZCBDb3Vuc2VsbGluZywgd2hvIHdlcmUgYW5cbiAgICAgICAgaW5pdGlhbCBwb2ludCBvZiBzdXBwb3J0LiBJIGZlbHQgdGhhdCBieSB0YWxraW5nIHRvIGFic29sdXRlIHN0cmFuZ2VycyxcbiAgICAgICAgYWxiZWl0IHByb2Zlc3Npb25hbHMsIGFib3V0IHRoaW5ncyB0aGF0IGFyZSBzbyBwZXJzb25hbCBhbmQgZW1vdGlvbmFsLCBJXG4gICAgICAgIGNvdWxkIGdvIGZ1cnRoZXIuIEkgZGVjaWRlZCB0aGF0IEkgY2FuIGFuZCBzaG91bGQgcmVhbGx5IGJlIHRhbGtpbmcgdG9cbiAgICAgICAgdGhvc2Ugd2hvIGtub3cgbWUsIGFuZCBvcGVuZWQgdXAgdG8gZnJpZW5kcywgdHJ1c3RlZCBjb2xsZWFndWVzIGFuZFxuICAgICAgICBjbG9zZSBmYW1pbHkuIFRoaXMgd2FzIG5vdCBlYXN5IGF0IGFsbCBhbmQgaGFzIGJlZW4gb25lIG9mIHRoZSBoYXJkZXN0XG4gICAgICAgIHRoaW5ncyBJIGhhdmUgaGFkIHRvIGRvLCB0byBkaXNjdXNzIG9wZW5seSBhZnRlciBzbyBsb25nIHRoYXQgSSBoYXZlXG4gICAgICAgIG1lbnRhbCBoZWFsdGggaXNzdWVzIGFuZCBzZWUgdGhlaXIgcmVhY3Rpb25zLlxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPFR5cG9ncmFwaHk+XG4gICAgICAgIEJ1dCwgdGhlIGhlbHAgcmVjZWl2ZWQgZnJvbSBteSBuZXcgc3VwcG9ydCBuZXR3b3JrLCBteSBmYW1pbHksIGZyaWVuZHNcbiAgICAgICAgYW5kIGNsb3NlIGNvbGxlYWd1ZXMgb2ZmZXJpbmcgdG8ganVzdCBiZSB0aGVyZSB0byBsaXN0ZW4gd2hlbiBJIGFtIGxvdyxcbiAgICAgICAgd2FzIG92ZXJ3aGVsbWluZy4gTXkgYmVzdCBmcmllbmQgYW5kIGNsb3NlIGZhbWlseSBhcmUgaW4gY29udGFjdFxuICAgICAgICByZWd1bGFybHksIGJ5IHBob25lIGFuZCBpbiBwZXJzb24uIEF0IGNhbXB1cyBzb21lIG9mIG15IGZyaWVuZHMgaGVscGVkXG4gICAgICAgIG1lIG9uIGEgb25lIHRvIG9uZSBiYXNpcyBhbmQgc3VwcG9ydGVkIG1lIGluIGFjY2Vzc2luZyB0aGUgVW5pdmVyc2l0eeKAmXNcbiAgICAgICAgR3VpZGFuY2UgYW5kIENvdW5zZWxsaW5nIFNlcnZpY2UuIEkgZmVsdCBhcHByZWhlbnNpdmUgYWJvdXQgdGhpcywgYnV0XG4gICAgICAgIHRoZSBzdGFmZiBoYXZlIGJlZW4gc3VwcG9ydGl2ZSBhbmQgdGhlIGNvdW5zZWxsaW5nIHNlc3Npb25zIGhhdmUgaGVscGVkXG4gICAgICAgIG1lIGltbWVuc2VseS5cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxUeXBvZ3JhcGh5PlxuICAgICAgICBQZXJzb25hbGx5LCB0aGUga2V5IGZvciBtZSBoYXMgdmVyeSBtdWNoIGJlZW4gdG8gYmUgbW9yZSBvcGVuIGFuZCBob25lc3RcbiAgICAgICAgd2l0aCBteXNlbGYgYW5kIHRvIGhhdmUgdGhlIGNvdXJhZ2UgdG8gYWNjZXNzIHByb2Zlc3Npb25hbCBzZXJ2aWNlcyxcbiAgICAgICAgd2hldGhlciB0aGV5IGJlIGF0IHRoZSBVbml2ZXJzaXR5IG9yIG90aGVyIHN1cHBvcnQgc2VydmljZXMuIEZyaWVuZHMsXG4gICAgICAgIGZhbWlseSBhbmQgdHJ1c3RlZCBjb2xsZWFndWVzIGFyZSBhIGdyZWF0IHNvdXJjZSBvZiBzdXBwb3J0LCBidXQgSSBmZWVsXG4gICAgICAgIHRoYXQgcHJvZmVzc2lvbmFscyB0cmFpbmVkIGluIHRoZXNlIGFyZWFzIGFyZSBhbiBhYnNvbHV0ZSBlc3NlbnRpYWxcbiAgICAgICAgbWVhbnMgdG8gcmVjb2duaXNlIGJlaGF2aW91cnMsIGRlcml2ZSBhdCB0aGVyYXBpZXMgYW5kIHRvIGhlbHAgdG93YXJkc1xuICAgICAgICBmaW5kaW5nIGEgZm9yd2FyZCBmYWNpbmcgZGlyZWN0aW9uLlxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPFB1bGxRdW90ZT5cbiAgICAgICAgSSBjYW5ub3QgZW1waGFzaXMgZW5vdWdoIHRoZSBpbXBvcnRhbmNlIG9mIGdldHRpbmcgYSB0cnVzdGVkIHN1cHBvcnRcbiAgICAgICAgbmV0d29yayBhbmQgYWNjZXNzaW5nIHByb2Zlc3Npb25hbCBzZXJ2aWNlcyB3aGVuIG5lZWRlZC4gV2l0aG91dCB0aGVtIElcbiAgICAgICAgaG9uZXN0bHkgZG9u4oCZdCB0aGluayBJIHdvdWxkIHN0aWxsIGJlIGhlcmVcbiAgICAgIDwvUHVsbFF1b3RlPlxuICAgICAgPFR5cG9ncmFwaHk+XG4gICAgICAgIEV2ZW4gd2l0aCBoZWxwIGl04oCZcyBhIGRpZmZpY3VsdCB1cGhpbGwgc3RydWdnbGUuIEF0IHRpbWVzLCBJIGZlZWwgbGlrZSBJXG4gICAgICAgIGtlZXAgc3RhcnRpbmcgb3ZlciBhZ2Fpbi4gQXQgdGhlIHRpbWUgb2Ygd3JpdGluZyBJIHdhcyBnb2luZyB0aHJvdWdoIGFcbiAgICAgICAgcGFpbmZ1bCBhbmQgZGlmZmljdWx0IGJyZWFrZG93biBvZiBhIHZlcnkgaW1wb3J0YW50IHJlbGF0aW9uc2hpcCAoYW5kXG4gICAgICAgIG9uZSBvZiBteSBzdXBwb3J0IG5ldHdvcmspLCBjYXVzaW5nIGNvbmZpZGVuY2VzIGJ1aWx0IHVwIHRvIGJlIGtub2NrZWQsXG4gICAgICAgIHRvIHdoaWNoIEkgZmVsdCBleHRyZW1lbHkgbG93IGFuZCBoYWQgcmVwZWF0IG9mIG9sZCBoYWJpdHMgaW5jbHVkaW5nXG4gICAgICAgIHNlbGYtaGFybS4gUmVsYXBzZXMgaGFwcGVuIGFuZCBJIGtub3cgdGhhdC4gQnV0LCBldmVuIHdoZW4gSSBhbSBhZ2FpbiBhdFxuICAgICAgICBteSBsb3dlc3QsIEkganVzdCBrZWVwIHRhbGtpbmcgYW5kIGxldHRpbmcgdGhlIGVtb3Rpb25zIG91dCwgYm90dGxpbmdcbiAgICAgICAgdGhlbSB1cCBpcyBub3QgdGhlIHJpZ2h0IHNvbHV0aW9uIGZyb20gbXkgZXhwZXJpZW5jZS4gVGhlcmUgaXMgbm8gcXVpY2tcbiAgICAgICAgZml4LCBpdOKAmXMgYSBsb25nIGdhbWUsIHdpdGggaHVyZGxlcyBhbG9uZyB0aGUgd2F5IGFuZCBJIGp1c3Qga2VwdFxuICAgICAgICBwaWNraW5nIG15c2VsZiB1cCB0byBtb3ZlIG9uLlxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPEFydGljbGVJbWFnZSBwaG90bz17YW5vdGhlclBob3RvfSAvPlxuICAgICAgPFR5cG9ncmFwaHk+XG4gICAgICAgIEkgY2Fubm90IGVtcGhhc2lzIGVub3VnaCB0aGUgaW1wb3J0YW5jZSBvZiBnZXR0aW5nIGEgdHJ1c3RlZCBzdXBwb3J0XG4gICAgICAgIG5ldHdvcmsgYW5kIGFjY2Vzc2luZyBwcm9mZXNzaW9uYWwgc2VydmljZXMgd2hlbiBuZWVkZWQuIFdpdGhvdXQgdGhlbSBJXG4gICAgICAgIGhvbmVzdGx5IGRvbuKAmXQgdGhpbmsgSSB3b3VsZCBzdGlsbCBiZSBoZXJlLiBGcm9tIG15IGV4cGVyaWVuY2VzIEnigJl2ZVxuICAgICAgICBsZWFybnQgdGhhdCB0aGVyZSBpcyBubyBzaGFtZSBpbiBoYXZpbmcgYSBtZW50YWwgaGVhbHRoIGlzc3VlLiBBZnRlclxuICAgICAgICBvcGVuaW5nIHVwIGFuZCB0YWxraW5nIGhvbmVzdGx5IHRoZSBzZW5zZSBvZiBmZWFyIGdyYWR1YWxseSBiZWdpbnMgdG9cbiAgICAgICAgZmFkZS4gSSBrbm93IHRoYXQgaXTigJlzIG5vdCBlYXN5IGF0IGFsbCwgaXQgdGFrZXMgY291cmFnZSB0byB0YWtlIHRoYXRcbiAgICAgICAgaW5pdGlhbCBzdGVwIHRvIHNheSDigJhJIGhhdmUgYSBtZW50YWwgaGVhbHRoIGlzc3VlLCBwbGVhc2UgaGVscCBtZS5cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICA8L0FydGljbGVXcmFwcGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0b3J5T2ZIb3BlXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBCb3ggfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcblxuY29uc3QgQXJ0aWNsZUltYWdlID0gKHsgcGhvdG8gfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxCb3ggbT1cIjMwcHggMFwiPlxuICAgICAgPGltZ1xuICAgICAgICBzcmM9e3Bob3RvfVxuICAgICAgICBhbHQ9XCJcIlxuICAgICAgICBsb2FkaW5nPVwibGF6eVwiXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICBvYmplY3RGaXQ6ICdjb3ZlcicsXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgIDwvQm94PlxuICApXG59XG5cbkFydGljbGVJbWFnZS5wcm9wVHlwZXMgPSB7XG4gIHBob3RvOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFydGljbGVJbWFnZVxuIiwiaW1wb3J0IHsgQm94LCBtYWtlU3R5bGVzLCBUeXBvZ3JhcGh5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgc2l6aW5nOiB7XG4gICAgZm9udFN0eWxlOiAnaXRhbGljJyxcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgIGZvbnRTaXplOiAnMS4ycmVtJyxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XG4gICAgICBmb250U2l6ZTogJzJyZW0nLFxuICAgIH0sXG4gIH0sXG59KSlcblxuY29uc3QgUHVsbFF1b3RlID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcblxuICByZXR1cm4gKFxuICAgIDxCb3ggcGFkZGluZz1cIjEwcHggMjBweFwiPlxuICAgICAgPFR5cG9ncmFwaHk+XG4gICAgICAgIDxCb3ggZm9udFdlaWdodD1cImJvbGRcIiBjb2xvcj1cInByaW1hcnkubWFpblwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5zaXppbmd9PlxuICAgICAgICAgICZxdW90O3tjaGlsZHJlbn0mcXVvdDtcbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgPC9Cb3g+XG4gIClcbn1cblxuUHVsbFF1b3RlLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5lbGVtZW50LmlzUmVxdWlyZWQsXG59XG5cbmV4cG9ydCBkZWZhdWx0IFB1bGxRdW90ZVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQm94LCBtYWtlU3R5bGVzLCBUeXBvZ3JhcGh5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCBtZW50YWxLZSBmcm9tICcuLi8uLi9pbWFnZXMvbWVudGFsa2Uuc3ZnJ1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCgpID0+ICh7XG4gIGxpbms6IHtcbiAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgICcmOmhvdmVyJzoge1xuICAgICAgdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnLFxuICAgIH0sXG4gIH0sXG59KSlcblxuY29uc3QgQXJ0aWNsZVByZXZpZXcgPSAoe1xuICB0aXRsZSxcbiAgaW50cm8sXG4gIGF1dGhvck5hbWUsXG4gIGltYWdlLFxuICBzbHVnLFxuICBpbml0aWFscyxcbn0pID0+IHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEJveFxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGhlaWdodDogJzI1MHB4JyxcbiAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtpbWFnZX0pYCxcbiAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcbiAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JyxcbiAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxcmVtJyxcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMjMyNzhhJyxcbiAgICAgICAgICBiYWNrZ3JvdW5kQmxlbmRNb2RlOiAnZGlmZmVyZW5jZScsXG4gICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxCb3hcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7bWVudGFsS2V9KWAsXG4gICAgICAgICAgICBoZWlnaHQ6ICc0MHB4JyxcbiAgICAgICAgICAgIHdpZHRoOiAnNzBweCcsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JyxcbiAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiAnY29udGFpbicsXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgIHJpZ2h0OiAnMTBweCcsXG4gICAgICAgICAgICB0b3A6ICc1cHgnLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgdmFyaWFudD1cImJvZHkxXCJcbiAgICAgICAgICBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgYm90dG9tOiAnMTBweCcsIGxlZnQ6ICcxMHB4JyB9fVxuICAgICAgICA+XG4gICAgICAgICAgPEJveCBmb250V2VpZ2h0PVwiYm9sZFwiIGNvbG9yPVwid2hpdGVcIj5cbiAgICAgICAgICAgIEJ5IHthdXRob3JOYW1lfVxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8L0JveD5cbiAgICAgIDxCb3ggbXQ9XCIxNXB4XCI+XG4gICAgICAgIDxMaW5rXG4gICAgICAgICAgdG89e2AvYXJ0aWNsZS8ke3NsdWd9YH1cbiAgICAgICAgICBzdGF0ZT17eyBhdXRob3JOYW1lLCB0aXRsZSwgaW5pdGlhbHMsIGludHJvLCBzbHVnIH19XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9XG4gICAgICAgID5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIj5cbiAgICAgICAgICAgIDxCb3ggZm9udFdlaWdodD1cImJvbGRcIiBjb2xvcj1cInNlY29uZGFyeS5tYWluXCI+XG4gICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHRTZWNvbmRhcnlcIj5cbiAgICAgICAgICB7aW50cm99XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDwvQm94PlxuICAgIDwvPlxuICApXG59XG5cbkFydGljbGVQcmV2aWV3LnByb3BUeXBlcyA9IHtcbiAgaW1hZ2U6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgc2x1ZzogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBpbnRybzogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBhdXRob3JOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGluaXRpYWxzOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFydGljbGVQcmV2aWV3XG4iLCJpbXBvcnQgeyBCb3gsIENvbnRhaW5lciwgbWFrZVN0eWxlcywgVHlwb2dyYXBoeSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xuaW1wb3J0IHsgSW5zdGFncmFtLCBNYWlsLCBUd2l0dGVyLCBZb3VUdWJlIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIHdvcmRTaXplOiB7XG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XG4gICAgICBmb250U2l6ZTogJzEuNnJlbScsXG4gICAgfSxcbiAgfSxcbn0pKVxuXG5jb25zdCBDb250YWN0VXMgPSAoKSA9PiB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBpZD1cImNvbnRhY3QtdXNcIj5cbiAgICAgIDxCb3hcbiAgICAgICAgaGVpZ2h0PVwiNDAwcHhcIlxuICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcbiAgICAgICAgZmxleERpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgPlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIiBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5Lm1haW5cIlxuICAgICAgICAgICAgZm9udFdlaWdodD17NTAwfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLndvcmRTaXplfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIE5lZWQgdG8gcmVhY2ggb3V0IHRvIHVzPyBTdXJlISBHZXQgaW4gdG91Y2ggdGhyb3VnaCBvdXIgZW1haWwgYW5kXG4gICAgICAgICAgICBzb2NpYWwgbWVkaWEgaGFuZGxlcyBiZWxvd1xuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxCb3hcbiAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxuICAgICAgICAgIG10PVwiNDBweFwiXG4gICAgICAgICAgZmxleFdyYXA9XCJ3cmFwXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxCb3ggZGlzcGxheT1cImZsZXhcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICAgICAgICA8TWFpbCBmb250U2l6ZT1cIm1lZGl1bVwiIC8+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnNXB4JyB9fT5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPVwibWFpbHRvOnZhbGhhbGxhbWVkaWFncm91cEBnbWFpbC5jb21cIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiAnaW5oZXJpdCcsIHRleHREZWNvcmF0aW9uOiAnbm9uZScgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxCb3ggY29sb3I9XCJzZWNvbmRhcnkubWFpblwiIGZvbnRXZWlnaHQ9XCJib2xkXCI+XG4gICAgICAgICAgICAgICAgICB2YWxoYWxsYW1lZGlhZ3JvdXBAZ21haWwuY29tXG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIG1sPVwiMjBweFwiPlxuICAgICAgICAgICAgPFlvdVR1YmUgZm9udFNpemU9XCJtZWRpdW1cIiAvPlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3R5bGU9e3sgbWFyZ2luTGVmdDogJzVweCcgfX0+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2NoYW5uZWwvVUM2Vm1VanhkR083OGZaX1djM2h4NFVBXCJcbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiAnaW5oZXJpdCcsIHRleHREZWNvcmF0aW9uOiAnbm9uZScgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxCb3ggY29sb3I9XCJzZWNvbmRhcnkubWFpblwiIGZvbnRXZWlnaHQ9XCJib2xkXCI+XG4gICAgICAgICAgICAgICAgICBZb3VUdWJlXG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIG14PVwiMjBweFwiPlxuICAgICAgICAgICAgPFR3aXR0ZXIgZm9udFNpemU9XCJtZWRpdW1cIiAvPlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3R5bGU9e3sgbWFyZ2luTGVmdDogJzVweCcgfX0+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vZ3JvdXBfdmFsaGFsbGFcIlxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6ICdpbmhlcml0JywgdGV4dERlY29yYXRpb246ICdub25lJyB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEJveCBjb2xvcj1cInNlY29uZGFyeS5tYWluXCIgZm9udFdlaWdodD1cImJvbGRcIj5cbiAgICAgICAgICAgICAgICAgIFR3aXR0ZXJcbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDxCb3ggZGlzcGxheT1cImZsZXhcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICAgICAgICA8SW5zdGFncmFtIGZvbnRTaXplPVwibWVkaXVtXCIgLz5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICc1cHgnIH19PlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2luc3RhZ3JhbS5jb20vbWVudGFsaGVhbHRoXzZcIlxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6ICdpbmhlcml0JywgdGV4dERlY29yYXRpb246ICdub25lJyB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEJveCBjb2xvcj1cInNlY29uZGFyeS5tYWluXCIgZm9udFdlaWdodD1cImJvbGRcIj5cbiAgICAgICAgICAgICAgICAgIEluc3RhZ3JhbVxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Cb3g+XG4gICAgPC9Db250YWluZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdFVzXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9qc3gtcHJvcHMtbm8tc3ByZWFkaW5nICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB3aXRoU3R5bGVzLCBCdXR0b24sIG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuY29uc3QgQnV0dG9uT3V0bGluZWQgPSB3aXRoU3R5bGVzKHtcbiAgcm9vdDoge1xuICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgIGJveFNoYWRvdzogJ25vbmUnLFxuICAgIHRleHRUcmFuc2Zvcm06ICdub25lJyxcbiAgICBmb250U2l6ZTogMTYsXG4gICAgcGFkZGluZzogJzZweCAxMnB4JyxcbiAgICBib3JkZXI6ICcxcHggc29saWQnLFxuICAgIGxpbmVIZWlnaHQ6IDEuNSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMTgxRTRFJyxcbiAgICBib3JkZXJDb2xvcjogJyMxODFFNEUnLFxuICAgIGZvbnRGYW1pbHk6IFtcbiAgICAgICctYXBwbGUtc3lzdGVtJyxcbiAgICAgICdCbGlua01hY1N5c3RlbUZvbnQnLFxuICAgICAgJ1wiU2Vnb2UgVUlcIicsXG4gICAgICAnUm9ib3RvJyxcbiAgICAgICdcIkhlbHZldGljYSBOZXVlXCInLFxuICAgICAgJ0FyaWFsJyxcbiAgICAgICdzYW5zLXNlcmlmJyxcbiAgICAgICdcIkFwcGxlIENvbG9yIEVtb2ppXCInLFxuICAgICAgJ1wiU2Vnb2UgVUkgRW1vamlcIicsXG4gICAgICAnXCJTZWdvZSBVSSBTeW1ib2xcIicsXG4gICAgXS5qb2luKCcsJyksXG4gICAgJyY6YWN0aXZlJzoge1xuICAgICAgYm94U2hhZG93OiAnbm9uZScsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMTgxRTRFJyxcbiAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgYm9yZGVyQ29sb3I6ICcjMTgxRTRFJyxcbiAgICB9LFxuICAgICcmOmZvY3VzJzoge1xuICAgICAgYm94U2hhZG93OiAnMCAwIDAgMC4ycmVtICMxODFFNEUnLFxuICAgIH0sXG4gICAgJyY6aG92ZXInOiB7XG4gICAgICBib3hTaGFkb3c6ICdub25lJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyMxODFFNEUnLFxuICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICBib3JkZXJDb2xvcjogJyMxODFFNEUnLFxuICAgIH0sXG4gIH0sXG59KShCdXR0b24pXG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xuICByb290OiB7XG4gICAgJyYkZGlzYWJsZWQnOiB7XG4gICAgICBiYWNrZ3JvdW5kOiAncmdiYSgwLCAwLCAwLCAwLjEyKScsXG4gICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgIGJveFNoYWRvdzogJ25vbmUnLFxuICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgfSxcbiAgfSxcbiAgZGlzYWJsZWQ6IHt9LFxufSlcblxuY29uc3QgQ29udGFpbmVkQmx1ZUJ1dHRvbiA9ICh7IGNoaWxkcmVuLCBvbkNsaWNrLCAuLi5vdGhlcnMgfSkgPT4ge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcblxuICByZXR1cm4gKFxuICAgIDxCdXR0b25PdXRsaW5lZFxuICAgICAgZGlzYWJsZUVsZXZhdGlvblxuICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgIHsuLi5vdGhlcnN9XG4gICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgY2xhc3Nlcz17e1xuICAgICAgICByb290OiBjbGFzc2VzLnJvb3QsIC8vIGNsYXNzIG5hbWUsIGUuZy4gYHJvb3QteGBcbiAgICAgICAgZGlzYWJsZWQ6IGNsYXNzZXMuZGlzYWJsZWQsIC8vIGNsYXNzIG5hbWUsIGUuZy4gYGRpc2FibGVkLXhgXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCAnTG9naW4nfVxuICAgIDwvQnV0dG9uT3V0bGluZWQ+XG4gIClcbn1cblxuQ29udGFpbmVkQmx1ZUJ1dHRvbi5wcm9wVHlwZXMgPSB7XG4gIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLmVsZW1lbnQuaXNSZXF1aXJlZCxcbn1cblxuQ29udGFpbmVkQmx1ZUJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIG9uQ2xpY2s6IG51bGwsXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lZEJsdWVCdXR0b25cbiIsImltcG9ydCB7IEJveCwgR3JpZCwgbWFrZVN0eWxlcywgVHlwb2dyYXBoeSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgT3V0bGluZWRQcmltYXJ5QXBwQnV0dG9uIGZyb20gJy4vT3V0bGluZWRQcmltYXJ5QXBwQnV0dG9uJ1xuaW1wb3J0IHNwaXJhbCBmcm9tICcuLi8uLi9pbWFnZXMvc3BpcmFsLnN2ZydcbmltcG9ydCBzdGFyIGZyb20gJy4uLy4uL2ltYWdlcy9zdGFyLnN2ZydcbmltcG9ydCBib3ggZnJvbSAnLi4vLi4vaW1hZ2VzL2JveC5zdmcnXG5pbXBvcnQgTmV3c0xldHRlckRpYWxvZyBmcm9tICcuL25ld3NMZXR0ZXIvTmV3c0xldHRlckRpYWxvZydcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICB0ZXh0OiB7XG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xuICAgICAgZm9udFNpemU6ICcxLjRyZW0nLFxuICAgIH0sXG4gIH0sXG59KSlcblxuY29uc3QgRmlmdGhTZWN0aW9uID0gKCkgPT4ge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcblxuICBjb25zdCBbb3Blbk5ld3NMZXR0ZXJEaWFsb2csIHNldE9wZW5OZXdzTGV0dGVyRGlhbG9nXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxOZXdzTGV0dGVyRGlhbG9nXG4gICAgICAgIG9wZW49e29wZW5OZXdzTGV0dGVyRGlhbG9nfVxuICAgICAgICBzZXRPcGVuPXtzZXRPcGVuTmV3c0xldHRlckRpYWxvZ31cbiAgICAgIC8+XG4gICAgICA8Qm94XG4gICAgICAgIG1pbkhlaWdodD1cIjIwMHB4XCJcbiAgICAgICAgbXQ9XCI3MHB4XCJcbiAgICAgICAgcHg9XCIyMHB4XCJcbiAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnIzE4MUU0RScgfX1cbiAgICAgICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXG4gICAgICA+XG4gICAgICAgIDxCb3hcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtzcGlyYWx9KWAsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JyxcbiAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiAnY29udGFpbicsXG4gICAgICAgICAgICB3aWR0aDogJzgwcHgnLFxuICAgICAgICAgICAgaGVpZ2h0OiAnODBweCcsXG4gICAgICAgICAgICBsZWZ0OiAnMzAlJyxcbiAgICAgICAgICAgIHRvcDogJzEwJScsXG4gICAgICAgICAgICB6SW5kZXg6IDEsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPEJveFxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke2JveH0pYCxcbiAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnLFxuICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6ICdjb250YWluJyxcbiAgICAgICAgICAgIHdpZHRoOiAnODBweCcsXG4gICAgICAgICAgICBoZWlnaHQ6ICc2MHB4JyxcbiAgICAgICAgICAgIGxlZnQ6ICc1JScsXG4gICAgICAgICAgICBib3R0b206ICcxMCUnLFxuICAgICAgICAgICAgekluZGV4OiAxLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG5cbiAgICAgICAgPEJveFxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke3NwaXJhbH0pYCxcbiAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnLFxuICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6ICdjb250YWluJyxcbiAgICAgICAgICAgIHdpZHRoOiAnNTBweCcsXG4gICAgICAgICAgICBoZWlnaHQ6ICc1MHB4JyxcbiAgICAgICAgICAgIGxlZnQ6ICcxMCUnLFxuICAgICAgICAgICAgdG9wOiAnMTAlJyxcbiAgICAgICAgICAgIHpJbmRleDogMSxcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICA8Qm94XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7c3Rhcn0pYCxcbiAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnLFxuICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6ICdjb250YWluJyxcbiAgICAgICAgICAgIHdpZHRoOiAnODBweCcsXG4gICAgICAgICAgICBoZWlnaHQ6ICc4MHB4JyxcbiAgICAgICAgICAgIHJpZ2h0OiAnMzAlJyxcbiAgICAgICAgICAgIGJvdHRvbTogJzMwJScsXG4gICAgICAgICAgICB6SW5kZXg6IDEsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPEdyaWRcbiAgICAgICAgICBjb250YWluZXJcbiAgICAgICAgICBzcGFjaW5nPXsyfVxuICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgIHN0eWxlPXt7IG1pbkhlaWdodDogJ2luaGVyaXQnIH19XG4gICAgICAgID5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezN9PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCI+XG4gICAgICAgICAgICAgIDxCb3ggZm9udFdlaWdodD1cImJvbGRcIiBjb2xvcj1cInByaW1hcnkubWFpblwiPlxuICAgICAgICAgICAgICAgIFF1aWNrXG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCI+XG4gICAgICAgICAgICAgIDxCb3ggZm9udFdlaWdodD1cImJvbGRcIiBjb2xvcj1cIndoaXRlXCI+XG4gICAgICAgICAgICAgICAgTmV3c2xldHRlclxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs2fT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiPlxuICAgICAgICAgICAgICA8Qm94IGNvbG9yPVwid2hpdGVcIiBjbGFzc05hbWU9e2NsYXNzZXMudGV4dH0+XG4gICAgICAgICAgICAgICAgR2V0IG91ciBtb250aGx5IG5ld3NsZXR0ZXIgZm9yIGEgcm91bmQtdXAgb2YgbWVudGFsIGhlYWx0aCBhbmRcbiAgICAgICAgICAgICAgICBib2R5IGltYWdlIG5ld3MsIGV2ZW50cywgc3VwcG9ydCBhbmQgYXJ0aWNsZXMuXG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZFxuICAgICAgICAgICAgaXRlbVxuICAgICAgICAgICAgeHM9ezEyfVxuICAgICAgICAgICAgbWQ9ezN9XG4gICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxPdXRsaW5lZFByaW1hcnlBcHBCdXR0b25cbiAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0T3Blbk5ld3NMZXR0ZXJEaWFsb2codHJ1ZSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFN1YnNjcmliZSB0byBOZXdzbGV0dGVyXG4gICAgICAgICAgICA8L091dGxpbmVkUHJpbWFyeUFwcEJ1dHRvbj5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvQm94PlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZpZnRoU2VjdGlvblxuIiwiaW1wb3J0IHsgQm94LCBDb250YWluZXIsIFR5cG9ncmFwaHkgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuXG5jb25zdCBGb290ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGhhbmRsZUNvbnRhY3RVc0NsaWNrID0gZXZlbnQgPT4ge1xuICAgIGNvbnN0IGFuY2hvciA9IChldmVudC50YXJnZXQub3duZXJEb2N1bWVudCB8fCBkb2N1bWVudCkucXVlcnlTZWxlY3RvcihcbiAgICAgICcjY29udGFjdC11cydcbiAgICApXG5cbiAgICBpZiAoYW5jaG9yKSB7XG4gICAgICBhbmNob3Iuc2Nyb2xsSW50b1ZpZXcoe1xuICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCcsXG4gICAgICAgIGJsb2NrOiAnY2VudGVyJyxcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IG1pbkhlaWdodD1cIjUwcHhcIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjMTgxRTRFJyB9fT5cbiAgICAgIDxDb250YWluZXIgc3R5bGU9e3sgbWluSGVpZ2h0OiAnaW5oZXJpdCcgfX0+XG4gICAgICAgIDxCb3hcbiAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgbWluSGVpZ2h0PVwiaW5oZXJpdFwiXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCJcbiAgICAgICAgICBmbGV4V3JhcD1cIndyYXBcIlxuICAgICAgICA+XG4gICAgICAgICAgPEJveCBkaXNwbGF5PVwiZmxleFwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBmbGV4R3Jvdz17MX0gZmxleFdyYXA9XCJ3cmFwXCI+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIj5cbiAgICAgICAgICAgICAgPEJveCBjb2xvcj1cIndoaXRlXCI+XG4gICAgICAgICAgICAgICAgJmNvcHk7IDIwMjEgTWFzZW5vTWVudGFsS2UgLSBWYWxoYWxsYSBNZWRpYSBHcm91cC5cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICB2YXJpYW50PVwiYm9keTJcIlxuICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnNXB4JywgbWFyZ2luUmlnaHQ6ICc1cHgnIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxCb3ggY29sb3I9XCJ3aGl0ZVwiPlxuICAgICAgICAgICAgICAgIE5lZWQgYSB3ZWJzaXRlPyBDb250YWN0IE9sYWwgRGVubmlzXG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCJtYWlsdG86b2xhbGRlbm5pc0BnbWFpbC5jb21cIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6ICdpbmhlcml0JyB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICZsdDtvbGFsZGVubmlzQGdtYWlsLmNvbSZndDtcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICB2YXJpYW50PVwiYm9keTJcIlxuICAgICAgICAgICAgY29tcG9uZW50PVwiZGl2XCJcbiAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Qm94IGNvbG9yPVwid2hpdGVcIiBtcj1cIjE1cHhcIj5cbiAgICAgICAgICAgICAgPExpbmsgdG89XCIvdGVybXNcIiBzdHlsZT17eyBjb2xvcjogJ2luaGVyaXQnIH19PlxuICAgICAgICAgICAgICAgIFRlcm1zXG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvQm94PlxuXG4gICAgICAgICAgICA8Qm94IGNvbG9yPVwid2hpdGVcIiBtcj1cIjE1cHhcIj5cbiAgICAgICAgICAgICAgPExpbmsgdG89XCIvcHJpdmFjeS1wb2xpY3lcIiBzdHlsZT17eyBjb2xvcjogJ2luaGVyaXQnIH19PlxuICAgICAgICAgICAgICAgIFByaXZhY3kgcG9saWN5XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ29udGFjdFVzQ2xpY2t9XG4gICAgICAgICAgICAgIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJywgY3Vyc29yOiAncG9pbnRlcicgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQ29udGFjdCB1c1xuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvQm94PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlclxuIiwiaW1wb3J0IHsgQm94LCBDb250YWluZXIsIFR5cG9ncmFwaHksIG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHN0b3JpZXNPZkhvcGUgZnJvbSAnLi4vLi4vaW1hZ2VzL3N0b3JpZXMtb2YtaG9wZS5qcGcnXG5pbXBvcnQgU2Vjb25kYXJ5QXBwQnV0dG9uIGZyb20gJy4vU2Vjb25kYXJ5QXBwQnV0dG9uJ1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIHRpdGxlOiB7XG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xuICAgICAgZm9udFNpemU6ICc0LjVyZW0nLFxuICAgICAgd2lkdGg6ICc3MCUnLFxuICAgIH0sXG4gIH0sXG4gIGludHJvOiB7XG4gICAgbWFyZ2luVG9wOiAnNDBweCcsXG4gICAgbWFyZ2luQm90dG9tOiAnMjBweCcsXG4gICAgY29sb3I6ICd3aGl0ZScsXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XG4gICAgICBmb250U2l6ZTogJzEuNXJlbScsXG4gICAgICB3aWR0aDogJzcwJScsXG4gICAgfSxcbiAgfSxcbiAgY29udGFpbmVyOiB7XG4gICAgaGVpZ2h0OiAnNjAwcHgnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJyMyM2ExNjZkNicsXG4gICAgYm9yZGVyUmFkaXVzOiAnMXJlbScsXG4gICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7c3Rvcmllc09mSG9wZX0pYCxcbiAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JyxcbiAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXInLFxuICAgIGJhY2tncm91bmRCbGVuZE1vZGU6ICdjb2xvci1idXJuJyxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcbiAgICAgIGhlaWdodDogJ3Vuc2V0JyxcbiAgICB9LFxuICB9LFxufSkpXG5cbmNvbnN0IEZvdXJ0aFNlY3Rpb24gPSAoKSA9PiB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lclxuICAgICAgbWF4V2lkdGg9XCJsZ1wiXG4gICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6ICc3MHB4JywgZGlzcGxheTogJ2ZsZXgnIH19XG4gICAgICBpZD1cInN0b3JpZXMtb2YtaG9wZVwiXG4gICAgPlxuICAgICAgPEJveFxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfVxuICAgICAgICB3aWR0aD1cImluaGVyaXRcIlxuICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgICBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIlxuICAgICAgICBweD1cIjEwcHhcIlxuICAgICAgICBweT1cIjMwcHhcIlxuICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgID5cbiAgICAgICAgPEJveFxuICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICB3aWR0aD1cImZpdC1jb250ZW50XCJcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiPlxuICAgICAgICAgICAgPEJveCBmb250V2VpZ2h0PVwiYm9sZFwiIGNvbG9yPVwid2hpdGVcIj5cbiAgICAgICAgICAgICAgU1RPUklFUyBPRiBIT1BFXG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJoNVwiXG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6ICc0MHB4JywgdGV4dEFsaWduOiAnY2VudGVyJyB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxCb3ggZm9udFdlaWdodD1cImJvbGRcIiBjb2xvcj1cIndoaXRlXCI+XG4gICAgICAgICAgICAgIEhlbHAgY29tZXMgaW4gdW5leHBlY3RlZCB3YXlzXG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmludHJvfT5cbiAgICAgICAgICAgIFRoZSBoZWxwIHJlY2VpdmVkIGZyb20gbXkgbmV3IHN1cHBvcnQgbmV0d29yaywgbXkgZmFtaWx5LCBmcmllbmRzXG4gICAgICAgICAgICBhbmQgY2xvc2UgY29sbGVhZ3VlcyBvZmZlcmluZyB0byBqdXN0IGJlIHRoZXJlIHRvIGxpc3RlbiB3aGVuIEkgYW1cbiAgICAgICAgICAgIGxvdywgd2FzIG92ZXJ3aGVsbWluZ1xuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxMaW5rXG4gICAgICAgICAgdG89XCIvYXJ0aWNsZS9zdG9yaWVzLW9mLWhvcGUtMVwiXG4gICAgICAgICAgc3R5bGU9e3sgdGV4dERlY29yYXRpb246ICdub25lJyB9fVxuICAgICAgICAgIHN0YXRlPXt7XG4gICAgICAgICAgICBhdXRob3JOYW1lOiAnQW5vbnltb3VzJyxcbiAgICAgICAgICAgIHRpdGxlOiAnSGVscCBjb21lcyBpbiB1bmV4cGVjdGVkIHdheXMnLFxuICAgICAgICAgICAgaW5pdGlhbHM6ICdBJyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPFNlY29uZGFyeUFwcEJ1dHRvbiBzaXplPVwibGFyZ2VcIj5SZWFkIGZ1bGwgc3Rvcnk8L1NlY29uZGFyeUFwcEJ1dHRvbj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9Cb3g+XG4gICAgPC9Db250YWluZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm91cnRoU2VjdGlvblxuIiwiaW1wb3J0IHsgQm94LCBDb250YWluZXIsIEdyaWQsIFR5cG9ncmFwaHksIG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEluc3RhZ3JhbSwgVHdpdHRlciwgWW91VHViZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucydcbmltcG9ydCBQYXR0ZXJucyBmcm9tICcuL1BhdHRlcm5zJ1xuaW1wb3J0IGhlcm8gZnJvbSAnLi4vLi4vaW1hZ2VzL2hlcm8ucG5nJ1xuaW1wb3J0IFNlY29uZGFyeUFwcEJ1dHRvbiBmcm9tICcuL1NlY29uZGFyeUFwcEJ1dHRvbidcbmltcG9ydCBPdXRsaW5lZFByaW1hcnlBcHBCdXR0b24gZnJvbSAnLi9PdXRsaW5lZFByaW1hcnlBcHBCdXR0b24nXG5pbXBvcnQgVmlkZW9QYXBlciBmcm9tICcuL2VtYmVkZWRWaWRlby9WaWRlb1BhcGVyJ1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIGxpZ2h0Qmx1ZUJsb2NrOiB7XG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XG4gICAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgfSxcbiAgfSxcbiAgcGF0dGVybnM6IHtcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcbiAgICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICB9LFxuICB9LFxuXG4gIGhlcm9JbWFnZToge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke2hlcm99KWAsXG4gICAgYmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCcsXG4gICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnMTAlIDI1JScsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgd2lkdGg6ICc1MCUnLFxuICAgIHpJbmRleDogMSxcbiAgICBsZWZ0OiAnLTIwcHgnLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xuICAgICAgZGlzcGxheTogJ25vbmUnLFxuICAgIH0sXG4gIH0sXG5cbiAgaGVyb1dvcmRzOiB7XG4gICAgd2lkdGg6ICc4MCUnLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICB9LFxuICB9LFxuICBoaWRlVmlkZW9QYXBlcjoge1xuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xuICAgICAgZGlzcGxheTogJ25vbmUnLFxuICAgIH0sXG4gIH0sXG59KSlcblxuY29uc3QgSGVyb1NlY3Rpb24gPSAoKSA9PiB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxuXG4gIGNvbnN0IGhhbmRsZUV4cGxvcmVNb3JlQ2xpY2sgPSBldmVudCA9PiB7XG4gICAgY29uc3QgYW5jaG9yID0gKGV2ZW50LnRhcmdldC5vd25lckRvY3VtZW50IHx8IGRvY3VtZW50KS5xdWVyeVNlbGVjdG9yKFxuICAgICAgJyNhcnRpY2xlLXN0b3JpZXMnXG4gICAgKVxuXG4gICAgaWYgKGFuY2hvcikge1xuICAgICAgYW5jaG9yLnNjcm9sbEludG9WaWV3KHtcbiAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnLFxuICAgICAgICBibG9jazogJ2NlbnRlcicsXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUNvbnRhY3RVc0NsaWNrID0gZXZlbnQgPT4ge1xuICAgIGNvbnN0IGFuY2hvciA9IChldmVudC50YXJnZXQub3duZXJEb2N1bWVudCB8fCBkb2N1bWVudCkucXVlcnlTZWxlY3RvcihcbiAgICAgICcjY29udGFjdC11cydcbiAgICApXG5cbiAgICBpZiAoYW5jaG9yKSB7XG4gICAgICBhbmNob3Iuc2Nyb2xsSW50b1ZpZXcoe1xuICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCcsXG4gICAgICAgIGJsb2NrOiAnY2VudGVyJyxcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEJveFxuICAgICAgICBoZWlnaHQ9XCI3MDBweFwiXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzE4MUU0RScsXG4gICAgICAgICAgd2lkdGg6ICdpbmhlcml0JyxcbiAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLmhlcm9JbWFnZX0gLz5cbiAgICAgICAgPEJveFxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgIHdpZHRoOiAnODBweCcsXG4gICAgICAgICAgICBoZWlnaHQ6ICc4MHB4JyxcbiAgICAgICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmVkJyxcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICA8Qm94XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgd2lkdGg6ICcxNTBweCcsXG4gICAgICAgICAgICBoZWlnaHQ6ICcxNTBweCcsXG4gICAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmVkJyxcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICA8Qm94XG4gICAgICAgICAgd2lkdGg9XCIyMCVcIlxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5saWdodEJsdWVCbG9ja31cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzFCMjI1QicsXG4gICAgICAgICAgICBoZWlnaHQ6ICdpbmhlcml0JyxcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICA8Q29udGFpbmVyXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfSBqdXN0aWZ5Q29udGVudD1cImZsZXgtZW5kXCI+XG4gICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXR0ZXJuc30+XG4gICAgICAgICAgICAgIDxQYXR0ZXJucyAvPlxuICAgICAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgICAgIDxHcmlkIHhzPXsxMn0gbWQ9ezZ9PlxuICAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5oZXJvV29yZHN9PlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPlxuICAgICAgICAgICAgICAgICAgPEJveCBjb2xvcj1cInByaW1hcnkubWFpblwiIGZvbnRXZWlnaHQ9XCJib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgIEJ5IFZhbGhhbGxhIGdyb3VwXG4gICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgzXCI+XG4gICAgICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0PVwiYm9sZFwiXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uPVwicmVsYXRpdmVcIlxuICAgICAgICAgICAgICAgICAgICB6SW5kZXg9ezN9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIFNlbGYtY2FyZSBpcyBob3cgeW91IHRha2UgeW91ciBwb3dlciBiYWNrLlxuICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwiYm9keTFcIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAnMTVweCcsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxCb3ggd2lkdGg9XCIzMHB4XCIgbXI9XCIxMHB4XCIgY29sb3I9XCJwcmltYXJ5Lm1haW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGhyIHN0eWxlPXt7IGNvbG9yOiAnaW5oZXJpdCcgfX0gLz5cbiAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgPEJveCBjb2xvcj1cInByaW1hcnkubWFpblwiPkxhbGFoIERlbGlhPC9Cb3g+XG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN0eWxlPXt7IG1hcmdpblRvcDogJzE1cHgnIH19PlxuICAgICAgICAgICAgICAgICAgPEJveCBjb2xvcj1cIndoaXRlc21va2VcIj5cbiAgICAgICAgICAgICAgICAgICAgTW9vZHMgYXJlIGVtb3Rpb25zIHRoYXQgYWZmZWN0IHBlb3BsZSBlYWNoIGFuZCBldmVyeVxuICAgICAgICAgICAgICAgICAgICBkYXkuLi5hbmQgc2FkbHksIHBlb3BsZSZyc3F1bztzIG1vb2QgY2FuIGdldCBzdHVjayBvblxuICAgICAgICAgICAgICAgICAgICBzYWRuZXNzIGFuZCBkZXByZXNzaW9uIGZvciBhIGxvbmcgdGltZS5cbiAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cblxuICAgICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgbXQ9XCIzMHB4XCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8R3JpZFxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgc3BhY2luZz17NH1cbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgPFNlY29uZGFyeUFwcEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVFeHBsb3JlTW9yZUNsaWNrfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIEV4cGxvcmUgTW9yZVxuICAgICAgICAgICAgICAgICAgICAgIDwvU2Vjb25kYXJ5QXBwQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgPE91dGxpbmVkUHJpbWFyeUFwcEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDb250YWN0VXNDbGlja31cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBDb250YWN0IFVzXG4gICAgICAgICAgICAgICAgICAgICAgPC9PdXRsaW5lZFByaW1hcnlBcHBCdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICA8L0JveD5cblxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIHN0eWxlPXt7IG1hcmdpblRvcDogJzUwcHgnIH19PlxuICAgICAgICAgICAgICAgICAgPEJveCBjb2xvcj1cIndoaXRlXCI+WW91IGNhbiBmaW5kIHVzIG9uOjwvQm94PlxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgICBtdD1cIjEwcHhcIlxuICAgICAgICAgICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICBmbGV4V3JhcD1cIndyYXBcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxCb3ggZGlzcGxheT1cImZsZXhcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxZb3VUdWJlIGh0bWxDb2xvcj1cIndoaXRlXCIgZm9udFNpemU9XCJtZWRpdW1cIiAvPlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnNXB4JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2NoYW5uZWwvVUM2Vm1VanhkR083OGZaX1djM2h4NFVBXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiAnaW5oZXJpdCcsIHRleHREZWNvcmF0aW9uOiAnbm9uZScgfX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94IGNvbG9yPVwid2hpdGVcIiBmb250V2VpZ2h0PVwiYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBZb3VUdWJlXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgPEJveCBkaXNwbGF5PVwiZmxleFwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBteD1cIjEwcHhcIj5cbiAgICAgICAgICAgICAgICAgICAgPFR3aXR0ZXIgaHRtbENvbG9yPVwid2hpdGVcIiBmb250U2l6ZT1cIm1lZGl1bVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICc1cHgnIH19PlxuICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9ncm91cF92YWxoYWxsYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogJ2luaGVyaXQnLCB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnIH19XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBjb2xvcj1cIndoaXRlXCIgZm9udFdlaWdodD1cImJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgVHdpdHRlclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgIDxCb3ggZGlzcGxheT1cImZsZXhcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxJbnN0YWdyYW0gaHRtbENvbG9yPVwid2hpdGVcIiBmb250U2l6ZT1cIm1lZGl1bVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICc1cHgnIH19PlxuICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9pbnN0YWdyYW0uY29tL21lbnRhbGhlYWx0aF82XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiAnaW5oZXJpdCcsIHRleHREZWNvcmF0aW9uOiAnbm9uZScgfX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94IGNvbG9yPVwid2hpdGVcIiBmb250V2VpZ2h0PVwiYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBJbnN0YWdyYW1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLmhpZGVWaWRlb1BhcGVyfT5cbiAgICAgICAgICA8VmlkZW9QYXBlciAvPlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQm94PlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlcm9TZWN0aW9uXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIEFwcEJhcixcbiAgVG9vbGJhcixcbiAgQm94LFxuICBUeXBvZ3JhcGh5LFxuICBtYWtlU3R5bGVzLFxuICB1c2VNZWRpYVF1ZXJ5LFxuICB1c2VUaGVtZSxcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXG5pbXBvcnQgeyBMaW5rLCB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgbG9nbyBmcm9tICcuLi8uLi9pbWFnZXMvbG9nby5zdmcnXG5pbXBvcnQgc21hbGxTY3JlZW5Mb2dvIGZyb20gJy4uLy4uL2ltYWdlcy9sb2dvLXNtYWxsLXNjcmVlbi5zdmcnXG5pbXBvcnQgV2hvQXJlV2VEaWFsb2cgZnJvbSAnLi9XaG9BcmVXZURpYWxvZydcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygoKSA9PiAoe1xuICBuYXZMaW5rOiB7XG4gICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgJyY6aG92ZXInOiB7XG4gICAgICB0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZScsXG4gICAgfSxcbiAgfSxcbn0pKVxuXG5jb25zdCBOYXZCYXIgPSAoKSA9PiB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxuXG4gIGNvbnN0IFtvcGVuRGlhbG9nLCBzZXRPcGVuRGlhbG9nXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZUxvY2F0aW9uKClcblxuICBjb25zdCBzbWFsbFNjcmVlbiA9IHVzZU1lZGlhUXVlcnkodXNlVGhlbWUoKS5icmVha3BvaW50cy5kb3duKCdzbScpKVxuXG4gIGNvbnN0IGhhbmRsZVNjcm9sbFRvSG9wZVNlY3Rpb24gPSBldmVudCA9PiB7XG4gICAgY29uc3QgYW5jaG9yID0gKGV2ZW50LnRhcmdldC5vd25lckRvY3VtZW50IHx8IGRvY3VtZW50KS5xdWVyeVNlbGVjdG9yKFxuICAgICAgJyNzdG9yaWVzLW9mLWhvcGUnXG4gICAgKVxuXG4gICAgaWYgKGFuY2hvcikge1xuICAgICAgYW5jaG9yLnNjcm9sbEludG9WaWV3KHtcbiAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnLFxuICAgICAgICBibG9jazogJ2NlbnRlcicsXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEFwcEJhclxuICAgICAgcG9zaXRpb249XCJzdGF0aWNcIlxuICAgICAgZWxldmF0aW9uPXswfVxuICAgICAgaWQ9XCJiYWNrLXRvLXRvcC1hbmNob3JcIlxuICAgICAgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScsIGJhY2tncm91bmRDb2xvcjogJyMxODFFNEUnIH19XG4gICAgPlxuICAgICAgPFdob0FyZVdlRGlhbG9nIG9wZW49e29wZW5EaWFsb2d9IHNldE9wZW49e3NldE9wZW5EaWFsb2d9IC8+XG4gICAgICA8VG9vbGJhciBzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWFyb3VuZCcgfX0+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiIHN0eWxlPXt7IHBhZGRpbmc6ICc1cHgnIH19PlxuICAgICAgICAgIDxMaW5rIHRvPVwiL1wiPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9e3NtYWxsU2NyZWVuID8gc21hbGxTY3JlZW5Mb2dvIDogbG9nb31cbiAgICAgICAgICAgICAgYWx0PVwibWFzZW5vLW1lbnRhbC1rZS1sb2dvXCJcbiAgICAgICAgICAgICAgd2lkdGg9e3NtYWxsU2NyZWVuID8gNDAgOiAyMDB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBjb21wb25lbnQ9XCJkaXZcIj5cbiAgICAgICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICAgICAgICA8TGluayB0bz1cIi9cIiBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLCBjb2xvcjogJ2luaGVyaXQnIH19PlxuICAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5uYXZMaW5rfT5Ib21lPC9Cb3g+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgIG14PVwiMTVweFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5uYXZMaW5rfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuRGlhbG9nKHRydWUpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBBYm91dFxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICB7cGF0aG5hbWUgPT09ICcvJyAmJiAoXG4gICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTY3JvbGxUb0hvcGVTZWN0aW9ufVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5uYXZMaW5rfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgU3RvcmllcyBvZiBIb3BlXG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPC9Ub29sYmFyPlxuICAgIDwvQXBwQmFyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdkJhclxuIiwiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvanN4LXByb3BzLW5vLXNwcmVhZGluZyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgd2l0aFN0eWxlcywgQnV0dG9uLCBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmNvbnN0IEJ1dHRvbk91dGxpbmVkID0gd2l0aFN0eWxlcyh7XG4gIHJvb3Q6IHtcbiAgICBjb2xvcjogJyM3REVCQkQnLFxuICAgIGJveFNoYWRvdzogJ25vbmUnLFxuICAgIHRleHRUcmFuc2Zvcm06ICdub25lJyxcbiAgICBmb250U2l6ZTogMTYsXG4gICAgcGFkZGluZzogJzZweCAxMnB4JyxcbiAgICBib3JkZXI6ICcycHggc29saWQnLFxuICAgIGxpbmVIZWlnaHQ6IDEuNSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMTgxRTRFJyxcbiAgICBib3JkZXJDb2xvcjogJyM3REVCQkQnLFxuICAgIGZvbnRGYW1pbHk6IFtcbiAgICAgICctYXBwbGUtc3lzdGVtJyxcbiAgICAgICdCbGlua01hY1N5c3RlbUZvbnQnLFxuICAgICAgJ1wiU2Vnb2UgVUlcIicsXG4gICAgICAnUm9ib3RvJyxcbiAgICAgICdcIkhlbHZldGljYSBOZXVlXCInLFxuICAgICAgJ0FyaWFsJyxcbiAgICAgICdzYW5zLXNlcmlmJyxcbiAgICAgICdcIkFwcGxlIENvbG9yIEVtb2ppXCInLFxuICAgICAgJ1wiU2Vnb2UgVUkgRW1vamlcIicsXG4gICAgICAnXCJTZWdvZSBVSSBTeW1ib2xcIicsXG4gICAgXS5qb2luKCcsJyksXG4gICAgJyY6YWN0aXZlJzoge1xuICAgICAgYm94U2hhZG93OiAnbm9uZScsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMTgxRTRFJyxcbiAgICAgIGNvbG9yOiAnIzdERUJCRCcsXG4gICAgICBib3JkZXJDb2xvcjogJyM3REVCQkQnLFxuICAgIH0sXG4gICAgJyY6Zm9jdXMnOiB7XG4gICAgICBib3hTaGFkb3c6ICdub25lJyxcbiAgICB9LFxuICAgICcmOmhvdmVyJzoge1xuICAgICAgYm94U2hhZG93OiAnbm9uZScsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMTgxRTRFJyxcbiAgICAgIGNvbG9yOiAnIzdERUJCRCcsXG4gICAgICBib3JkZXJDb2xvcjogJyM3REVCQkQnLFxuICAgIH0sXG4gIH0sXG59KShCdXR0b24pXG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xuICByb290OiB7XG4gICAgJyYkZGlzYWJsZWQnOiB7XG4gICAgICBiYWNrZ3JvdW5kOiAncmdiYSgwLCAwLCAwLCAwLjEyKScsXG4gICAgICBjb2xvcjogJyM3REVCQkQnLFxuICAgICAgYm94U2hhZG93OiAnbm9uZScsXG4gICAgICBib3JkZXI6ICdub25lJyxcbiAgICB9LFxuICB9LFxuICBkaXNhYmxlZDoge30sXG59KVxuXG5jb25zdCBPdXRsaW5lZFByaW1hcnlBcHBCdXR0b24gPSAoeyBjaGlsZHJlbiwgb25DbGljaywgLi4ub3RoZXJzIH0pID0+IHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXG5cbiAgcmV0dXJuIChcbiAgICA8QnV0dG9uT3V0bGluZWRcbiAgICAgIGRpc2FibGVFbGV2YXRpb25cbiAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICB7Li4ub3RoZXJzfVxuICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgIGNsYXNzZXM9e3tcbiAgICAgICAgcm9vdDogY2xhc3Nlcy5yb290LCAvLyBjbGFzcyBuYW1lLCBlLmcuIGByb290LXhgXG4gICAgICAgIGRpc2FibGVkOiBjbGFzc2VzLmRpc2FibGVkLCAvLyBjbGFzcyBuYW1lLCBlLmcuIGBkaXNhYmxlZC14YFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW4gfHwgJ0xvZ2luJ31cbiAgICA8L0J1dHRvbk91dGxpbmVkPlxuICApXG59XG5cbk91dGxpbmVkUHJpbWFyeUFwcEJ1dHRvbi5wcm9wVHlwZXMgPSB7XG4gIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLmVsZW1lbnQuaXNSZXF1aXJlZCxcbn1cblxuT3V0bGluZWRQcmltYXJ5QXBwQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgb25DbGljazogbnVsbCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgT3V0bGluZWRQcmltYXJ5QXBwQnV0dG9uXG4iLCJpbXBvcnQgeyBCb3ggfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBib3ggZnJvbSAnLi4vLi4vaW1hZ2VzL2JveC5zdmcnXG5pbXBvcnQgc3RhciBmcm9tICcuLi8uLi9pbWFnZXMvc3Rhci5zdmcnXG5pbXBvcnQgc3BpcmFsIGZyb20gJy4uLy4uL2ltYWdlcy9zcGlyYWwuc3ZnJ1xuXG5jb25zdCBQYXR0ZXJucyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEJveFxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke2JveH0pYCxcbiAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JyxcbiAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvbnRhaW4nLFxuICAgICAgICAgIHdpZHRoOiAnNDAwcHgnLFxuICAgICAgICAgIGhlaWdodDogJzMwMHB4JyxcbiAgICAgICAgICBsZWZ0OiAnNDAlJyxcbiAgICAgICAgICBib3R0b206ICc1NSUnLFxuICAgICAgICAgIHpJbmRleDogMSxcbiAgICAgICAgfX1cbiAgICAgIC8+XG5cbiAgICAgIDxCb3hcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtib3h9KWAsXG4gICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCcsXG4gICAgICAgICAgYmFja2dyb3VuZFNpemU6ICdjb250YWluJyxcbiAgICAgICAgICB3aWR0aDogJzE1MHB4JyxcbiAgICAgICAgICBoZWlnaHQ6ICcxNTBweCcsXG4gICAgICAgICAgcmlnaHQ6ICcxMCUnLFxuICAgICAgICAgIGJvdHRvbTogJzQwJScsXG4gICAgICAgICAgekluZGV4OiAxLFxuICAgICAgICB9fVxuICAgICAgLz5cblxuICAgICAgPEJveFxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke2JveH0pYCxcbiAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JyxcbiAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvbnRhaW4nLFxuICAgICAgICAgIHdpZHRoOiAnODBweCcsXG4gICAgICAgICAgaGVpZ2h0OiAnNjBweCcsXG4gICAgICAgICAgcmlnaHQ6ICczMCUnLFxuICAgICAgICAgIGJvdHRvbTogJzIwJScsXG4gICAgICAgICAgekluZGV4OiAxLFxuICAgICAgICB9fVxuICAgICAgLz5cblxuICAgICAgPEJveFxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke3N0YXJ9KWAsXG4gICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCcsXG4gICAgICAgICAgYmFja2dyb3VuZFNpemU6ICdjb250YWluJyxcbiAgICAgICAgICB3aWR0aDogJzgwcHgnLFxuICAgICAgICAgIGhlaWdodDogJzgwcHgnLFxuICAgICAgICAgIGxlZnQ6ICczMCUnLFxuICAgICAgICAgIGJvdHRvbTogJzMwJScsXG4gICAgICAgICAgekluZGV4OiAxLFxuICAgICAgICB9fVxuICAgICAgLz5cblxuICAgICAgPEJveFxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke3NwaXJhbH0pYCxcbiAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JyxcbiAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvbnRhaW4nLFxuICAgICAgICAgIHdpZHRoOiAnNTBweCcsXG4gICAgICAgICAgaGVpZ2h0OiAnNTBweCcsXG4gICAgICAgICAgbGVmdDogJzMwJScsXG4gICAgICAgICAgdG9wOiAnMzAlJyxcbiAgICAgICAgICB6SW5kZXg6IDEsXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhdHRlcm5zXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDb250YWluZXIsIEJveCwgVHlwb2dyYXBoeSwgR3JpZCwgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xuaW1wb3J0IHBob25lQUZyaWVuZCBmcm9tICcuLi8uLi9pbWFnZXMvcGhvbmUtYS1mcmllbmQuanBnJ1xuaW1wb3J0IGxpZnRZb3VyTW9vZCBmcm9tICcuLi8uLi9pbWFnZXMvbGlmdC15b3VyLW1vb2QuanBnJ1xuaW1wb3J0IGhhbmRzIGZyb20gJy4uLy4uL2ltYWdlcy9oYW5kcy5qcGcnXG5pbXBvcnQgQXJ0aWNsZVByZXZpZXcgZnJvbSAnLi9BcnRpY2xlUHJldmlldydcbmltcG9ydCBob3BlIGZyb20gJy4uLy4uL2ltYWdlcy9ob3BlLmpwZydcbmltcG9ydCBtZWRpdGF0aW5nIGZyb20gJy4uLy4uL2ltYWdlcy9tZWRpdGF0aW5nLmpwZydcbmltcG9ydCB3ZUh1cnQgZnJvbSAnLi4vLi4vaW1hZ2VzL3dlLWh1cnQuanBnJ1xuaW1wb3J0IGhhcHB5QmFsbG9vbnMgZnJvbSAnLi4vLi4vaW1hZ2VzL2JhbGxvb24uanBnJ1xuaW1wb3J0IGhhcHB5RmFjZSBmcm9tICcuLi8uLi9pbWFnZXMvaGFwcHktZmFjZS5qcGcnXG5pbXBvcnQgaW50cm8xMDEgZnJvbSAnLi4vLi4vaW1hZ2VzLzEwMS5qcGcnXG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgY29udGFpbmVyOiB7XG4gICAgbWFyZ2luVG9wOiAnMjUwcHgnLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xuICAgICAgbWFyZ2luVG9wOiAnNTBweCcsXG4gICAgfSxcbiAgfSxcbn0pKVxuXG5jb25zdCBTZWNvbmRTZWN0aW9uID0gKCkgPT4ge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Q29udGFpbmVyXG4gICAgICAgIGZpeGVkXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgICBtaW5IZWlnaHQ6ICc1MDBweCcsXG4gICAgICAgIH19XG4gICAgICAgIGlkPVwiYXJ0aWNsZS1zdG9yaWVzXCJcbiAgICAgID5cbiAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfSB3aWR0aD1cImluaGVyaXRcIj5cbiAgICAgICAgICA8Q29udGFpbmVyIGZpeGVkIG1heFdpZHRoPVwibWRcIj5cbiAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCJcbiAgICAgICAgICAgICAgbWI9XCIzMHB4XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCI+XG4gICAgICAgICAgICAgICAgPEJveCBmb250V2VpZ2h0PVwiYm9sZFwiIGNvbG9yPVwic2Vjb25kYXJ5Lm1haW5cIj5cbiAgICAgICAgICAgICAgICAgIExhdGVzdCBzdG9yaWVzXG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9PlxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezR9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxuICAgICAgICAgICAgICAgIDxBcnRpY2xlUHJldmlld1xuICAgICAgICAgICAgICAgICAgaW1hZ2U9e3Bob25lQUZyaWVuZH1cbiAgICAgICAgICAgICAgICAgIHNsdWc9XCJteS1jYXJlZXItc3R1ZGllcy1jYXVzZWQtbXktbWVudGFsLWlsbG5lc3NcIlxuICAgICAgICAgICAgICAgICAgYXV0aG9yTmFtZT1cIldpdmlueWEgQmV0dHlcIlxuICAgICAgICAgICAgICAgICAgdGl0bGU9XCJNeSBjYXJlZXIgc3R1ZGllcyBjYXVzZWQgbXkgbWVudGFsIGlsbG5lc3NcIlxuICAgICAgICAgICAgICAgICAgaW50cm89XCJQcmVzc3VyZSBzaG91bGQgYmUgdGhlIGxhc3QgdGhpbmcgeW91bmcgcGVvcGxlIHNob3VsZCBiZSBwdXQgaW4gYXMgdGhleSB1bmRlcmdvIGNhcmVlciBjaG9pY2VzIGFmdGVyIHNjaG9vbFwiXG4gICAgICAgICAgICAgICAgICBpbml0aWFscz1cIldCXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17NH0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XG4gICAgICAgICAgICAgICAgPEFydGljbGVQcmV2aWV3XG4gICAgICAgICAgICAgICAgICBpbWFnZT17bGlmdFlvdXJNb29kfVxuICAgICAgICAgICAgICAgICAgc2x1Zz1cImRlcHJlc3Npb24tYW5kLWNhbXB1cy1saWZlXCJcbiAgICAgICAgICAgICAgICAgIGF1dGhvck5hbWU9XCJKdWxpZXQgTWFpbmFcIlxuICAgICAgICAgICAgICAgICAgdGl0bGU9XCJEZXByZXNzaW9uIGFuZCBjYW1wdXMgbGlmZVwiXG4gICAgICAgICAgICAgICAgICBpbnRybz1cIlRoZSB1bml2ZXJzaXR5IGxpZmUgY29tZXMgd2l0aCBhIGxvdCBvZiBmcmVlZG9tLiBGcmVlZG9tIHRoYXQgbW9zdCBzdHVkZW50cyBoYXZlIG5ldmVyIGV4cGVyaWVuY2VkIGJlZm9yZVwiXG4gICAgICAgICAgICAgICAgICBpbml0aWFscz1cIkpNXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17NH0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XG4gICAgICAgICAgICAgICAgPEFydGljbGVQcmV2aWV3XG4gICAgICAgICAgICAgICAgICBpbWFnZT17aGFuZHN9XG4gICAgICAgICAgICAgICAgICBzbHVnPVwibWVudGFsLWlsbG5lc3Mtc3RpZ21hLWhlbHAtc2Vla2luZy1hbmQtcHVibGljLWhlYWx0aC1wcm9ncmFtc1wiXG4gICAgICAgICAgICAgICAgICBhdXRob3JOYW1lPVwiSGlsbGFyeSBNYW5nJ29saVwiXG4gICAgICAgICAgICAgICAgICB0aXRsZT1cIk1lbnRhbCBpbGxuZXNzIHN0aWdtYSwgaGVscCBzZWVraW5nIGFuZCBwdWJsaWMgaGVhbHRoIHByb2dyYW1zXCJcbiAgICAgICAgICAgICAgICAgIGludHJvPVwiSW4gdGhpcyBhcnRpY2xlLCB3ZSByZXZpZXdlZCB0aGUgZXZpZGVuY2Ugb2Ygd2hldGhlciBsYXJnZXIgc2NhbGUgYW50aS1zdGlnbWEgY2FtcGFpZ25zIGNvdWxkIGxlYWQgdG8gaW5jcmVhc2VkIGxldmVscyBvZiBoZWxwIHNlZWtpbmdcIlxuICAgICAgICAgICAgICAgICAgaW5pdGlhbHM9XCJITVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezR9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxuICAgICAgICAgICAgICAgIDxBcnRpY2xlUHJldmlld1xuICAgICAgICAgICAgICAgICAgaW1hZ2U9e2ludHJvMTAxfVxuICAgICAgICAgICAgICAgICAgc2x1Zz1cImludHJvZHVjdGlvbi10by1tZW50YWwtaGVhbHRoLWRpc29yZGVycy0xMDFcIlxuICAgICAgICAgICAgICAgICAgYXV0aG9yTmFtZT1cIkNoYXJpdHkgV2FpdGhha2FcIlxuICAgICAgICAgICAgICAgICAgdGl0bGU9XCJJbnRyb2R1Y3Rpb24gdG8gbWVudGFsIGhlYWx0aCBkaXNvcmRlcnMgMTAxXCJcbiAgICAgICAgICAgICAgICAgIGludHJvPVwiQXMgdGhlIG5hbWUgc3VnZ2VzdHMsIG1lbnRhbCBoZWFsdGggZGlzb3JkZXJzIGFyZSBpbGxuZXNzIHRoYXQgYWZmZWN0IHRoZSBjb2duaXRpdmUgZmFjdG9yIHRodXMgYWZmZWN0aW5nIGFuIGluZGl2aWR1YWzigJlzIG1vb2QsIGZlZWxpbmcsIHRoaW5raW5nIGFuZCBiZWhhdmlvclwiXG4gICAgICAgICAgICAgICAgICBpbml0aWFscz1cIkNXXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17NH0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XG4gICAgICAgICAgICAgICAgPEFydGljbGVQcmV2aWV3XG4gICAgICAgICAgICAgICAgICBpbWFnZT17aG9wZX1cbiAgICAgICAgICAgICAgICAgIHNsdWc9XCJtZW50YWwtaGVhbHRoLXN1cHBvcnRcIlxuICAgICAgICAgICAgICAgICAgYXV0aG9yTmFtZT1cIlBldGVyIExvYm9yXCJcbiAgICAgICAgICAgICAgICAgIHRpdGxlPVwiTWVudGFsIGhlYWx0aCBzdXBwb3J0XCJcbiAgICAgICAgICAgICAgICAgIGludHJvPVwiSW5jcmVhc2luZyBpbnZlc3RtZW50IGlzIHJlcXVpcmVkIG9uIGFsbCBmcm9udHMgZm9yIG1lbnRhbCBoZWFsdGggYXdhcmVuZXNzIGFuZCB0byBpbmNyZWFzZSB1bmRlcnN0YW5kaW5nIGFuZCBhbHNvIHRvIHJlZHVjZSBzdGlnbWFcIlxuICAgICAgICAgICAgICAgICAgaW5pdGlhbHM9XCJQTFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezR9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxuICAgICAgICAgICAgICAgIDxBcnRpY2xlUHJldmlld1xuICAgICAgICAgICAgICAgICAgaW1hZ2U9e21lZGl0YXRpbmd9XG4gICAgICAgICAgICAgICAgICBzbHVnPVwiYW4tb3ZlcnZpZXctb2YtbWVudGFsLWhlYWx0aC1kaXNvcmRlcnNcIlxuICAgICAgICAgICAgICAgICAgYXV0aG9yTmFtZT1cIlZpY3RvciBTaW1peXVcIlxuICAgICAgICAgICAgICAgICAgdGl0bGU9XCJBbiBvdmVydmlldyBvZiBtZW50YWwgaGVhbHRoIGRpc29yZGVyc1wiXG4gICAgICAgICAgICAgICAgICBpbnRybz1cIk1lbnRhbCBoZWFsdGggY2FuIGhhdmUgdmFyaWFuY2VzIGluIGRlZmluaXRpb25zIGRlcGVuZGluZyBvbiBhbiBpbmRpdmlkdWFs4oCZcyB1bmRlcnN0YW5kaW5nIG9mIHdoYXQgTWVudGFsIGhlYWx0aCByZWFsbHkgaXNcIlxuICAgICAgICAgICAgICAgICAgaW5pdGlhbHM9XCJWU1wiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezR9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxuICAgICAgICAgICAgICAgIDxBcnRpY2xlUHJldmlld1xuICAgICAgICAgICAgICAgICAgaW1hZ2U9e3dlSHVydH1cbiAgICAgICAgICAgICAgICAgIHNsdWc9XCJ3aGF0LWlzLWFueGlldHktYXR0YWNrXCJcbiAgICAgICAgICAgICAgICAgIGF1dGhvck5hbWU9XCJCZW5hcmRldHRlIEFyYW1hXCJcbiAgICAgICAgICAgICAgICAgIHRpdGxlPVwiV2hhdCBpcyBhbnhpZXR5IGF0dGFjaz9cIlxuICAgICAgICAgICAgICAgICAgaW50cm89XCJJZiB5b3UgaGF2ZSBhbiBhbnhpZXR5IGRpc29yZGVyLCB5b3UgbWF5IHJlc3BvbmQgdG8gY2VydGFpbiB0aGluZ3MgYW5kIHNpdHVhdGlvbnMgd2l0aCBmZWFyIGFuZCBkcmVhZFwiXG4gICAgICAgICAgICAgICAgICBpbml0aWFscz1cIkJBXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17NH0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XG4gICAgICAgICAgICAgICAgPEFydGljbGVQcmV2aWV3XG4gICAgICAgICAgICAgICAgICBpbWFnZT17aGFwcHlCYWxsb29uc31cbiAgICAgICAgICAgICAgICAgIHNsdWc9XCJtZW50YWwtaGVhbHRoLWF3YXJlbmVzc1wiXG4gICAgICAgICAgICAgICAgICBhdXRob3JOYW1lPVwiU2FpZCBNYW5zb3VyXCJcbiAgICAgICAgICAgICAgICAgIHRpdGxlPVwiTWVudGFsIGhlYWx0aCBhd2FyZW5lc3NcIlxuICAgICAgICAgICAgICAgICAgaW50cm89XCJNZW50YWwgaGVhbHRoIGF3YXJlbmVzcyBpcyB0aGUgcmVjb2duaXRpb24gdGhhdCBvdXIgcHN5Y2hvbG9naWNhbCB3ZWxsLWJlaW5nIGlzIGFuIGltcG9ydGFudCBwYXJ0IG9mIG91ciBvd24gaGVhbHRoLCBwcm9kdWN0aXZpdHkgYW5kIGhhcHBpbmVzcywgYXMgd2VsbCBhcyB0aGUgd2VsbC1iZWluZyBvZiBvdXIgY29tbXVuaXRpZXNcIlxuICAgICAgICAgICAgICAgICAgaW5pdGlhbHM9XCJTTVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezR9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxuICAgICAgICAgICAgICAgIDxBcnRpY2xlUHJldmlld1xuICAgICAgICAgICAgICAgICAgaW1hZ2U9e2hhcHB5RmFjZX1cbiAgICAgICAgICAgICAgICAgIHNsdWc9XCJtb29kLWRpc29yZGVycy1hbmQtdHJlYXRtZW50XCJcbiAgICAgICAgICAgICAgICAgIGF1dGhvck5hbWU9XCJNdWdvIFRpbW90aHlcIlxuICAgICAgICAgICAgICAgICAgdGl0bGU9XCJNb29kIGRpc29yZGVycyBhbmQgdHJlYXRtZW50XCJcbiAgICAgICAgICAgICAgICAgIGludHJvPVwiTW9vZHMgYXJlIHRoZSBlbW90aW9ucyB0aGF0IGFmZmVjdCBwZW9wbGUgZWFjaCBhbmQgZXZlcnkgZGF5LCBzb21ldGltZXMgcGVvcGxlIGFyZSBzYWQgYW5kIG90aGVyIHRpbWUgdGhleSBhcmUgaGFwcHlcIlxuICAgICAgICAgICAgICAgICAgaW5pdGlhbHM9XCJNVFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlY29uZFNlY3Rpb25cbiIsIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2pzeC1wcm9wcy1uby1zcHJlYWRpbmcgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHdpdGhTdHlsZXMsIEJ1dHRvbiwgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5jb25zdCBCdXR0b25PdXRsaW5lZCA9IHdpdGhTdHlsZXMoe1xuICByb290OiB7XG4gICAgY29sb3I6ICcjMTgxRTRFJyxcbiAgICBib3hTaGFkb3c6ICdub25lJyxcbiAgICB0ZXh0VHJhbnNmb3JtOiAnbm9uZScsXG4gICAgZm9udFNpemU6IDE2LFxuICAgIHBhZGRpbmc6ICc2cHggMTJweCcsXG4gICAgYm9yZGVyOiAnMnB4IHNvbGlkJyxcbiAgICBsaW5lSGVpZ2h0OiAxLjUsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzdERUJCRCcsXG4gICAgYm9yZGVyQ29sb3I6ICcjN0RFQkJEJyxcbiAgICBmb250RmFtaWx5OiBbXG4gICAgICAnLWFwcGxlLXN5c3RlbScsXG4gICAgICAnQmxpbmtNYWNTeXN0ZW1Gb250JyxcbiAgICAgICdcIlNlZ29lIFVJXCInLFxuICAgICAgJ1JvYm90bycsXG4gICAgICAnXCJIZWx2ZXRpY2EgTmV1ZVwiJyxcbiAgICAgICdBcmlhbCcsXG4gICAgICAnc2Fucy1zZXJpZicsXG4gICAgICAnXCJBcHBsZSBDb2xvciBFbW9qaVwiJyxcbiAgICAgICdcIlNlZ29lIFVJIEVtb2ppXCInLFxuICAgICAgJ1wiU2Vnb2UgVUkgU3ltYm9sXCInLFxuICAgIF0uam9pbignLCcpLFxuICAgICcmOmFjdGl2ZSc6IHtcbiAgICAgIGJveFNoYWRvdzogJ25vbmUnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzdERUJCRCcsXG4gICAgICBjb2xvcjogJyMxODFFNEUnLFxuICAgICAgYm9yZGVyQ29sb3I6ICcjN0RFQkJEJyxcbiAgICB9LFxuICAgICcmOmZvY3VzJzoge1xuICAgICAgYm94U2hhZG93OiAnMCAwIDAgMC4ycmVtICM3REVCQkQnLFxuICAgIH0sXG4gICAgJyY6aG92ZXInOiB7XG4gICAgICBib3hTaGFkb3c6ICdub25lJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyM3REVCQkQnLFxuICAgICAgY29sb3I6ICcjMTgxRTRFJyxcbiAgICAgIGJvcmRlckNvbG9yOiAnIzdERUJCRCcsXG4gICAgfSxcbiAgfSxcbn0pKEJ1dHRvbilcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XG4gIHJvb3Q6IHtcbiAgICAnJiRkaXNhYmxlZCc6IHtcbiAgICAgIGJhY2tncm91bmQ6ICdyZ2JhKDAsIDAsIDAsIDAuMTIpJyxcbiAgICAgIGNvbG9yOiAnIzE4MUU0RScsXG4gICAgICBib3hTaGFkb3c6ICdub25lJyxcbiAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgIH0sXG4gIH0sXG4gIGRpc2FibGVkOiB7fSxcbn0pXG5cbmNvbnN0IFNlY29uZGFyeUFwcEJ1dHRvbiA9ICh7IGNoaWxkcmVuLCBvbkNsaWNrLCAuLi5vdGhlcnMgfSkgPT4ge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcblxuICByZXR1cm4gKFxuICAgIDxCdXR0b25PdXRsaW5lZFxuICAgICAgZGlzYWJsZUVsZXZhdGlvblxuICAgICAgey4uLm90aGVyc31cbiAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICBjbGFzc2VzPXt7XG4gICAgICAgIHJvb3Q6IGNsYXNzZXMucm9vdCwgLy8gY2xhc3MgbmFtZSwgZS5nLiBgcm9vdC14YFxuICAgICAgICBkaXNhYmxlZDogY2xhc3Nlcy5kaXNhYmxlZCwgLy8gY2xhc3MgbmFtZSwgZS5nLiBgZGlzYWJsZWQteGBcbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVuIHx8ICdMb2dpbid9XG4gICAgPC9CdXR0b25PdXRsaW5lZD5cbiAgKVxufVxuXG5TZWNvbmRhcnlBcHBCdXR0b24ucHJvcFR5cGVzID0ge1xuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5lbGVtZW50LmlzUmVxdWlyZWQsXG59XG5cblNlY29uZGFyeUFwcEJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIG9uQ2xpY2s6IG51bGwsXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlY29uZGFyeUFwcEJ1dHRvblxuIiwiaW1wb3J0IHsgQm94LCBDb250YWluZXIsIEdyaWQsIFR5cG9ncmFwaHkgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBsb2dvIGZyb20gJy4uLy4uL2ltYWdlcy9sb2dvLnN2ZydcbmltcG9ydCBrZW55YW5GbGFnIGZyb20gJy4uLy4uL2ltYWdlcy9rZW55YW4tZmxhZy5wbmcnXG5cbmNvbnN0IFNpeHRoU2VjdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Qm94IG1pbkhlaWdodD1cIjMwMHB4XCIgcHk9XCIyMHB4XCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnIzFCMjI1QicgfX0+XG4gICAgICA8Q29udGFpbmVyXG4gICAgICAgIG1heFdpZHRoPVwibGdcIlxuICAgICAgICBzdHlsZT17eyBtaW5IZWlnaHQ6ICdpbmhlcml0JywgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fVxuICAgICAgPlxuICAgICAgICA8R3JpZFxuICAgICAgICAgIGNvbnRhaW5lclxuICAgICAgICAgIHNwYWNpbmc9ezJ9XG4gICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17M30+XG4gICAgICAgICAgICA8aW1nIHNyYz17bG9nb30gYWx0PVwic2l0ZS1sb2dvXCIgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcgfX0gLz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs4fT5cbiAgICAgICAgICAgIDxCb3ggZGlzcGxheT1cImZsZXhcIiBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgYWxpZ25JdGVtcz1cImZsZXgtZW5kXCI+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzcmM9e2tlbnlhbkZsYWd9XG4gICAgICAgICAgICAgICAgYWx0PVwia2VueWFuLWZsYWdcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnNjBweCcsIG1hcmdpbkJvdHRvbTogJzIwcHgnIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiPlxuICAgICAgICAgICAgICAgIDxCb3ggY29sb3I9XCJ3aGl0ZVwiIHRleHRBbGlnbj1cImVuZFwiPlxuICAgICAgICAgICAgICAgICAgVmFsaGFsbGEgTWVkaWEgR3JvdXAgY29tcHJpc2VzIG9mIHRlbiBDb21tdW5pY2F0aW9uIGFuZCBNZWRpYVxuICAgICAgICAgICAgICAgICAgVGVjaG5vbG9neSBzdHVkZW50cyBmcm9tIE1hc2VubyBVbml2ZXJzaXR5LCBLZW55YS4gV2UgYWltIGF0XG4gICAgICAgICAgICAgICAgICB0YWNrbGluZyBzb2NpYWwgaW5qdXN0aWNlcywgcG9saXRpY3MsIGlzc3VlcyBhZmZlY3RpbmcgdGhlXG4gICAgICAgICAgICAgICAgICB5b3V0aHMgYW5kIGFueSBvdGhlciBkYXkgdG8gZGF5IGxpdmVzIG9mIHRoZSBjb21tb24gS2VueWFuXG4gICAgICAgICAgICAgICAgICBjaXRpemVuIHRocm91Z2ggdGhlIG1lZGlhLiBPdXIgZ3JvdXAmIzM5O3MgbW90dG8gaXN7JyAnfVxuICAgICAgICAgICAgICAgICAgPGI+V2l0aCB0aGUgc3VuIG9uIG91ciBmYWNlczwvYj5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0JveD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaXh0aFNlY3Rpb25cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEJveCwgVHlwb2dyYXBoeSwgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xuaW1wb3J0IGRpZmZpY3VsdFJvYWQgZnJvbSAnLi4vLi4vaW1hZ2VzL2RpZmZpY3VsdC1wYXRoLnBuZydcbmltcG9ydCBob2xkaW5nSGFuZHMgZnJvbSAnLi4vLi4vaW1hZ2VzL2hvbGRpbmctaGFuZHMuanBnJ1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIHRleHRTaXplU21hbGw6IHtcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcbiAgICAgIGZvbnRTaXplOiAnMnJlbScsXG4gICAgfSxcbiAgfSxcbiAgbmVlZEhlbHA6IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcbiAgICAgIHBvc2l0aW9uOiAndW5zZXQnLFxuICAgIH0sXG4gIH0sXG4gIGhlc2l0YXRlOiB7XG4gICAgd2lkdGg6ICcyMCUnLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGJvdHRvbTogJzMwJScsXG4gICAgbGVmdDogJzUlJyxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcbiAgICAgIHdpZHRoOiAndW5zZXQnLFxuICAgICAgbGVmdDogMCxcbiAgICAgIGJvdHRvbTogMCxcbiAgICAgIHBvc2l0aW9uOiAndW5zZXQnLFxuICAgIH0sXG4gIH0sXG4gIGhpZGVCZ0ltYWdlczoge1xuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xuICAgICAgZGlzcGxheTogJ25vbmUnLFxuICAgIH0sXG4gIH0sXG4gIGNvbnRhaW5lcjoge1xuICAgIGhlaWdodDogJzcwMHB4JyxcbiAgICBwYWRkaW5nOiAnMTBweCcsXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XG4gICAgICBoZWlnaHQ6ICc0MDBweCcsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgfSxcbiAgfSxcbn0pKVxuXG5jb25zdCBUaGlyZFNlY3Rpb24gPSAoKSA9PiB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxuXG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn1cbiAgICAgIG10PVwiNTBweFwiXG4gICAgICBzdHlsZT17e1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMTgxRTRFJyxcbiAgICAgICAgd2lkdGg6ICdpbmhlcml0JyxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke2RpZmZpY3VsdFJvYWR9KWAsXG4gICAgICAgIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnLFxuICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICd0b3AgcmlnaHQnLFxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogJzM1JScsXG4gICAgICB9fVxuICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxuICAgID5cbiAgICAgIDxCb3hcbiAgICAgICAgaGVpZ2h0PVwiZml0LWNvbnRlbnRcIlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubmVlZEhlbHB9XG4gICAgICAgIHpJbmRleD17MX1cbiAgICAgICAgbXQ9XCI1MHB4XCJcbiAgICAgID5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgxXCIgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRTaXplU21hbGx9PlxuICAgICAgICAgIDxCb3ggZm9udFdlaWdodD1cImJvbGRcIiBjb2xvcj1cIndoaXRlXCI+XG4gICAgICAgICAgICBOZWVkIFNvbWVvbmVcbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgIHZhcmlhbnQ9XCJoMVwiXG4gICAgICAgICAgY29tcG9uZW50PVwiZGl2XCJcbiAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRTaXplU21hbGx9XG4gICAgICAgID5cbiAgICAgICAgICA8Qm94IHdpZHRoPVwiMTAwcHhcIiBtcj1cIjEwcHhcIiBmb250V2VpZ2h0PVwiYm9sZFwiIGNvbG9yPVwicHJpbWFyeS5tYWluXCI+XG4gICAgICAgICAgICA8aHIgc3R5bGU9e3sgY29sb3I6ICdpbmhlcml0JywgYm9yZGVyOiAnNHB4IHNvbGlkJyB9fSAvPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDxCb3ggZm9udFdlaWdodD1cImJvbGRcIiBjb2xvcj1cInByaW1hcnkubWFpblwiPlxuICAgICAgICAgICAgdG8gdGFsayB0bz9cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPC9Cb3g+XG4gICAgICA8Qm94IGhlaWdodD1cImZpdC1jb250ZW50XCIgY2xhc3NOYW1lPXtjbGFzc2VzLmhlc2l0YXRlfT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCI+XG4gICAgICAgICAgPEJveCBmb250V2VpZ2h0PVwiYm9sZFwiIGNvbG9yPVwicHJpbWFyeS5tYWluXCI+XG4gICAgICAgICAgICBET04mIzM5O1QgSEVTSVRBVEVcbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIj5cbiAgICAgICAgICA8Qm94IGNvbG9yPVwid2hpdGVcIj5cbiAgICAgICAgICAgIFJlYWNoIG91dCB0byBCZWZyaWVuZGVyc0tlbnlhIHRocm91Z2ggYSBjYWxsIG9ueycgJ31cbiAgICAgICAgICAgIDxhIGhyZWY9XCJ0ZWw6KzI1NDcyMjE3ODE3N1wiIHN0eWxlPXt7IGNvbG9yOiAnaW5oZXJpdCcgfX0+XG4gICAgICAgICAgICAgICsyNTQ3MjIxNzgxNzdcbiAgICAgICAgICAgIDwvYT57JyAnfVxuICAgICAgICAgICAgb3IgZW1haWwgdGhlbSBhdHsnICd9XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPVwibWFpbHRvOmJlZnJpZW5kZXJza2VueWFAZ21haWwuY29tXCJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6ICdpbmhlcml0JyB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBiZWZyaWVuZGVyc2tlbnlhQGdtYWlsLmNvbVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgLiBGdXJ0aGVyIGluZm9ybWF0aW9uIGNhbiBiZSBvYnRhaW5lZCB0aHJvdWdoIHRoZWlyIG9mZmljaWFsIHdlYnNpdGVcbiAgICAgICAgICAgIGF0eycgJ31cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vd3d3LmJlZnJpZW5kZXJza2VueWEub3JnL1wiXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogJ2luaGVyaXQnIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHd3dy5iZWZyaWVuZGVyc2tlbnlhLm9yZy9cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPC9Cb3g+XG4gICAgICA8Qm94XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5oaWRlQmdJbWFnZXN9XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7aG9sZGluZ0hhbmRzfSlgLFxuICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnLFxuICAgICAgICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxuICAgICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgICBsZWZ0OiAnMzAlJyxcbiAgICAgICAgICBib3JkZXJUb3BSaWdodFJhZGl1czogJzFyZW0nLFxuICAgICAgICAgIGJvcmRlclRvcExlZnRSYWRpdXM6ICcxcmVtJyxcbiAgICAgICAgfX1cbiAgICAgICAgaGVpZ2h0PVwiMzAlXCJcbiAgICAgICAgd2lkdGg9XCIyMDBweFwiXG4gICAgICAvPlxuICAgIDwvQm94PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoaXJkU2VjdGlvblxuIiwiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvanN4LXByb3BzLW5vLXNwcmVhZGluZyAqL1xuaW1wb3J0IHtcbiAgQm94LFxuICBCdXR0b24sXG4gIERpYWxvZyxcbiAgRGlhbG9nQWN0aW9ucyxcbiAgRGlhbG9nQ29udGVudCxcbiAgRGlhbG9nQ29udGVudFRleHQsXG4gIERpYWxvZ1RpdGxlLFxuICBTbGlkZSxcbiAgdXNlTWVkaWFRdWVyeSxcbiAgdXNlVGhlbWUsXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHF1ZXN0aW9uTWFyayBmcm9tICcuLi8uLi9pbWFnZXMvcXVlc3Rpb24uc3ZnJ1xuXG5jb25zdCBUcmFuc2l0aW9uID0gUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBUcmFuc2l0aW9uKHByb3BzLCByZWYpIHtcbiAgcmV0dXJuIDxTbGlkZSBkaXJlY3Rpb249XCJkb3duXCIgcmVmPXtyZWZ9IHsuLi5wcm9wc30gLz5cbn0pXG5cbmNvbnN0IFdob0FyZVdlRGlhbG9nID0gKHsgb3Blbiwgc2V0T3BlbiB9KSA9PiB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKVxuXG4gIGNvbnN0IGZ1bGxTY3JlZW4gPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJykpXG5cbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XG4gICAgc2V0T3BlbihmYWxzZSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPERpYWxvZ1xuICAgICAgb3Blbj17b3Blbn1cbiAgICAgIFRyYW5zaXRpb25Db21wb25lbnQ9e1RyYW5zaXRpb259XG4gICAgICBmdWxsU2NyZWVuPXtmdWxsU2NyZWVufVxuICAgICAgbWF4V2lkdGg9XCJzbVwiXG4gICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cbiAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJhbGVydC1kaWFsb2ctd2hvLXdlLWFyZVwiXG4gICAgICBzdHlsZT17eyBtaW5IZWlnaHQ6ICczMDBweCcgfX1cbiAgICA+XG4gICAgICA8RGlhbG9nVGl0bGU+XG4gICAgICAgIDxCb3ggZGlzcGxheT1cImZsZXhcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIj5cbiAgICAgICAgICA8Qm94IGZvbnRXZWlnaHQ9XCJib2xkXCIgbXI9XCI1cHhcIiBjb2xvcj1cInNlY29uZGFyeS5tYWluXCI+XG4gICAgICAgICAgICBXaG8gYXJlIHdlXG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPXtxdWVzdGlvbk1hcmt9XG4gICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6ICc1MHB4JyB9fVxuICAgICAgICAgICAgYWx0PVwicXVlc3Rpb24gbWFya1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0RpYWxvZ1RpdGxlPlxuICAgICAgPERpYWxvZ0NvbnRlbnQ+XG4gICAgICAgIDxEaWFsb2dDb250ZW50VGV4dCBpZD1cImFsZXJ0LWRpYWxvZy13aG8td2UtYXJlXCI+XG4gICAgICAgICAgVmFsaGFsbGEgTWVkaWEgR3JvdXAgY29tcHJpc2VzIG9mIHRlbiBDb21tdW5pY2F0aW9uIGFuZCBNZWRpYVxuICAgICAgICAgIFRlY2hub2xvZ3kgc3R1ZGVudHMgZnJvbSBNYXNlbm8gVW5pdmVyc2l0eSwgS2VueWEuIFdlIGFpbSBhdCB0YWNrbGluZ1xuICAgICAgICAgIHNvY2lhbCBpbmp1c3RpY2VzLCBwb2xpdGljcywgaXNzdWVzIGFmZmVjdGluZyB0aGUgeW91dGhzIGFuZCBhbnkgb3RoZXJcbiAgICAgICAgICBkYXkgdG8gZGF5IGxpdmVzIG9mIHRoZSBjb21tb24gS2VueWFuIGNpdGl6ZW4gdGhyb3VnaCB0aGUgbWVkaWEuIE91clxuICAgICAgICAgIGdyb3VwJiMzOTtzIG1vdHRvIGlzIDxiPldpdGggdGhlIHN1biBvbiBvdXIgZmFjZXM8L2I+LiBUaGlzIHdlYnNpdGUgaXNcbiAgICAgICAgICBidWlsdCBzcGVjaWZpY2FsbHkgdG8gYWRkcmVzcyBpc3N1ZXMgb2YgbWVudGFsIGhlYWx0aCBhbmQgZGVwcmVzc3Npb25cbiAgICAgICAgICBhbW91bmcgdW5pdmVyc2l0eSBzdHVkZW50cy4gQnkgZG9pbmcgc28sIHdlIGJlbGlldmUgdGhhdCB3ZSB3b3VsZCBiZVxuICAgICAgICAgIHNlbnNpdGl6aW5nIG1vcmUgb24gdGhlIGZhY3QgdGhhdCB1bml2ZXJzaXR5IHN0dWRlbnRzIGFyZSBhbHNvXG4gICAgICAgICAgYWR2ZXJzZWx5IGFmZmVjdGVkIGFuZCBtaXRpZ2F0aW9ucyBzaG91bGQgYmUgcHV0IGludG8gY29uc2lkZXJhdGlvbiBieVxuICAgICAgICAgIGNvbmNlcm5lZCBzdGFrZWhvbGRlcnMuXG4gICAgICAgIDwvRGlhbG9nQ29udGVudFRleHQ+XG4gICAgICA8L0RpYWxvZ0NvbnRlbnQ+XG4gICAgICA8RGlhbG9nQWN0aW9ucz5cbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+Q2xvc2U8L0J1dHRvbj5cbiAgICAgIDwvRGlhbG9nQWN0aW9ucz5cbiAgICA8L0RpYWxvZz5cbiAgKVxufVxuXG5XaG9BcmVXZURpYWxvZy5wcm9wVHlwZXMgPSB7XG4gIG9wZW46IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIHNldE9wZW46IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59XG5cbmV4cG9ydCBkZWZhdWx0IFdob0FyZVdlRGlhbG9nXG4iLCJpbXBvcnQge1xuICBCdXR0b24sXG4gIENpcmN1bGFyUHJvZ3Jlc3MsXG4gIERpYWxvZyxcbiAgRGlhbG9nQWN0aW9ucyxcbiAgRGlhbG9nQ29udGVudCxcbiAgRGlhbG9nVGl0bGUsXG4gIHVzZU1lZGlhUXVlcnksXG4gIHVzZVRoZW1lLFxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5jb25zdCBFbWJlZGVkVmlkZW9EaWFsb2cgPSAoeyBvcGVuLCBzZXRPcGVuIH0pID0+IHtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpXG5cbiAgY29uc3QgW2xvYWRpbmdWaWRlbywgc2V0TG9hZGluZ1ZpZGVvXSA9IHVzZVN0YXRlKHRydWUpXG5cbiAgY29uc3QgZnVsbFNjcmVlbiA9IHVzZU1lZGlhUXVlcnkodGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKSlcblxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcbiAgICBzZXRMb2FkaW5nVmlkZW8odHJ1ZSlcbiAgICBzZXRPcGVuKGZhbHNlKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8RGlhbG9nXG4gICAgICBmdWxsU2NyZWVuPXtmdWxsU2NyZWVufVxuICAgICAgbWF4V2lkdGg9XCJtZFwiXG4gICAgICBvcGVuPXtvcGVufVxuICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XG4gICAgICBhcmlhLWxhYmVsbGVkYnk9XCJyZXNwb25zaXZlLWRpYWxvZy10aXRsZVwiXG4gICAgPlxuICAgICAgPERpYWxvZ1RpdGxlIGlkPVwicmVzcG9uc2l2ZS1kaWFsb2ctdGl0bGVcIj5cbiAgICAgICAgTWVudGFsIEhlYWx0aCBUZXN0aW1vbmlhbC4gRXBpc29kZSAxXG4gICAgICA8L0RpYWxvZ1RpdGxlPlxuICAgICAgPERpYWxvZ0NvbnRlbnRcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7bG9hZGluZ1ZpZGVvICYmIChcbiAgICAgICAgICA8Q2lyY3VsYXJQcm9ncmVzc1xuICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgc2l6ZT17NTB9XG4gICAgICAgICAgICB0aGlja25lc3M9ezV9XG4gICAgICAgICAgICBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJyB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIDxpZnJhbWVcbiAgICAgICAgICB3aWR0aD17ZnVsbFNjcmVlbiA/IDMyMCA6IDU2MH1cbiAgICAgICAgICBoZWlnaHQ9e2Z1bGxTY3JlZW4gPyAyMDAgOiAzMTV9XG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvYVExQzZoazRuLW9cIlxuICAgICAgICAgIHRpdGxlPVwiTWVudGFsIEhlYWx0aCBUZXN0aW1vbmlhbFwiXG4gICAgICAgICAgZnJhbWVCb3JkZXI9XCIwXCJcbiAgICAgICAgICBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBjbGlwYm9hcmQtd3JpdGU7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlO1wiXG4gICAgICAgICAgYWxsb3dGdWxsU2NyZWVuXG4gICAgICAgICAgbG9hZGluZz1cImxhenlcIlxuICAgICAgICAgIG9uTG9hZD17KCkgPT4gc2V0TG9hZGluZ1ZpZGVvKGZhbHNlKX1cbiAgICAgICAgLz5cbiAgICAgIDwvRGlhbG9nQ29udGVudD5cbiAgICAgIDxEaWFsb2dBY3Rpb25zPlxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5DbG9zZTwvQnV0dG9uPlxuICAgICAgPC9EaWFsb2dBY3Rpb25zPlxuICAgIDwvRGlhbG9nPlxuICApXG59XG5cbkVtYmVkZWRWaWRlb0RpYWxvZy5wcm9wVHlwZXMgPSB7XG4gIG9wZW46IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgc2V0T3BlbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgRW1iZWRlZFZpZGVvRGlhbG9nXG4iLCJpbXBvcnQgeyBDb250YWluZXIsIG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBWaWRlb1BhcGVyIGZyb20gJy4vVmlkZW9QYXBlcidcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICBjb250YWluZXI6IHtcbiAgICBtYXJnaW5Ub3A6ICc1MHB4JyxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XG4gICAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgfSxcbiAgfSxcbn0pKVxuXG5jb25zdCBIb21lVmlkZW9TZWN0aW9uRG93biA9ICgpID0+IHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxuICAgICAgPFZpZGVvUGFwZXIgLz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lVmlkZW9TZWN0aW9uRG93blxuIiwiaW1wb3J0IHsgQm94LCBQYXBlciwgVHlwb2dyYXBoeSwgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xuaW1wb3J0IHsgQWNjZXNzVGltZSwgUGxheUFycm93IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQ29udGFpbmVkQmx1ZUJ1dHRvbiBmcm9tICcuLi9Db250YWluZWRCbHVlQnV0dG9uJ1xuaW1wb3J0IG1lbnRhbEhlYWx0aEltYWdlIGZyb20gJy4uLy4uLy4uL2ltYWdlcy9tZW50YWwtaGVhbHRoLW1hdHRlcnMuanBnJ1xuaW1wb3J0IG1lbnRhbEtlIGZyb20gJy4uLy4uLy4uL2ltYWdlcy9tZW50YWxrZS5zdmcnXG5pbXBvcnQgRW1iZWRlZFZpZGVvRGlhbG9nIGZyb20gJy4vRW1iZWRlZFZpZGVvRGlhbG9nJ1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIHdhdGNoVmlkZW9QYXBlcjoge1xuICAgIHdpZHRoOiAnNTAlJyxcbiAgICB6SW5kZXg6IDEwMCxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBib3R0b206ICctMzAlJyxcbiAgICBsZWZ0OiAnMjIlJyxcbiAgICBwYWRkaW5nOiAnMTBweCcsXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XG4gICAgICB3aWR0aDogJ2F1dG8nLFxuICAgICAgbGVmdDogMCxcbiAgICAgIHJpZ2h0OiAwLFxuICAgICAgYm90dG9tOiAwLFxuICAgICAgcG9zaXRpb246ICd1bnNldCcsXG4gICAgfSxcbiAgfSxcbiAgaW1hZ2U6IHtcbiAgICB3aWR0aDogJzIwMHB4JyxcbiAgICBoZWlnaHQ6ICcyMDBweCcsXG4gICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7bWVudGFsSGVhbHRoSW1hZ2V9KWAsXG4gICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXG4gICAgYmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCcsXG4gICAgYm9yZGVyUmFkaXVzOiAnMXJlbScsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzIzMjc4YScsXG4gICAgYmFja2dyb3VuZEJsZW5kTW9kZTogJ2RpZmZlcmVuY2UnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIG1hcmdpbkJvdHRvbTogJzIwcHgnLFxuICAgIH0sXG4gIH0sXG5cbiAgaW5mbzoge1xuICAgIG1hcmdpbjogJzIwcHggMjVweCcsXG4gICAgd2lkdGg6ICc2MCUnLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xuICAgICAgbWFyZ2luOiAwLFxuICAgICAgd2lkdGg6ICdhdXRvJyxcbiAgICB9LFxuICB9LFxufSkpXG5cbmNvbnN0IFZpZGVvUGFwZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxuXG4gIGNvbnN0IFtvcGVuVmlkZW9EaWFsb2csIHNldE9wZW5WaWRlb0RpYWxvZ10gPSB1c2VTdGF0ZShmYWxzZSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8RW1iZWRlZFZpZGVvRGlhbG9nIG9wZW49e29wZW5WaWRlb0RpYWxvZ30gc2V0T3Blbj17c2V0T3BlblZpZGVvRGlhbG9nfSAvPlxuXG4gICAgICA8UGFwZXJcbiAgICAgICAgdmFyaWFudD1cImVsZXZhdGlvblwiXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy53YXRjaFZpZGVvUGFwZXJ9XG4gICAgICAgIGVsZXZhdGlvbj17M31cbiAgICAgID5cbiAgICAgICAgPEJveFxuICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIlxuICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgIGZsZXhXcmFwPVwid3JhcFwiXG4gICAgICAgID5cbiAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZX0+XG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7bWVudGFsS2V9KWAsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnNDBweCcsXG4gICAgICAgICAgICAgICAgd2lkdGg6ICc3MHB4JyxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JyxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvbnRhaW4nLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgIHJpZ2h0OiAnMTBweCcsXG4gICAgICAgICAgICAgICAgdG9wOiAnNXB4JyxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnNDBweCcsXG4gICAgICAgICAgICAgICAgd2lkdGg6ICcxMDBweCcsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgbGVmdDogJzEwcHgnLFxuICAgICAgICAgICAgICAgIGJvdHRvbTogJzVweCcsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiPlxuICAgICAgICAgICAgICAgIDxCb3ggZm9udFdlaWdodD1cImJvbGRcIiBjb2xvcj1cIndoaXRlXCI+XG4gICAgICAgICAgICAgICAgICBFUCAxXG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29tcG9uZW50PVwiZGl2XCI+XG4gICAgICAgICAgICAgICAgPEJveCBmb250V2VpZ2h0PVwiYm9sZFwiIGNvbG9yPVwid2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgIFZhbGhhbGxhIEdyb3VwXG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgICAgICAgZmxleEdyb3c9ezF9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW5mb31cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIj5cbiAgICAgICAgICAgICAgPEJveCBmb250V2VpZ2h0PVwiYm9sZFwiIGNvbG9yPVwic2Vjb25kYXJ5Lm1haW5cIj5cbiAgICAgICAgICAgICAgICBFcGlzb2RlIDFcbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICB2YXJpYW50PVwiaDVcIlxuICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6ICcxNXB4JywgbWFyZ2luQm90dG9tOiAnMTVweCcgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEJveCBmb250V2VpZ2h0PVwiYm9sZFwiIGNvbG9yPVwic2Vjb25kYXJ5Lm1haW5cIj5cbiAgICAgICAgICAgICAgICBBIHByZW1pZXIgb2YgZGVwcmVzc2lvbiBhbW9uZyB1bml2ZXJzaXR5IHN0dWRlbnRzXG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCI+XG4gICAgICAgICAgICAgIDxCb3ggY29sb3I9XCIjNzU3NTc1XCI+XG4gICAgICAgICAgICAgICAgSW4gdGhpcyBlcGlzb2RlLCBhIE1hc2VubyBVbml2ZXJzaXR5IHN0dWRlbnQgd2hvIGdvZXMgYnkgdGhlXG4gICAgICAgICAgICAgICAgbmFtZSBTaWx2aWEgQW5pdGEgc2hhcmVzIGhlciBzaWRlIG9mIHN0b3J5IG9uIGhvdyBkZXByZXNzaW9uXG4gICAgICAgICAgICAgICAgdG9vayBhIHRvbGwgb24gaGVyIGxpZmUuXG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuXG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCJcbiAgICAgICAgICAgICAgbXQ9XCIxNXB4XCJcbiAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxDb250YWluZWRCbHVlQnV0dG9uXG4gICAgICAgICAgICAgICAgc3RhcnRJY29uPXs8UGxheUFycm93IGh0bWxDb2xvcj1cIndoaXRlXCIgZm9udFNpemU9XCJtZWRpdW1cIiAvPn1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuVmlkZW9EaWFsb2codHJ1ZSl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBXYXRjaCBlcGlzb2RlXG4gICAgICAgICAgICAgIDwvQ29udGFpbmVkQmx1ZUJ1dHRvbj5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiYm9keTJcIlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImRpdlwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEFjY2Vzc1RpbWUgaHRtbENvbG9yPVwiIzE4MUU0RVwiIC8+XG4gICAgICAgICAgICAgICAgPEJveCBmb250V2VpZ2h0PVwiYm9sZFwiIGNvbG9yPVwic2Vjb25kYXJ5Lm1haW5cIiBtbD1cIjVweFwiPlxuICAgICAgICAgICAgICAgICAgOCBtaW5zXG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvUGFwZXI+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVmlkZW9QYXBlclxuIiwiaW1wb3J0IHtcbiAgQm94LFxuICBCdXR0b24sXG4gIENpcmN1bGFyUHJvZ3Jlc3MsXG4gIERpYWxvZyxcbiAgRGlhbG9nQWN0aW9ucyxcbiAgRGlhbG9nQ29udGVudCxcbiAgRGlhbG9nVGl0bGUsXG4gIFNuYWNrYmFyLFxuICBUZXh0RmllbGQsXG4gIHVzZU1lZGlhUXVlcnksXG4gIHVzZVRoZW1lLFxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgQWxlcnQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiJ1xuaW1wb3J0IFNlY29uZGFyeUFwcEJ1dHRvbiBmcm9tICcuLi9TZWNvbmRhcnlBcHBCdXR0b24nXG5cbmNvbnN0IE5ld3NMZXR0ZXJEaWFsb2cgPSAoeyBvcGVuLCBzZXRPcGVuIH0pID0+IHtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpXG5cbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJylcblxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJylcblxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3QgW29wZW5TbmFjaywgc2V0T3BlblNuYWNrXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IGZ1bGxTY3JlZW4gPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJykpXG5cbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XG4gICAgc2V0T3BlbihmYWxzZSlcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUNsb3NlU25hY2sgPSAoZXZlbnQsIHJlYXNvbikgPT4ge1xuICAgIGlmIChyZWFzb24gPT09ICdjbGlja2F3YXknKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBzZXRPcGVuU25hY2soZmFsc2UpXG4gIH1cblxuICBjb25zdCBoYW5kbGVPblN1Ym1pdCA9ICgpID0+IHtcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSlcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldE9wZW5TbmFjayh0cnVlKVxuICAgICAgc2V0T3BlbihmYWxzZSlcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSlcbiAgICB9LCAzMDAwKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFNuYWNrYmFyXG4gICAgICAgIG9wZW49e29wZW5TbmFja31cbiAgICAgICAgYXV0b0hpZGVEdXJhdGlvbj17NDAwMH1cbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VTbmFja31cbiAgICAgICAgYW5jaG9yT3JpZ2luPXt7IHZlcnRpY2FsOiAndG9wJywgaG9yaXpvbnRhbDogJ2NlbnRlcicgfX1cbiAgICAgID5cbiAgICAgICAgPEFsZXJ0IHNldmVyaXR5PVwic3VjY2Vzc1wiIG9uQ2xvc2U9e2hhbmRsZUNsb3NlU25hY2t9PlxuICAgICAgICAgIFlvdSBoYXZlIGJlZW4gYWRkZWQgdG8gb3VyIG5ld3NsZXR0ZXIgbGlzdCFcbiAgICAgICAgPC9BbGVydD5cbiAgICAgIDwvU25hY2tiYXI+XG4gICAgICA8RGlhbG9nXG4gICAgICAgIGZ1bGxTY3JlZW49e2Z1bGxTY3JlZW59XG4gICAgICAgIG1heFdpZHRoPVwibWRcIlxuICAgICAgICBvcGVuPXtvcGVufVxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibmV3c2xldHRlci1kaWFsb2ctdGl0bGVcIlxuICAgICAgPlxuICAgICAgICA8RGlhbG9nVGl0bGUgaWQ9XCJuZXdzbGV0dGVyLWRpYWxvZy10aXRsZVwiPk5ld3NMZXR0ZXI8L0RpYWxvZ1RpdGxlPlxuICAgICAgICA8RGlhbG9nQ29udGVudD5cbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBpZD1cInVzZXItbmFtZVwiXG4gICAgICAgICAgICAgIGRpc2FibGVkPXtpc0xvYWRpbmd9XG4gICAgICAgICAgICAgIG1hcmdpbj1cImRlbnNlXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJZb3VyIE5hbWVcIlxuICAgICAgICAgICAgICB2YWx1ZT17bmFtZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZS50cmltKCkpfVxuICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8Qm94IG10PVwiMTVweFwiIC8+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIGlkPVwidXNlci1lbWFpbFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzTG9hZGluZ31cbiAgICAgICAgICAgICAgbWFyZ2luPVwiZGVuc2VcIlxuICAgICAgICAgICAgICBsYWJlbD1cIllvdXIgRW1haWxcIlxuICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUudHJpbSgpKX1cbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8Qm94IG10PVwiMTVweFwiIC8+XG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFNlY29uZGFyeUFwcEJ1dHRvblxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXshKGVtYWlsICYmIG5hbWUpIHx8IGlzTG9hZGluZ31cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVPblN1Ym1pdH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFN1YnNjcmliZVxuICAgICAgICAgICAgICA8L1NlY29uZGFyeUFwcEJ1dHRvbj5cbiAgICAgICAgICAgICAge2lzTG9hZGluZyAmJiAoXG4gICAgICAgICAgICAgICAgPENpcmN1bGFyUHJvZ3Jlc3NcbiAgICAgICAgICAgICAgICAgIHNpemU9ezI1fVxuICAgICAgICAgICAgICAgICAgdGhpY2tuZXNzPXs1fVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvRGlhbG9nQ29udGVudD5cbiAgICAgICAgPERpYWxvZ0FjdGlvbnM+XG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+Q2xvc2U8L0J1dHRvbj5cbiAgICAgICAgPC9EaWFsb2dBY3Rpb25zPlxuICAgICAgPC9EaWFsb2c+XG4gICAgPC8+XG4gIClcbn1cblxuTmV3c0xldHRlckRpYWxvZy5wcm9wVHlwZXMgPSB7XG4gIG9wZW46IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIHNldE9wZW46IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5ld3NMZXR0ZXJEaWFsb2dcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3ByZWFjdCdcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAnXG5pbXBvcnQgU2Nyb2xsVG9Ub3AgZnJvbSAnLi9TY3JvbGxUb1RvcCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIHJldHVybiAoXG4gICAgPFJvdXRlcj5cbiAgICAgIDxTY3JvbGxUb1RvcCAvPlxuICAgICAgPEFwcCAvPlxuICAgIDwvUm91dGVyPlxuICApXG59XG5cbnJlbmRlcig8SW5kZXggLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpXG4iLCJpbXBvcnQgeyBDb250YWluZXIsIG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygoKSA9PiAoe1xuICByb290OiB7XG4gICAgJyYgPiBwJzoge1xuICAgICAgZm9udFNpemU6ICcxLjE1cmVtJyxcbiAgICB9LFxuICB9LFxufSkpXG5cbmNvbnN0IFByaXZhY3kgPSAoKSA9PiB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBtYXhXaWR0aD1cIm1kXCIgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgPGgyIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XG4gICAgICAgIDxiPlBSSVZBQ1kgUE9MSUNZPC9iPlxuICAgICAgPC9oMj5cbiAgICAgIDxwPkVmZmVjdGl2ZSBkYXRlOiAyMDIxLTA5LTAxPC9wPlxuICAgICAgPHA+XG4gICAgICAgIDEuIDxiPkludHJvZHVjdGlvbjwvYj5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICBXZWxjb21lIHRvIDxiPiBWYWxoYWxsYSBNZWRpYSBHcm91cDwvYj4uXG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgPGI+VmFsaGFsbGEgTWVkaWEgR3JvdXA8L2I+ICjigJx1c+KAnSwg4oCcd2XigJ0sIG9yIOKAnG91cuKAnSkgb3BlcmF0ZXN7JyAnfVxuICAgICAgICA8Yj5tYXNlbm9tZW50YWwuY29tPC9iPiAoaGVyZWluYWZ0ZXIgcmVmZXJyZWQgdG8gYXMgPGI+4oCcU2VydmljZeKAnTwvYj4pLlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIE91ciBQcml2YWN5IFBvbGljeSBnb3Zlcm5zIHlvdXIgdmlzaXQgdG8gPGI+bWFzZW5vbWVudGFsLmNvbTwvYj4sIGFuZFxuICAgICAgICBleHBsYWlucyBob3cgd2UgY29sbGVjdCwgc2FmZWd1YXJkIGFuZCBkaXNjbG9zZSBpbmZvcm1hdGlvbiB0aGF0IHJlc3VsdHNcbiAgICAgICAgZnJvbSB5b3VyIHVzZSBvZiBvdXIgU2VydmljZS5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICBXZSB1c2UgeW91ciBkYXRhIHRvIHByb3ZpZGUgYW5kIGltcHJvdmUgU2VydmljZS4gQnkgdXNpbmcgU2VydmljZSwgeW91XG4gICAgICAgIGFncmVlIHRvIHRoZSBjb2xsZWN0aW9uIGFuZCB1c2Ugb2YgaW5mb3JtYXRpb24gaW4gYWNjb3JkYW5jZSB3aXRoIHRoaXNcbiAgICAgICAgcG9saWN5LiBVbmxlc3Mgb3RoZXJ3aXNlIGRlZmluZWQgaW4gdGhpcyBQcml2YWN5IFBvbGljeSwgdGhlIHRlcm1zIHVzZWRcbiAgICAgICAgaW4gdGhpcyBQcml2YWN5IFBvbGljeSBoYXZlIHRoZSBzYW1lIG1lYW5pbmdzIGFzIGluIG91ciBUZXJtcyBhbmRcbiAgICAgICAgQ29uZGl0aW9ucy5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICBPdXIgVGVybXMgYW5kIENvbmRpdGlvbnMgKDxiPuKAnFRlcm1z4oCdPC9iPikgZ292ZXJuIGFsbCB1c2Ugb2Ygb3VyIFNlcnZpY2VcbiAgICAgICAgYW5kIHRvZ2V0aGVyIHdpdGggdGhlIFByaXZhY3kgUG9saWN5IGNvbnN0aXR1dGVzIHlvdXIgYWdyZWVtZW50IHdpdGggdXNcbiAgICAgICAgKDxiPuKAnGFncmVlbWVudOKAnTwvYj4pLlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIDIuIDxiPkRlZmluaXRpb25zPC9iPlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIDxiPlNFUlZJQ0U8L2I+IG1lYW5zIHRoZSBtYXNlbm9tZW50YWwuY29tIHdlYnNpdGUgb3BlcmF0ZWQgYnkgRXF1YXRvclxuICAgICAgICBUaW1lcyBNZWRpYS5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICA8Yj5QRVJTT05BTCBEQVRBPC9iPiBtZWFucyBkYXRhIGFib3V0IGEgbGl2aW5nIGluZGl2aWR1YWwgd2hvIGNhbiBiZVxuICAgICAgICBpZGVudGlmaWVkIGZyb20gdGhvc2UgZGF0YSAob3IgZnJvbSB0aG9zZSBhbmQgb3RoZXIgaW5mb3JtYXRpb24gZWl0aGVyXG4gICAgICAgIGluIG91ciBwb3NzZXNzaW9uIG9yIGxpa2VseSB0byBjb21lIGludG8gb3VyIHBvc3Nlc3Npb24pLlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIDxiPlVTQUdFIERBVEE8L2I+IGlzIGRhdGEgY29sbGVjdGVkIGF1dG9tYXRpY2FsbHkgZWl0aGVyIGdlbmVyYXRlZCBieVxuICAgICAgICB0aGUgdXNlIG9mIFNlcnZpY2Ugb3IgZnJvbSBTZXJ2aWNlIGluZnJhc3RydWN0dXJlIGl0c2VsZiAoZm9yIGV4YW1wbGUsXG4gICAgICAgIHRoZSBkdXJhdGlvbiBvZiBhIHBhZ2UgdmlzaXQpLlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIDxiPkNPT0tJRVM8L2I+IGFyZSBzbWFsbCBmaWxlcyBzdG9yZWQgb24geW91ciBkZXZpY2UgKGNvbXB1dGVyIG9yIG1vYmlsZVxuICAgICAgICBkZXZpY2UpLlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIDxiPkRBVEEgQ09OVFJPTExFUjwvYj4gbWVhbnMgYSBuYXR1cmFsIG9yIGxlZ2FsIHBlcnNvbiB3aG8gKGVpdGhlciBhbG9uZVxuICAgICAgICBvciBqb2ludGx5IG9yIGluIGNvbW1vbiB3aXRoIG90aGVyIHBlcnNvbnMpIGRldGVybWluZXMgdGhlIHB1cnBvc2VzIGZvclxuICAgICAgICB3aGljaCBhbmQgdGhlIG1hbm5lciBpbiB3aGljaCBhbnkgcGVyc29uYWwgZGF0YSBhcmUsIG9yIGFyZSB0byBiZSxcbiAgICAgICAgcHJvY2Vzc2VkLiBGb3IgdGhlIHB1cnBvc2Ugb2YgdGhpcyBQcml2YWN5IFBvbGljeSwgd2UgYXJlIGEgRGF0YVxuICAgICAgICBDb250cm9sbGVyIG9mIHlvdXIgZGF0YS5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICA8Yj5EQVRBIFBST0NFU1NPUlMgKE9SIFNFUlZJQ0UgUFJPVklERVJTKTwvYj4gbWVhbnMgYW55IG5hdHVyYWwgb3IgbGVnYWxcbiAgICAgICAgcGVyc29uIHdobyBwcm9jZXNzZXMgdGhlIGRhdGEgb24gYmVoYWxmIG9mIHRoZSBEYXRhIENvbnRyb2xsZXIuIFdlIG1heVxuICAgICAgICB1c2UgdGhlIHNlcnZpY2VzIG9mIHZhcmlvdXMgU2VydmljZSBQcm92aWRlcnMgaW4gb3JkZXIgdG8gcHJvY2VzcyB5b3VyXG4gICAgICAgIGRhdGEgbW9yZSBlZmZlY3RpdmVseS5cbiAgICAgIDwvcD57JyAnfVxuICAgICAgPHA+XG4gICAgICAgIDxiPkRBVEEgU1VCSkVDVDwvYj4gaXMgYW55IGxpdmluZyBpbmRpdmlkdWFsIHdobyBpcyB0aGUgc3ViamVjdCBvZlxuICAgICAgICBQZXJzb25hbCBEYXRhLlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIDxiPlRIRSBVU0VSPC9iPiBpcyB0aGUgaW5kaXZpZHVhbCB1c2luZyBvdXIgU2VydmljZS4gVGhlIFVzZXJcbiAgICAgICAgY29ycmVzcG9uZHMgdG8gdGhlIERhdGEgU3ViamVjdCwgd2hvIGlzIHRoZSBzdWJqZWN0IG9mIFBlcnNvbmFsIERhdGEuXG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgMy4gPGI+SW5mb3JtYXRpb24gQ29sbGVjdGlvbiBhbmQgVXNlPC9iPlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIFdlIGNvbGxlY3Qgc2V2ZXJhbCBkaWZmZXJlbnQgdHlwZXMgb2YgaW5mb3JtYXRpb24gZm9yIHZhcmlvdXMgcHVycG9zZXNcbiAgICAgICAgdG8gcHJvdmlkZSBhbmQgaW1wcm92ZSBvdXIgU2VydmljZSB0byB5b3UuXG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgNC4gPGI+VHlwZXMgb2YgRGF0YSBDb2xsZWN0ZWQ8L2I+XG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgPGI+UGVyc29uYWwgRGF0YTwvYj5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICBXaGlsZSB1c2luZyBvdXIgU2VydmljZSwgd2UgbWF5IGFzayB5b3UgdG8gcHJvdmlkZSB1cyB3aXRoIGNlcnRhaW5cbiAgICAgICAgcGVyc29uYWxseSBpZGVudGlmaWFibGUgaW5mb3JtYXRpb24gdGhhdCBjYW4gYmUgdXNlZCB0byBjb250YWN0IG9yXG4gICAgICAgIGlkZW50aWZ5IHlvdSAoPGI+4oCcUGVyc29uYWwgRGF0YeKAnTwvYj4pLiBQZXJzb25hbGx5IGlkZW50aWZpYWJsZVxuICAgICAgICBpbmZvcm1hdGlvbiBtYXkgaW5jbHVkZSwgYnV0IGlzIG5vdCBsaW1pdGVkIHRvOlxuICAgICAgPC9wPlxuICAgICAgPHA+MC4xLiBFbWFpbCBhZGRyZXNzPC9wPlxuICAgICAgPHA+MC4yLiBGaXJzdCBuYW1lIGFuZCBsYXN0IG5hbWU8L3A+XG4gICAgICA8cD4wLjMuIFBob25lIG51bWJlcjwvcD5cbiAgICAgIDxwPjAuNS4gQ29va2llcyBhbmQgVXNhZ2UgRGF0YTwvcD5cbiAgICAgIDxwPlxuICAgICAgICBXZSBtYXkgdXNlIHlvdXIgUGVyc29uYWwgRGF0YSB0byBjb250YWN0IHlvdSB3aXRoIG5ld3NsZXR0ZXJzLCBtYXJrZXRpbmdcbiAgICAgICAgb3IgcHJvbW90aW9uYWwgbWF0ZXJpYWxzIGFuZCBvdGhlciBpbmZvcm1hdGlvbiB0aGF0IG1heSBiZSBvZiBpbnRlcmVzdFxuICAgICAgICB0byB5b3UuIFlvdSBtYXkgb3B0IG91dCBvZiByZWNlaXZpbmcgYW55LCBvciBhbGwsIG9mIHRoZXNlXG4gICAgICAgIGNvbW11bmljYXRpb25zIGZyb20gdXMgYnkgZm9sbG93aW5nIHRoZSB1bnN1YnNjcmliZSBsaW5rLlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIDxiPlVzYWdlIERhdGE8L2I+XG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgV2UgbWF5IGFsc28gY29sbGVjdCBpbmZvcm1hdGlvbiB0aGF0IHlvdXIgYnJvd3NlciBzZW5kcyB3aGVuZXZlciB5b3VcbiAgICAgICAgdmlzaXQgb3VyIFNlcnZpY2Ugb3Igd2hlbiB5b3UgYWNjZXNzIFNlcnZpY2UgYnkgb3IgdGhyb3VnaCBhbnkgZGV2aWNlIChcbiAgICAgICAgPGI+4oCcVXNhZ2UgRGF0YeKAnTwvYj4pLlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIFRoaXMgVXNhZ2UgRGF0YSBtYXkgaW5jbHVkZSBpbmZvcm1hdGlvbiBzdWNoIGFzIHlvdXIgY29tcHV0ZXLigJlzIEludGVybmV0XG4gICAgICAgIFByb3RvY29sIGFkZHJlc3MgKGUuZy4gSVAgYWRkcmVzcyksIGJyb3dzZXIgdHlwZSwgYnJvd3NlciB2ZXJzaW9uLCB0aGVcbiAgICAgICAgcGFnZXMgb2Ygb3VyIFNlcnZpY2UgdGhhdCB5b3UgdmlzaXQsIHRoZSB0aW1lIGFuZCBkYXRlIG9mIHlvdXIgdmlzaXQsXG4gICAgICAgIHRoZSB0aW1lIHNwZW50IG9uIHRob3NlIHBhZ2VzLCB1bmlxdWUgZGV2aWNlIGlkZW50aWZpZXJzIGFuZCBvdGhlclxuICAgICAgICBkaWFnbm9zdGljIGRhdGEuXG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgV2hlbiB5b3UgYWNjZXNzIFNlcnZpY2Ugd2l0aCBhIGRldmljZSwgdGhpcyBVc2FnZSBEYXRhIG1heSBpbmNsdWRlXG4gICAgICAgIGluZm9ybWF0aW9uIHN1Y2ggYXMgdGhlIHR5cGUgb2YgZGV2aWNlIHlvdSB1c2UsIHlvdXIgZGV2aWNlIHVuaXF1ZSBJRCxcbiAgICAgICAgdGhlIElQIGFkZHJlc3Mgb2YgeW91ciBkZXZpY2UsIHlvdXIgZGV2aWNlIG9wZXJhdGluZyBzeXN0ZW0sIHRoZSB0eXBlIG9mXG4gICAgICAgIEludGVybmV0IGJyb3dzZXIgeW91IHVzZSwgdW5pcXVlIGRldmljZSBpZGVudGlmaWVycyBhbmQgb3RoZXIgZGlhZ25vc3RpY1xuICAgICAgICBkYXRhLlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIDxiPlRyYWNraW5nIENvb2tpZXMgRGF0YTwvYj5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICBXZSB1c2UgY29va2llcyBhbmQgc2ltaWxhciB0cmFja2luZyB0ZWNobm9sb2dpZXMgdG8gdHJhY2sgdGhlIGFjdGl2aXR5XG4gICAgICAgIG9uIG91ciBTZXJ2aWNlIGFuZCB3ZSBob2xkIGNlcnRhaW4gaW5mb3JtYXRpb24uXG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgQ29va2llcyBhcmUgZmlsZXMgd2l0aCBhIHNtYWxsIGFtb3VudCBvZiBkYXRhIHdoaWNoIG1heSBpbmNsdWRlIGFuXG4gICAgICAgIGFub255bW91cyB1bmlxdWUgaWRlbnRpZmllci4gQ29va2llcyBhcmUgc2VudCB0byB5b3VyIGJyb3dzZXIgZnJvbSBhXG4gICAgICAgIHdlYnNpdGUgYW5kIHN0b3JlZCBvbiB5b3VyIGRldmljZS4gT3RoZXIgdHJhY2tpbmcgdGVjaG5vbG9naWVzIGFyZSBhbHNvXG4gICAgICAgIHVzZWQgc3VjaCBhcyBiZWFjb25zLCB0YWdzIGFuZCBzY3JpcHRzIHRvIGNvbGxlY3QgYW5kIHRyYWNrIGluZm9ybWF0aW9uXG4gICAgICAgIGFuZCB0byBpbXByb3ZlIGFuZCBhbmFseXplIG91ciBTZXJ2aWNlLlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIFlvdSBjYW4gaW5zdHJ1Y3QgeW91ciBicm93c2VyIHRvIHJlZnVzZSBhbGwgY29va2llcyBvciB0byBpbmRpY2F0ZSB3aGVuXG4gICAgICAgIGEgY29va2llIGlzIGJlaW5nIHNlbnQuIEhvd2V2ZXIsIGlmIHlvdSBkbyBub3QgYWNjZXB0IGNvb2tpZXMsIHlvdSBtYXlcbiAgICAgICAgbm90IGJlIGFibGUgdG8gdXNlIHNvbWUgcG9ydGlvbnMgb2Ygb3VyIFNlcnZpY2UuXG4gICAgICA8L3A+XG4gICAgICA8cD5FeGFtcGxlcyBvZiBDb29raWVzIHdlIHVzZTo8L3A+XG4gICAgICA8cD5cbiAgICAgICAgMC4xLiA8Yj5TZXNzaW9uIENvb2tpZXM6PC9iPiBXZSB1c2UgU2Vzc2lvbiBDb29raWVzIHRvIG9wZXJhdGUgb3VyXG4gICAgICAgIFNlcnZpY2UuXG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgMC4yLiA8Yj5QcmVmZXJlbmNlIENvb2tpZXM6PC9iPiBXZSB1c2UgUHJlZmVyZW5jZSBDb29raWVzIHRvIHJlbWVtYmVyXG4gICAgICAgIHlvdXIgcHJlZmVyZW5jZXMgYW5kIHZhcmlvdXMgc2V0dGluZ3MuXG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgMC4zLiA8Yj5TZWN1cml0eSBDb29raWVzOjwvYj4gV2UgdXNlIFNlY3VyaXR5IENvb2tpZXMgZm9yIHNlY3VyaXR5XG4gICAgICAgIHB1cnBvc2VzLlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIDAuNC4gPGI+QWR2ZXJ0aXNpbmcgQ29va2llczo8L2I+IEFkdmVydGlzaW5nIENvb2tpZXMgYXJlIHVzZWQgdG8gc2VydmVcbiAgICAgICAgeW91IHdpdGggYWR2ZXJ0aXNlbWVudHMgdGhhdCBtYXkgYmUgcmVsZXZhbnQgdG8geW91IGFuZCB5b3VyIGludGVyZXN0cy5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICA8Yj5PdGhlciBEYXRhPC9iPlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIDUuIDxiPlVzZSBvZiBEYXRhPC9iPlxuICAgICAgPC9wPlxuICAgICAgPHA+VmFsaGFsbGEgTWVkaWEgR3JvdXAgdXNlcyB0aGUgY29sbGVjdGVkIGRhdGEgZm9yIHZhcmlvdXMgcHVycG9zZXM6PC9wPlxuICAgICAgPHA+MC4xLiB0byBwcm92aWRlIGFuZCBtYWludGFpbiBvdXIgU2VydmljZTs8L3A+XG4gICAgICA8cD4wLjIuIHRvIG5vdGlmeSB5b3UgYWJvdXQgY2hhbmdlcyB0byBvdXIgU2VydmljZTs8L3A+XG4gICAgICA8cD5cbiAgICAgICAgMC4zLiB0byBhbGxvdyB5b3UgdG8gcGFydGljaXBhdGUgaW4gaW50ZXJhY3RpdmUgZmVhdHVyZXMgb2Ygb3VyIFNlcnZpY2VcbiAgICAgICAgd2hlbiB5b3UgY2hvb3NlIHRvIGRvIHNvO1xuICAgICAgPC9wPlxuICAgICAgPHA+MC40LiB0byBwcm92aWRlIGN1c3RvbWVyIHN1cHBvcnQ7PC9wPlxuICAgICAgPHA+XG4gICAgICAgIDAuNS4gdG8gZ2F0aGVyIGFuYWx5c2lzIG9yIHZhbHVhYmxlIGluZm9ybWF0aW9uIHNvIHRoYXQgd2UgY2FuIGltcHJvdmVcbiAgICAgICAgb3VyIFNlcnZpY2U7XG4gICAgICA8L3A+XG4gICAgICA8cD4wLjYuIHRvIG1vbml0b3IgdGhlIHVzYWdlIG9mIG91ciBTZXJ2aWNlOzwvcD5cbiAgICAgIDxwPjAuNy4gdG8gZGV0ZWN0LCBwcmV2ZW50IGFuZCBhZGRyZXNzIHRlY2huaWNhbCBpc3N1ZXM7PC9wPlxuICAgICAgPHA+MC44LiB0byBmdWxmaWwgYW55IG90aGVyIHB1cnBvc2UgZm9yIHdoaWNoIHlvdSBwcm92aWRlIGl0OzwvcD5cbiAgICAgIDxwPlxuICAgICAgICAwLjkuIHRvIGNhcnJ5IG91dCBvdXIgb2JsaWdhdGlvbnMgYW5kIGVuZm9yY2Ugb3VyIHJpZ2h0cyBhcmlzaW5nIGZyb21cbiAgICAgICAgYW55IGNvbnRyYWN0cyBlbnRlcmVkIGludG8gYmV0d2VlbiB5b3UgYW5kIHVzLCBpbmNsdWRpbmcgZm9yIGJpbGxpbmcgYW5kXG4gICAgICAgIGNvbGxlY3Rpb247XG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgMC4xMC4gdG8gcHJvdmlkZSB5b3Ugd2l0aCBub3RpY2VzIGFib3V0IHlvdXIgYWNjb3VudCBhbmQvb3JcbiAgICAgICAgc3Vic2NyaXB0aW9uLCBpbmNsdWRpbmcgZXhwaXJhdGlvbiBhbmQgcmVuZXdhbCBub3RpY2VzLFxuICAgICAgICBlbWFpbC1pbnN0cnVjdGlvbnMsIGV0Yy47XG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgMC4xMS4gdG8gcHJvdmlkZSB5b3Ugd2l0aCBuZXdzLCBzcGVjaWFsIG9mZmVycyBhbmQgZ2VuZXJhbCBpbmZvcm1hdGlvblxuICAgICAgICBhYm91dCBvdGhlciBnb29kcywgc2VydmljZXMgYW5kIGV2ZW50cyB3aGljaCB3ZSBvZmZlciB0aGF0IGFyZSBzaW1pbGFyXG4gICAgICAgIHRvIHRob3NlIHRoYXQgeW91IGhhdmUgYWxyZWFkeSBwdXJjaGFzZWQgb3IgZW5xdWlyZWQgYWJvdXQgdW5sZXNzIHlvdVxuICAgICAgICBoYXZlIG9wdGVkIG5vdCB0byByZWNlaXZlIHN1Y2ggaW5mb3JtYXRpb247XG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgMC4xMi4gaW4gYW55IG90aGVyIHdheSB3ZSBtYXkgZGVzY3JpYmUgd2hlbiB5b3UgcHJvdmlkZSB0aGUgaW5mb3JtYXRpb247XG4gICAgICA8L3A+XG4gICAgICA8cD4wLjEzLiBmb3IgYW55IG90aGVyIHB1cnBvc2Ugd2l0aCB5b3VyIGNvbnNlbnQuPC9wPlxuICAgICAgPHA+XG4gICAgICAgIDYuIDxiPlJldGVudGlvbiBvZiBEYXRhPC9iPlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIFdlIHdpbGwgcmV0YWluIHlvdXIgUGVyc29uYWwgRGF0YSBvbmx5IGZvciBhcyBsb25nIGFzIGlzIG5lY2Vzc2FyeSBmb3JcbiAgICAgICAgdGhlIHB1cnBvc2VzIHNldCBvdXQgaW4gdGhpcyBQcml2YWN5IFBvbGljeS4gV2Ugd2lsbCByZXRhaW4gYW5kIHVzZSB5b3VyXG4gICAgICAgIFBlcnNvbmFsIERhdGEgdG8gdGhlIGV4dGVudCBuZWNlc3NhcnkgdG8gY29tcGx5IHdpdGggb3VyIGxlZ2FsXG4gICAgICAgIG9ibGlnYXRpb25zIChmb3IgZXhhbXBsZSwgaWYgd2UgYXJlIHJlcXVpcmVkIHRvIHJldGFpbiB5b3VyIGRhdGEgdG9cbiAgICAgICAgY29tcGx5IHdpdGggYXBwbGljYWJsZSBsYXdzKSwgcmVzb2x2ZSBkaXNwdXRlcywgYW5kIGVuZm9yY2Ugb3VyIGxlZ2FsXG4gICAgICAgIGFncmVlbWVudHMgYW5kIHBvbGljaWVzLlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIFdlIHdpbGwgYWxzbyByZXRhaW4gVXNhZ2UgRGF0YSBmb3IgaW50ZXJuYWwgYW5hbHlzaXMgcHVycG9zZXMuIFVzYWdlXG4gICAgICAgIERhdGEgaXMgZ2VuZXJhbGx5IHJldGFpbmVkIGZvciBhIHNob3J0ZXIgcGVyaW9kLCBleGNlcHQgd2hlbiB0aGlzIGRhdGFcbiAgICAgICAgaXMgdXNlZCB0byBzdHJlbmd0aGVuIHRoZSBzZWN1cml0eSBvciB0byBpbXByb3ZlIHRoZSBmdW5jdGlvbmFsaXR5IG9mXG4gICAgICAgIG91ciBTZXJ2aWNlLCBvciB3ZSBhcmUgbGVnYWxseSBvYmxpZ2F0ZWQgdG8gcmV0YWluIHRoaXMgZGF0YSBmb3IgbG9uZ2VyXG4gICAgICAgIHRpbWUgcGVyaW9kcy5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICA3LiA8Yj5UcmFuc2ZlciBvZiBEYXRhPC9iPlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIFlvdXIgaW5mb3JtYXRpb24sIGluY2x1ZGluZyBQZXJzb25hbCBEYXRhLCBtYXkgYmUgdHJhbnNmZXJyZWQgdG8g4oCTIGFuZFxuICAgICAgICBtYWludGFpbmVkIG9uIOKAkyBjb21wdXRlcnMgbG9jYXRlZCBvdXRzaWRlIG9mIHlvdXIgc3RhdGUsIHByb3ZpbmNlLFxuICAgICAgICBjb3VudHJ5IG9yIG90aGVyIGdvdmVybm1lbnRhbCBqdXJpc2RpY3Rpb24gd2hlcmUgdGhlIGRhdGEgcHJvdGVjdGlvblxuICAgICAgICBsYXdzIG1heSBkaWZmZXIgZnJvbSB0aG9zZSBvZiB5b3VyIGp1cmlzZGljdGlvbi5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICBJZiB5b3UgYXJlIGxvY2F0ZWQgb3V0c2lkZSBLZW55YSBhbmQgY2hvb3NlIHRvIHByb3ZpZGUgaW5mb3JtYXRpb24gdG9cbiAgICAgICAgdXMsIHBsZWFzZSBub3RlIHRoYXQgd2UgdHJhbnNmZXIgdGhlIGRhdGEsIGluY2x1ZGluZyBQZXJzb25hbCBEYXRhLCB0b1xuICAgICAgICBLZW55YSBhbmQgcHJvY2VzcyBpdCB0aGVyZS5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICBZb3VyIGNvbnNlbnQgdG8gdGhpcyBQcml2YWN5IFBvbGljeSBmb2xsb3dlZCBieSB5b3VyIHN1Ym1pc3Npb24gb2Ygc3VjaFxuICAgICAgICBpbmZvcm1hdGlvbiByZXByZXNlbnRzIHlvdXIgYWdyZWVtZW50IHRvIHRoYXQgdHJhbnNmZXIuXG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgVmFsaGFsbGEgTWVkaWEgR3JvdXAgd2lsbCB0YWtlIGFsbCB0aGUgc3RlcHMgcmVhc29uYWJseSBuZWNlc3NhcnkgdG9cbiAgICAgICAgZW5zdXJlIHRoYXQgeW91ciBkYXRhIGlzIHRyZWF0ZWQgc2VjdXJlbHkgYW5kIGluIGFjY29yZGFuY2Ugd2l0aCB0aGlzXG4gICAgICAgIFByaXZhY3kgUG9saWN5IGFuZCBubyB0cmFuc2ZlciBvZiB5b3VyIFBlcnNvbmFsIERhdGEgd2lsbCB0YWtlIHBsYWNlIHRvXG4gICAgICAgIGFuIG9yZ2FuaXNhdGlvbiBvciBhIGNvdW50cnkgdW5sZXNzIHRoZXJlIGFyZSBhZGVxdWF0ZSBjb250cm9scyBpbiBwbGFjZVxuICAgICAgICBpbmNsdWRpbmcgdGhlIHNlY3VyaXR5IG9mIHlvdXIgZGF0YSBhbmQgb3RoZXIgcGVyc29uYWwgaW5mb3JtYXRpb24uXG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgOC4gPGI+RGlzY2xvc3VyZSBvZiBEYXRhPC9iPlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIFdlIG1heSBkaXNjbG9zZSBwZXJzb25hbCBpbmZvcm1hdGlvbiB0aGF0IHdlIGNvbGxlY3QsIG9yIHlvdSBwcm92aWRlOlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIDAuMS4gPGI+RGlzY2xvc3VyZSBmb3IgTGF3IEVuZm9yY2VtZW50LjwvYj5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICBVbmRlciBjZXJ0YWluIGNpcmN1bXN0YW5jZXMsIHdlIG1heSBiZSByZXF1aXJlZCB0byBkaXNjbG9zZSB5b3VyXG4gICAgICAgIFBlcnNvbmFsIERhdGEgaWYgcmVxdWlyZWQgdG8gZG8gc28gYnkgbGF3IG9yIGluIHJlc3BvbnNlIHRvIHZhbGlkXG4gICAgICAgIHJlcXVlc3RzIGJ5IHB1YmxpYyBhdXRob3JpdGllcy5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICAwLjIuIDxiPkJ1c2luZXNzIFRyYW5zYWN0aW9uLjwvYj5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICBJZiB3ZSBvciBvdXIgc3Vic2lkaWFyaWVzIGFyZSBpbnZvbHZlZCBpbiBhIG1lcmdlciwgYWNxdWlzaXRpb24gb3IgYXNzZXRcbiAgICAgICAgc2FsZSwgeW91ciBQZXJzb25hbCBEYXRhIG1heSBiZSB0cmFuc2ZlcnJlZC5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICAwLjMuIDxiPk90aGVyIGNhc2VzLiBXZSBtYXkgZGlzY2xvc2UgeW91ciBpbmZvcm1hdGlvbiBhbHNvOjwvYj5cbiAgICAgIDwvcD5cbiAgICAgIDxwPjAuMy4xLiB0byBvdXIgc3Vic2lkaWFyaWVzIGFuZCBhZmZpbGlhdGVzOzwvcD5cbiAgICAgIDxwPlxuICAgICAgICAwLjMuMi4gdG8gY29udHJhY3RvcnMsIHNlcnZpY2UgcHJvdmlkZXJzLCBhbmQgb3RoZXIgdGhpcmQgcGFydGllcyB3ZSB1c2VcbiAgICAgICAgdG8gc3VwcG9ydCBvdXIgYnVzaW5lc3M7XG4gICAgICA8L3A+XG4gICAgICA8cD4wLjMuMy4gdG8gZnVsZmlsbCB0aGUgcHVycG9zZSBmb3Igd2hpY2ggeW91IHByb3ZpZGUgaXQ7PC9wPlxuICAgICAgPHA+XG4gICAgICAgIDAuMy40LiBmb3IgdGhlIHB1cnBvc2Ugb2YgaW5jbHVkaW5nIHlvdXIgY29tcGFueeKAmXMgbG9nbyBvbiBvdXIgd2Vic2l0ZTtcbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICAwLjMuNS4gZm9yIGFueSBvdGhlciBwdXJwb3NlIGRpc2Nsb3NlZCBieSB1cyB3aGVuIHlvdSBwcm92aWRlIHRoZVxuICAgICAgICBpbmZvcm1hdGlvbjtcbiAgICAgIDwvcD5cbiAgICAgIDxwPjAuMy42LiB3aXRoIHlvdXIgY29uc2VudCBpbiBhbnkgb3RoZXIgY2FzZXM7PC9wPlxuICAgICAgPHA+XG4gICAgICAgIDAuMy43LiBpZiB3ZSBiZWxpZXZlIGRpc2Nsb3N1cmUgaXMgbmVjZXNzYXJ5IG9yIGFwcHJvcHJpYXRlIHRvIHByb3RlY3RcbiAgICAgICAgdGhlIHJpZ2h0cywgcHJvcGVydHksIG9yIHNhZmV0eSBvZiB0aGUgQ29tcGFueSwgb3VyIGN1c3RvbWVycywgb3JcbiAgICAgICAgb3RoZXJzLlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIDkuIDxiPlNlY3VyaXR5IG9mIERhdGE8L2I+XG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgVGhlIHNlY3VyaXR5IG9mIHlvdXIgZGF0YSBpcyBpbXBvcnRhbnQgdG8gdXMgYnV0IHJlbWVtYmVyIHRoYXQgbm8gbWV0aG9kXG4gICAgICAgIG9mIHRyYW5zbWlzc2lvbiBvdmVyIHRoZSBJbnRlcm5ldCBvciBtZXRob2Qgb2YgZWxlY3Ryb25pYyBzdG9yYWdlIGlzXG4gICAgICAgIDEwMCUgc2VjdXJlLiBXaGlsZSB3ZSBzdHJpdmUgdG8gdXNlIGNvbW1lcmNpYWxseSBhY2NlcHRhYmxlIG1lYW5zIHRvXG4gICAgICAgIHByb3RlY3QgeW91ciBQZXJzb25hbCBEYXRhLCB3ZSBjYW5ub3QgZ3VhcmFudGVlIGl0cyBhYnNvbHV0ZSBzZWN1cml0eS5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICAxMC57JyAnfVxuICAgICAgICA8Yj5cbiAgICAgICAgICBZb3VyIERhdGEgUHJvdGVjdGlvbiBSaWdodHMgVW5kZXIgR2VuZXJhbCBEYXRhIFByb3RlY3Rpb24gUmVndWxhdGlvblxuICAgICAgICAgIChHRFBSKVxuICAgICAgICA8L2I+XG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgSWYgeW91IGFyZSBhIHJlc2lkZW50IG9mIHRoZSBFdXJvcGVhbiBVbmlvbiAoRVUpIGFuZCBFdXJvcGVhbiBFY29ub21pY1xuICAgICAgICBBcmVhIChFRUEpLCB5b3UgaGF2ZSBjZXJ0YWluIGRhdGEgcHJvdGVjdGlvbiByaWdodHMsIGNvdmVyZWQgYnkgR0RQUi5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICBXZSBhaW0gdG8gdGFrZSByZWFzb25hYmxlIHN0ZXBzIHRvIGFsbG93IHlvdSB0byBjb3JyZWN0LCBhbWVuZCwgZGVsZXRlLFxuICAgICAgICBvciBsaW1pdCB0aGUgdXNlIG9mIHlvdXIgUGVyc29uYWwgRGF0YS5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICB7JyAnfVxuICAgICAgICBJZiB5b3Ugd2lzaCB0byBiZSBpbmZvcm1lZCB3aGF0IFBlcnNvbmFsIERhdGEgd2UgaG9sZCBhYm91dCB5b3UgYW5kIGlmXG4gICAgICAgIHlvdSB3YW50IGl0IHRvIGJlIHJlbW92ZWQgZnJvbSBvdXIgc3lzdGVtcywgcGxlYXNlIGVtYWlsIHVzIGF0eycgJ31cbiAgICAgICAgPGI+dmFsaGFsbGFtZWRpYWdyb3VwLmNvbTwvYj4uXG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgSW4gY2VydGFpbiBjaXJjdW1zdGFuY2VzLCB5b3UgaGF2ZSB0aGUgZm9sbG93aW5nIGRhdGEgcHJvdGVjdGlvbiByaWdodHM6XG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgMC4xLiB0aGUgcmlnaHQgdG8gYWNjZXNzLCB1cGRhdGUgb3IgdG8gZGVsZXRlIHRoZSBpbmZvcm1hdGlvbiB3ZSBoYXZlIG9uXG4gICAgICAgIHlvdTtcbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICAwLjIuIHRoZSByaWdodCBvZiByZWN0aWZpY2F0aW9uLiBZb3UgaGF2ZSB0aGUgcmlnaHQgdG8gaGF2ZSB5b3VyXG4gICAgICAgIGluZm9ybWF0aW9uIHJlY3RpZmllZCBpZiB0aGF0IGluZm9ybWF0aW9uIGlzIGluYWNjdXJhdGUgb3IgaW5jb21wbGV0ZTtcbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICAwLjMuIHRoZSByaWdodCB0byBvYmplY3QuIFlvdSBoYXZlIHRoZSByaWdodCB0byBvYmplY3QgdG8gb3VyIHByb2Nlc3NpbmdcbiAgICAgICAgb2YgeW91ciBQZXJzb25hbCBEYXRhO1xuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIDAuNC4gdGhlIHJpZ2h0IG9mIHJlc3RyaWN0aW9uLiBZb3UgaGF2ZSB0aGUgcmlnaHQgdG8gcmVxdWVzdCB0aGF0IHdlXG4gICAgICAgIHJlc3RyaWN0IHRoZSBwcm9jZXNzaW5nIG9mIHlvdXIgcGVyc29uYWwgaW5mb3JtYXRpb247XG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgMC41LiB0aGUgcmlnaHQgdG8gZGF0YSBwb3J0YWJpbGl0eS4gWW91IGhhdmUgdGhlIHJpZ2h0IHRvIGJlIHByb3ZpZGVkXG4gICAgICAgIHdpdGggYSBjb3B5IG9mIHlvdXIgUGVyc29uYWwgRGF0YSBpbiBhIHN0cnVjdHVyZWQsIG1hY2hpbmUtcmVhZGFibGUgYW5kXG4gICAgICAgIGNvbW1vbmx5IHVzZWQgZm9ybWF0O1xuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIDAuNi4gdGhlIHJpZ2h0IHRvIHdpdGhkcmF3IGNvbnNlbnQuIFlvdSBhbHNvIGhhdmUgdGhlIHJpZ2h0IHRvIHdpdGhkcmF3XG4gICAgICAgIHlvdXIgY29uc2VudCBhdCBhbnkgdGltZSB3aGVyZSB3ZSByZWx5IG9uIHlvdXIgY29uc2VudCB0byBwcm9jZXNzIHlvdXJcbiAgICAgICAgcGVyc29uYWwgaW5mb3JtYXRpb247XG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgUGxlYXNlIG5vdGUgdGhhdCB3ZSBtYXkgYXNrIHlvdSB0byB2ZXJpZnkgeW91ciBpZGVudGl0eSBiZWZvcmVcbiAgICAgICAgcmVzcG9uZGluZyB0byBzdWNoIHJlcXVlc3RzLiBQbGVhc2Ugbm90ZSwgd2UgbWF5IG5vdCBhYmxlIHRvIHByb3ZpZGVcbiAgICAgICAgU2VydmljZSB3aXRob3V0IHNvbWUgbmVjZXNzYXJ5IGRhdGEuXG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgWW91IGhhdmUgdGhlIHJpZ2h0IHRvIGNvbXBsYWluIHRvIGEgRGF0YSBQcm90ZWN0aW9uIEF1dGhvcml0eSBhYm91dCBvdXJcbiAgICAgICAgY29sbGVjdGlvbiBhbmQgdXNlIG9mIHlvdXIgUGVyc29uYWwgRGF0YS4gRm9yIG1vcmUgaW5mb3JtYXRpb24sIHBsZWFzZVxuICAgICAgICBjb250YWN0IHlvdXIgbG9jYWwgZGF0YSBwcm90ZWN0aW9uIGF1dGhvcml0eSBpbiB0aGUgRXVyb3BlYW4gRWNvbm9taWNcbiAgICAgICAgQXJlYSAoRUVBKS5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICAxMS57JyAnfVxuICAgICAgICA8Yj5cbiAgICAgICAgICBZb3VyIERhdGEgUHJvdGVjdGlvbiBSaWdodHMgdW5kZXIgdGhlIENhbGlmb3JuaWEgUHJpdmFjeSBQcm90ZWN0aW9uXG4gICAgICAgICAgQWN0IChDYWxPUFBBKVxuICAgICAgICA8L2I+XG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgQ2FsT1BQQSBpcyB0aGUgZmlyc3Qgc3RhdGUgbGF3IGluIHRoZSBuYXRpb24gdG8gcmVxdWlyZSBjb21tZXJjaWFsXG4gICAgICAgIHdlYnNpdGVzIGFuZCBvbmxpbmUgc2VydmljZXMgdG8gcG9zdCBhIHByaXZhY3kgcG9saWN5LiBUaGUgbGF34oCZcyByZWFjaFxuICAgICAgICBzdHJldGNoZXMgd2VsbCBiZXlvbmQgQ2FsaWZvcm5pYSB0byByZXF1aXJlIGEgcGVyc29uIG9yIGNvbXBhbnkgaW4gdGhlXG4gICAgICAgIFVuaXRlZCBTdGF0ZXMgKGFuZCBjb25jZWl2YWJsZSB0aGUgd29ybGQpIHRoYXQgb3BlcmF0ZXMgd2Vic2l0ZXNcbiAgICAgICAgY29sbGVjdGluZyBwZXJzb25hbGx5IGlkZW50aWZpYWJsZSBpbmZvcm1hdGlvbiBmcm9tIENhbGlmb3JuaWEgY29uc3VtZXJzXG4gICAgICAgIHRvIHBvc3QgYSBjb25zcGljdW91cyBwcml2YWN5IHBvbGljeSBvbiBpdHMgd2Vic2l0ZSBzdGF0aW5nIGV4YWN0bHkgdGhlXG4gICAgICAgIGluZm9ybWF0aW9uIGJlaW5nIGNvbGxlY3RlZCBhbmQgdGhvc2UgaW5kaXZpZHVhbHMgd2l0aCB3aG9tIGl0IGlzIGJlaW5nXG4gICAgICAgIHNoYXJlZCwgYW5kIHRvIGNvbXBseSB3aXRoIHRoaXMgcG9saWN5LlxuICAgICAgPC9wPlxuICAgICAgPHA+QWNjb3JkaW5nIHRvIENhbE9QUEEgd2UgYWdyZWUgdG8gdGhlIGZvbGxvd2luZzo8L3A+XG4gICAgICA8cD4wLjEuIHVzZXJzIGNhbiB2aXNpdCBvdXIgc2l0ZSBhbm9ueW1vdXNseTs8L3A+XG4gICAgICA8cD5cbiAgICAgICAgMC4yLiBvdXIgUHJpdmFjeSBQb2xpY3kgbGluayBpbmNsdWRlcyB0aGUgd29yZCDigJxQcml2YWN54oCdLCBhbmQgY2FuIGVhc2lseVxuICAgICAgICBiZSBmb3VuZCBvbiB0aGUgaG9tZSBwYWdlIG9mIG91ciB3ZWJzaXRlO1xuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIDAuMy4gdXNlcnMgd2lsbCBiZSBub3RpZmllZCBvZiBhbnkgcHJpdmFjeSBwb2xpY3kgY2hhbmdlcyBvbiBvdXIgUHJpdmFjeVxuICAgICAgICBQb2xpY3kgUGFnZTtcbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICAwLjQuIHVzZXJzIGFyZSBhYmxlIHRvIGNoYW5nZSB0aGVpciBwZXJzb25hbCBpbmZvcm1hdGlvbiBieSBlbWFpbGluZyB1c1xuICAgICAgICBhdCA8Yj52YWxoYWxsYW1lZGlhZ3JvdXAuY29tPC9iPi5cbiAgICAgIDwvcD5cbiAgICAgIDxwPk91ciBQb2xpY3kgb24g4oCcRG8gTm90IFRyYWNr4oCdIFNpZ25hbHM6PC9wPlxuICAgICAgPHA+XG4gICAgICAgIFdlIGhvbm9yIERvIE5vdCBUcmFjayBzaWduYWxzIGFuZCBkbyBub3QgdHJhY2ssIHBsYW50IGNvb2tpZXMsIG9yIHVzZVxuICAgICAgICBhZHZlcnRpc2luZyB3aGVuIGEgRG8gTm90IFRyYWNrIGJyb3dzZXIgbWVjaGFuaXNtIGlzIGluIHBsYWNlLiBEbyBOb3RcbiAgICAgICAgVHJhY2sgaXMgYSBwcmVmZXJlbmNlIHlvdSBjYW4gc2V0IGluIHlvdXIgd2ViIGJyb3dzZXIgdG8gaW5mb3JtIHdlYnNpdGVzXG4gICAgICAgIHRoYXQgeW91IGRvIG5vdCB3YW50IHRvIGJlIHRyYWNrZWQuXG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgWW91IGNhbiBlbmFibGUgb3IgZGlzYWJsZSBEbyBOb3QgVHJhY2sgYnkgdmlzaXRpbmcgdGhlIFByZWZlcmVuY2VzIG9yXG4gICAgICAgIFNldHRpbmdzIHBhZ2Ugb2YgeW91ciB3ZWIgYnJvd3Nlci5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICAxMi57JyAnfVxuICAgICAgICA8Yj5cbiAgICAgICAgICBZb3VyIERhdGEgUHJvdGVjdGlvbiBSaWdodHMgdW5kZXIgdGhlIENhbGlmb3JuaWEgQ29uc3VtZXIgUHJpdmFjeSBBY3RcbiAgICAgICAgICAoQ0NQQSlcbiAgICAgICAgPC9iPlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIElmIHlvdSBhcmUgYSBDYWxpZm9ybmlhIHJlc2lkZW50LCB5b3UgYXJlIGVudGl0bGVkIHRvIGxlYXJuIHdoYXQgZGF0YSB3ZVxuICAgICAgICBjb2xsZWN0IGFib3V0IHlvdSwgYXNrIHRvIGRlbGV0ZSB5b3VyIGRhdGEgYW5kIG5vdCB0byBzZWxsIChzaGFyZSkgaXQuXG4gICAgICAgIFRvIGV4ZXJjaXNlIHlvdXIgZGF0YSBwcm90ZWN0aW9uIHJpZ2h0cywgeW91IGNhbiBtYWtlIGNlcnRhaW4gcmVxdWVzdHNcbiAgICAgICAgYW5kIGFzayB1czpcbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICA8Yj5cbiAgICAgICAgICAwLjEuIFdoYXQgcGVyc29uYWwgaW5mb3JtYXRpb24gd2UgaGF2ZSBhYm91dCB5b3UuIElmIHlvdSBtYWtlIHRoaXNcbiAgICAgICAgICByZXF1ZXN0LCB3ZSB3aWxsIHJldHVybiB0byB5b3U6XG4gICAgICAgIDwvYj5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICAwLjAuMS4gVGhlIGNhdGVnb3JpZXMgb2YgcGVyc29uYWwgaW5mb3JtYXRpb24gd2UgaGF2ZSBjb2xsZWN0ZWQgYWJvdXRcbiAgICAgICAgeW91LlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIDAuMC4yLiBUaGUgY2F0ZWdvcmllcyBvZiBzb3VyY2VzIGZyb20gd2hpY2ggd2UgY29sbGVjdCB5b3VyIHBlcnNvbmFsXG4gICAgICAgIGluZm9ybWF0aW9uLlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIDAuMC4zLiBUaGUgYnVzaW5lc3Mgb3IgY29tbWVyY2lhbCBwdXJwb3NlIGZvciBjb2xsZWN0aW5nIG9yIHNlbGxpbmcgeW91clxuICAgICAgICBwZXJzb25hbCBpbmZvcm1hdGlvbi5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICAwLjAuNC4gVGhlIGNhdGVnb3JpZXMgb2YgdGhpcmQgcGFydGllcyB3aXRoIHdob20gd2Ugc2hhcmUgcGVyc29uYWxcbiAgICAgICAgaW5mb3JtYXRpb24uXG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgMC4wLjUuIFRoZSBzcGVjaWZpYyBwaWVjZXMgb2YgcGVyc29uYWwgaW5mb3JtYXRpb24gd2UgaGF2ZSBjb2xsZWN0ZWRcbiAgICAgICAgYWJvdXQgeW91LlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIDAuMC42LiBBIGxpc3Qgb2YgY2F0ZWdvcmllcyBvZiBwZXJzb25hbCBpbmZvcm1hdGlvbiB0aGF0IHdlIGhhdmUgc29sZCxcbiAgICAgICAgYWxvbmcgd2l0aCB0aGUgY2F0ZWdvcnkgb2YgYW55IG90aGVyIGNvbXBhbnkgd2Ugc29sZCBpdCB0by4gSWYgd2UgaGF2ZVxuICAgICAgICBub3Qgc29sZCB5b3VyIHBlcnNvbmFsIGluZm9ybWF0aW9uLCB3ZSB3aWxsIGluZm9ybSB5b3Ugb2YgdGhhdCBmYWN0LlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIDAuMC43LiBBIGxpc3Qgb2YgY2F0ZWdvcmllcyBvZiBwZXJzb25hbCBpbmZvcm1hdGlvbiB0aGF0IHdlIGhhdmVcbiAgICAgICAgZGlzY2xvc2VkIGZvciBhIGJ1c2luZXNzIHB1cnBvc2UsIGFsb25nIHdpdGggdGhlIGNhdGVnb3J5IG9mIGFueSBvdGhlclxuICAgICAgICBjb21wYW55IHdlIHNoYXJlZCBpdCB3aXRoLlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIFBsZWFzZSBub3RlLCB5b3UgYXJlIGVudGl0bGVkIHRvIGFzayB1cyB0byBwcm92aWRlIHlvdSB3aXRoIHRoaXNcbiAgICAgICAgaW5mb3JtYXRpb24gdXAgdG8gdHdvIHRpbWVzIGluIGEgcm9sbGluZyB0d2VsdmUtbW9udGggcGVyaW9kLiBXaGVuIHlvdVxuICAgICAgICBtYWtlIHRoaXMgcmVxdWVzdCwgdGhlIGluZm9ybWF0aW9uIHByb3ZpZGVkIG1heSBiZSBsaW1pdGVkIHRvIHRoZVxuICAgICAgICBwZXJzb25hbCBpbmZvcm1hdGlvbiB3ZSBjb2xsZWN0ZWQgYWJvdXQgeW91IGluIHRoZSBwcmV2aW91cyAxMiBtb250aHMuXG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgPGI+XG4gICAgICAgICAgMC4yLiBUbyBkZWxldGUgeW91ciBwZXJzb25hbCBpbmZvcm1hdGlvbi4gSWYgeW91IG1ha2UgdGhpcyByZXF1ZXN0LCB3ZVxuICAgICAgICAgIHdpbGwgZGVsZXRlIHRoZSBwZXJzb25hbCBpbmZvcm1hdGlvbiB3ZSBob2xkIGFib3V0IHlvdSBhcyBvZiB0aGUgZGF0ZVxuICAgICAgICAgIG9mIHlvdXIgcmVxdWVzdCBmcm9tIG91ciByZWNvcmRzIGFuZCBkaXJlY3QgYW55IHNlcnZpY2UgcHJvdmlkZXJzIHRvXG4gICAgICAgICAgZG8gdGhlIHNhbWUuIEluIHNvbWUgY2FzZXMsIGRlbGV0aW9uIG1heSBiZSBhY2NvbXBsaXNoZWQgdGhyb3VnaFxuICAgICAgICAgIGRlLWlkZW50aWZpY2F0aW9uIG9mIHRoZSBpbmZvcm1hdGlvbi4gSWYgeW91IGNob29zZSB0byBkZWxldGUgeW91clxuICAgICAgICAgIHBlcnNvbmFsIGluZm9ybWF0aW9uLCB5b3UgbWF5IG5vdCBiZSBhYmxlIHRvIHVzZSBjZXJ0YWluIGZ1bmN0aW9uc1xuICAgICAgICAgIHRoYXQgcmVxdWlyZSB5b3VyIHBlcnNvbmFsIGluZm9ybWF0aW9uIHRvIG9wZXJhdGUuXG4gICAgICAgIDwvYj5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICA8Yj5cbiAgICAgICAgICAwLjMuIFRvIHN0b3Agc2VsbGluZyB5b3VyIHBlcnNvbmFsIGluZm9ybWF0aW9uLiBXZSBkb27igJl0IHNlbGwgb3IgcmVudFxuICAgICAgICAgIHlvdXIgcGVyc29uYWwgaW5mb3JtYXRpb24gdG8gYW55IHRoaXJkIHBhcnRpZXMgZm9yIGFueSBwdXJwb3NlLiBXZSBkb1xuICAgICAgICAgIG5vdCBzZWxsIHlvdXIgcGVyc29uYWwgaW5mb3JtYXRpb24gZm9yIG1vbmV0YXJ5IGNvbnNpZGVyYXRpb24uXG4gICAgICAgICAgSG93ZXZlciwgdW5kZXIgc29tZSBjaXJjdW1zdGFuY2VzLCBhIHRyYW5zZmVyIG9mIHBlcnNvbmFsIGluZm9ybWF0aW9uXG4gICAgICAgICAgdG8gYSB0aGlyZCBwYXJ0eSwgb3Igd2l0aGluIG91ciBmYW1pbHkgb2YgY29tcGFuaWVzLCB3aXRob3V0IG1vbmV0YXJ5XG4gICAgICAgICAgY29uc2lkZXJhdGlvbiBtYXkgYmUgY29uc2lkZXJlZCBhIOKAnHNhbGXigJ0gdW5kZXIgQ2FsaWZvcm5pYSBsYXcuIFlvdSBhcmVcbiAgICAgICAgICB0aGUgb25seSBvd25lciBvZiB5b3VyIFBlcnNvbmFsIERhdGEgYW5kIGNhbiByZXF1ZXN0IGRpc2Nsb3N1cmUgb3JcbiAgICAgICAgICBkZWxldGlvbiBhdCBhbnkgdGltZS5cbiAgICAgICAgPC9iPlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIElmIHlvdSBzdWJtaXQgYSByZXF1ZXN0IHRvIHN0b3Agc2VsbGluZyB5b3VyIHBlcnNvbmFsIGluZm9ybWF0aW9uLCB3ZVxuICAgICAgICB3aWxsIHN0b3AgbWFraW5nIHN1Y2ggdHJhbnNmZXJzLlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIFBsZWFzZSBub3RlLCBpZiB5b3UgYXNrIHVzIHRvIGRlbGV0ZSBvciBzdG9wIHNlbGxpbmcgeW91ciBkYXRhLCBpdCBtYXlcbiAgICAgICAgaW1wYWN0IHlvdXIgZXhwZXJpZW5jZSB3aXRoIHVzLCBhbmQgeW91IG1heSBub3QgYmUgYWJsZSB0byBwYXJ0aWNpcGF0ZVxuICAgICAgICBpbiBjZXJ0YWluIHByb2dyYW1zIG9yIG1lbWJlcnNoaXAgc2VydmljZXMgd2hpY2ggcmVxdWlyZSB0aGUgdXNhZ2Ugb2ZcbiAgICAgICAgeW91ciBwZXJzb25hbCBpbmZvcm1hdGlvbiB0byBmdW5jdGlvbi4gQnV0IGluIG5vIGNpcmN1bXN0YW5jZXMsIHdlIHdpbGxcbiAgICAgICAgZGlzY3JpbWluYXRlIGFnYWluc3QgeW91IGZvciBleGVyY2lzaW5nIHlvdXIgcmlnaHRzLlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIFRvIGV4ZXJjaXNlIHlvdXIgQ2FsaWZvcm5pYSBkYXRhIHByb3RlY3Rpb24gcmlnaHRzIGRlc2NyaWJlZCBhYm92ZSxcbiAgICAgICAgcGxlYXNlIHNlbmQgeW91ciByZXF1ZXN0KHMpIGJ5IGVtYWlsOiA8Yj52YWxoYWxsYW1lZGlhZ3JvdXAuY29tPC9iPi5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICBZb3VyIGRhdGEgcHJvdGVjdGlvbiByaWdodHMsIGRlc2NyaWJlZCBhYm92ZSwgYXJlIGNvdmVyZWQgYnkgdGhlIENDUEEsXG4gICAgICAgIHNob3J0IGZvciB0aGUgQ2FsaWZvcm5pYSBDb25zdW1lciBQcml2YWN5IEFjdC4gVG8gZmluZCBvdXQgbW9yZSwgdmlzaXRcbiAgICAgICAgdGhlIG9mZmljaWFsIENhbGlmb3JuaWEgTGVnaXNsYXRpdmUgSW5mb3JtYXRpb24gd2Vic2l0ZS4gVGhlIENDUEEgdG9va1xuICAgICAgICBlZmZlY3Qgb24gMDEvMDEvMjAyMC5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICAxMy4gPGI+U2VydmljZSBQcm92aWRlcnM8L2I+XG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgV2UgbWF5IGVtcGxveSB0aGlyZCBwYXJ0eSBjb21wYW5pZXMgYW5kIGluZGl2aWR1YWxzIHRvIGZhY2lsaXRhdGUgb3VyXG4gICAgICAgIFNlcnZpY2UgKDxiPuKAnFNlcnZpY2UgUHJvdmlkZXJz4oCdPC9iPiksIHByb3ZpZGUgU2VydmljZSBvbiBvdXIgYmVoYWxmLFxuICAgICAgICBwZXJmb3JtIFNlcnZpY2UtcmVsYXRlZCBzZXJ2aWNlcyBvciBhc3Npc3QgdXMgaW4gYW5hbHlzaW5nIGhvdyBvdXJcbiAgICAgICAgU2VydmljZSBpcyB1c2VkLlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIFRoZXNlIHRoaXJkIHBhcnRpZXMgaGF2ZSBhY2Nlc3MgdG8geW91ciBQZXJzb25hbCBEYXRhIG9ubHkgdG8gcGVyZm9ybVxuICAgICAgICB0aGVzZSB0YXNrcyBvbiBvdXIgYmVoYWxmIGFuZCBhcmUgb2JsaWdhdGVkIG5vdCB0byBkaXNjbG9zZSBvciB1c2UgaXRcbiAgICAgICAgZm9yIGFueSBvdGhlciBwdXJwb3NlLlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIDE0LiA8Yj5BbmFseXRpY3M8L2I+XG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgV2UgbWF5IHVzZSB0aGlyZC1wYXJ0eSBTZXJ2aWNlIFByb3ZpZGVycyB0byBtb25pdG9yIGFuZCBhbmFseXplIHRoZSB1c2VcbiAgICAgICAgb2Ygb3VyIFNlcnZpY2UuXG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgMTUuIDxiPkNJL0NEIHRvb2xzPC9iPlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIFdlIG1heSB1c2UgdGhpcmQtcGFydHkgU2VydmljZSBQcm92aWRlcnMgdG8gYXV0b21hdGUgdGhlIGRldmVsb3BtZW50XG4gICAgICAgIHByb2Nlc3Mgb2Ygb3VyIFNlcnZpY2UuXG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgMTYuIDxiPkFkdmVydGlzaW5nPC9iPlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIFdlIG1heSB1c2UgdGhpcmQtcGFydHkgU2VydmljZSBQcm92aWRlcnMgdG8gc2hvdyBhZHZlcnRpc2VtZW50cyB0byB5b3VcbiAgICAgICAgdG8gaGVscCBzdXBwb3J0IGFuZCBtYWludGFpbiBvdXIgU2VydmljZS5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICAxNy4gPGI+QmVoYXZpb3JhbCBSZW1hcmtldGluZzwvYj5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICBXZSBtYXkgdXNlIHJlbWFya2V0aW5nIHNlcnZpY2VzIHRvIGFkdmVydGlzZSBvbiB0aGlyZCBwYXJ0eSB3ZWJzaXRlcyB0b1xuICAgICAgICB5b3UgYWZ0ZXIgeW91IHZpc2l0ZWQgb3VyIFNlcnZpY2UuIFdlIGFuZCBvdXIgdGhpcmQtcGFydHkgdmVuZG9ycyB1c2VcbiAgICAgICAgY29va2llcyB0byBpbmZvcm0sIG9wdGltaXNlIGFuZCBzZXJ2ZSBhZHMgYmFzZWQgb24geW91ciBwYXN0IHZpc2l0cyB0b1xuICAgICAgICBvdXIgU2VydmljZS5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICAxOC4gPGI+TGlua3MgdG8gT3RoZXIgU2l0ZXM8L2I+XG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgT3VyIFNlcnZpY2UgbWF5IGNvbnRhaW4gbGlua3MgdG8gb3RoZXIgc2l0ZXMgdGhhdCBhcmUgbm90IG9wZXJhdGVkIGJ5XG4gICAgICAgIHVzLiBJZiB5b3UgY2xpY2sgYSB0aGlyZCBwYXJ0eSBsaW5rLCB5b3Ugd2lsbCBiZSBkaXJlY3RlZCB0byB0aGF0IHRoaXJkXG4gICAgICAgIHBhcnR54oCZcyBzaXRlLiBXZSBzdHJvbmdseSBhZHZpc2UgeW91IHRvIHJldmlldyB0aGUgUHJpdmFjeSBQb2xpY3kgb2ZcbiAgICAgICAgZXZlcnkgc2l0ZSB5b3UgdmlzaXQuXG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgV2UgaGF2ZSBubyBjb250cm9sIG92ZXIgYW5kIGFzc3VtZSBubyByZXNwb25zaWJpbGl0eSBmb3IgdGhlIGNvbnRlbnQsXG4gICAgICAgIHByaXZhY3kgcG9saWNpZXMgb3IgcHJhY3RpY2VzIG9mIGFueSB0aGlyZCBwYXJ0eSBzaXRlcyBvciBzZXJ2aWNlcy5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICAxOS57JyAnfVxuICAgICAgICA8Yj5cbiAgICAgICAgICA8Yj5DaGlsZHJlbuKAmXMgUHJpdmFjeTwvYj5cbiAgICAgICAgPC9iPlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIE91ciBTZXJ2aWNlcyBhcmUgbm90IGludGVuZGVkIGZvciB1c2UgYnkgY2hpbGRyZW4gdW5kZXIgdGhlIGFnZSBvZiAxOCAoXG4gICAgICAgIDxiPuKAnENoaWxk4oCdPC9iPiBvciA8Yj7igJxDaGlsZHJlbuKAnTwvYj4pLlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIFdlIGRvIG5vdCBrbm93aW5nbHkgY29sbGVjdCBwZXJzb25hbGx5IGlkZW50aWZpYWJsZSBpbmZvcm1hdGlvbiBmcm9tXG4gICAgICAgIENoaWxkcmVuIHVuZGVyIDE4LiBJZiB5b3UgYmVjb21lIGF3YXJlIHRoYXQgYSBDaGlsZCBoYXMgcHJvdmlkZWQgdXMgd2l0aFxuICAgICAgICBQZXJzb25hbCBEYXRhLCBwbGVhc2UgY29udGFjdCB1cy4gSWYgd2UgYmVjb21lIGF3YXJlIHRoYXQgd2UgaGF2ZVxuICAgICAgICBjb2xsZWN0ZWQgUGVyc29uYWwgRGF0YSBmcm9tIENoaWxkcmVuIHdpdGhvdXQgdmVyaWZpY2F0aW9uIG9mIHBhcmVudGFsXG4gICAgICAgIGNvbnNlbnQsIHdlIHRha2Ugc3RlcHMgdG8gcmVtb3ZlIHRoYXQgaW5mb3JtYXRpb24gZnJvbSBvdXIgc2VydmVycy5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICAyMC4gPGI+Q2hhbmdlcyB0byBUaGlzIFByaXZhY3kgUG9saWN5PC9iPlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIFdlIG1heSB1cGRhdGUgb3VyIFByaXZhY3kgUG9saWN5IGZyb20gdGltZSB0byB0aW1lLiBXZSB3aWxsIG5vdGlmeSB5b3VcbiAgICAgICAgb2YgYW55IGNoYW5nZXMgYnkgcG9zdGluZyB0aGUgbmV3IFByaXZhY3kgUG9saWN5IG9uIHRoaXMgcGFnZS5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICBXZSB3aWxsIGxldCB5b3Uga25vdyB2aWEgZW1haWwgYW5kL29yIGEgcHJvbWluZW50IG5vdGljZSBvbiBvdXIgU2VydmljZSxcbiAgICAgICAgcHJpb3IgdG8gdGhlIGNoYW5nZSBiZWNvbWluZyBlZmZlY3RpdmUgYW5kIHVwZGF0ZSDigJxlZmZlY3RpdmUgZGF0ZeKAnSBhdFxuICAgICAgICB0aGUgdG9wIG9mIHRoaXMgUHJpdmFjeSBQb2xpY3kuXG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgWW91IGFyZSBhZHZpc2VkIHRvIHJldmlldyB0aGlzIFByaXZhY3kgUG9saWN5IHBlcmlvZGljYWxseSBmb3IgYW55XG4gICAgICAgIGNoYW5nZXMuIENoYW5nZXMgdG8gdGhpcyBQcml2YWN5IFBvbGljeSBhcmUgZWZmZWN0aXZlIHdoZW4gdGhleSBhcmVcbiAgICAgICAgcG9zdGVkIG9uIHRoaXMgcGFnZS5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICAyMS4gPGI+Q29udGFjdCBVczwvYj5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICBJZiB5b3UgaGF2ZSBhbnkgcXVlc3Rpb25zIGFib3V0IHRoaXMgUHJpdmFjeSBQb2xpY3ksIHBsZWFzZSBjb250YWN0IHVzXG4gICAgICAgIGJ5IGVtYWlsOiA8Yj52YWxoYWxsYW1lZGlhZ3JvdXAuY29tPC9iPi5cbiAgICAgIDwvcD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcml2YWN5XG4iLCJpbXBvcnQgeyBDb250YWluZXIsIG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygoKSA9PiAoe1xuICByb290OiB7XG4gICAgJyYgPiBwJzoge1xuICAgICAgZm9udFNpemU6ICcxLjE1cmVtJyxcbiAgICB9LFxuICB9LFxufSkpXG5cbmNvbnN0IFRlcm1zID0gKCkgPT4ge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJtZFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgIDxoMiBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxuICAgICAgICA8Yj5URVJNUyBBTkQgQ09ORElUSU9OUzwvYj5cbiAgICAgIDwvaDI+XG4gICAgICA8cD5MYXN0IHVwZGF0ZWQ6IDIwMjEtMDktMDE8L3A+XG4gICAgICA8cD5cbiAgICAgICAgMS4gPGI+SW50cm9kdWN0aW9uPC9iPlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIFdlbGNvbWUgdG8gPGI+VmFsaGFsbGEgTWVkaWEgR3JvdXA8L2I+ICjigJxDb21wYW554oCdLCDigJx3ZeKAnSwg4oCcb3Vy4oCdLCDigJx1c+KAnSkhXG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgVGhlc2UgVGVybXMgb2YgU2VydmljZSAo4oCcVGVybXPigJ0sIOKAnFRlcm1zIG9mIFNlcnZpY2XigJ0pIGdvdmVybiB5b3VyIHVzZSBvZlxuICAgICAgICBvdXIgd2Vic2l0ZSBsb2NhdGVkIGF0IDxiPm1hc2Vub21lbnRhbC5jb208L2I+ICh0b2dldGhlciBvciBpbmRpdmlkdWFsbHlcbiAgICAgICAg4oCcU2VydmljZeKAnSkgb3BlcmF0ZWQgYnkgPGI+VmFsaGFsbGEgTWVkaWEgR3JvdXA8L2I+LlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIE91ciBQcml2YWN5IFBvbGljeSBhbHNvIGdvdmVybnMgeW91ciB1c2Ugb2Ygb3VyIFNlcnZpY2UgYW5kIGV4cGxhaW5zIGhvd1xuICAgICAgICB3ZSBjb2xsZWN0LCBzYWZlZ3VhcmQgYW5kIGRpc2Nsb3NlIGluZm9ybWF0aW9uIHRoYXQgcmVzdWx0cyBmcm9tIHlvdXJcbiAgICAgICAgdXNlIG9mIG91ciB3ZWIgcGFnZXMuXG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgWW91ciBhZ3JlZW1lbnQgd2l0aCB1cyBpbmNsdWRlcyB0aGVzZSBUZXJtcyBhbmQgb3VyIFByaXZhY3kgUG9saWN5XG4gICAgICAgICjigJxBZ3JlZW1lbnRz4oCdKS4gWW91IGFja25vd2xlZGdlIHRoYXQgeW91IGhhdmUgcmVhZCBhbmQgdW5kZXJzdG9vZFxuICAgICAgICBBZ3JlZW1lbnRzLCBhbmQgYWdyZWUgdG8gYmUgYm91bmQgb2YgdGhlbS5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICBJZiB5b3UgZG8gbm90IGFncmVlIHdpdGggKG9yIGNhbm5vdCBjb21wbHkgd2l0aCkgQWdyZWVtZW50cywgdGhlbiB5b3VcbiAgICAgICAgbWF5IG5vdCB1c2UgdGhlIFNlcnZpY2UsIGJ1dCBwbGVhc2UgbGV0IHVzIGtub3cgYnkgZW1haWxpbmcgYXR7JyAnfVxuICAgICAgICA8Yj52YWxoYWxsYW1lZGlhZ3JvdXBAZ21haWwuY29tPC9iPiBzbyB3ZSBjYW4gdHJ5IHRvIGZpbmQgYSBzb2x1dGlvbi5cbiAgICAgICAgVGhlc2UgVGVybXMgYXBwbHkgdG8gYWxsIHZpc2l0b3JzLCB1c2VycyBhbmQgb3RoZXJzIHdobyB3aXNoIHRvIGFjY2Vzc1xuICAgICAgICBvciB1c2UgU2VydmljZS5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICAyLiA8Yj5Db21tdW5pY2F0aW9uczwvYj5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICBCeSB1c2luZyBvdXIgU2VydmljZSwgeW91IGFncmVlIHRvIHN1YnNjcmliZSB0byBuZXdzbGV0dGVycywgbWFya2V0aW5nXG4gICAgICAgIG9yIHByb21vdGlvbmFsIG1hdGVyaWFscyBhbmQgb3RoZXIgaW5mb3JtYXRpb24gd2UgbWF5IHNlbmQuIEhvd2V2ZXIsIHlvdVxuICAgICAgICBtYXkgb3B0IG91dCBvZiByZWNlaXZpbmcgYW55LCBvciBhbGwsIG9mIHRoZXNlIGNvbW11bmljYXRpb25zIGZyb20gdXMgYnlcbiAgICAgICAgZm9sbG93aW5nIHRoZSB1bnN1YnNjcmliZSBsaW5rIG9yIGJ5IGVtYWlsaW5nIGF0XG4gICAgICAgIHZhbGhhbGxhbWVkaWFncm91cEBnbWFpbC5jb20uXG4gICAgICA8L3A+XG5cbiAgICAgIDxwPlxuICAgICAgICAzLiA8Yj5Db250ZXN0cywgU3dlZXBzdGFrZXMgYW5kIFByb21vdGlvbnM8L2I+XG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgQW55IGNvbnRlc3RzLCBzd2VlcHN0YWtlcyBvciBvdGhlciBwcm9tb3Rpb25zIChjb2xsZWN0aXZlbHksXG4gICAgICAgIOKAnFByb21vdGlvbnPigJ0pIG1hZGUgYXZhaWxhYmxlIHRocm91Z2ggU2VydmljZSBtYXkgYmUgZ292ZXJuZWQgYnkgcnVsZXNcbiAgICAgICAgdGhhdCBhcmUgc2VwYXJhdGUgZnJvbSB0aGVzZSBUZXJtcyBvZiBTZXJ2aWNlLiBJZiB5b3UgcGFydGljaXBhdGUgaW4gYW55XG4gICAgICAgIFByb21vdGlvbnMsIHBsZWFzZSByZXZpZXcgdGhlIGFwcGxpY2FibGUgcnVsZXMgYXMgd2VsbCBhcyBvdXIgUHJpdmFjeVxuICAgICAgICBQb2xpY3kuIElmIHRoZSBydWxlcyBmb3IgYSBQcm9tb3Rpb24gY29uZmxpY3Qgd2l0aCB0aGVzZSBUZXJtcyBvZlxuICAgICAgICBTZXJ2aWNlLCBQcm9tb3Rpb24gcnVsZXMgd2lsbCBhcHBseS5cbiAgICAgIDwvcD5cblxuICAgICAgPHA+XG4gICAgICAgIDQuIDxiPkNvbnRlbnQ8L2I+XG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgQ29udGVudCBmb3VuZCBvbiBvciB0aHJvdWdoIHRoaXMgU2VydmljZSBhcmUgdGhlIHByb3BlcnR5IG9mIFZhbGhhbGxhXG4gICAgICAgIE1lZGlhIEdyb3VwIG9yIHVzZWQgd2l0aCBwZXJtaXNzaW9uLiBZb3UgbWF5IG5vdCBkaXN0cmlidXRlLCBtb2RpZnksXG4gICAgICAgIHRyYW5zbWl0LCByZXVzZSwgZG93bmxvYWQsIHJlcG9zdCwgY29weSwgb3IgdXNlIHNhaWQgQ29udGVudCwgd2hldGhlciBpblxuICAgICAgICB3aG9sZSBvciBpbiBwYXJ0LCBmb3IgY29tbWVyY2lhbCBwdXJwb3NlcyBvciBmb3IgcGVyc29uYWwgZ2Fpbiwgd2l0aG91dFxuICAgICAgICBleHByZXNzIGFkdmFuY2Ugd3JpdHRlbiBwZXJtaXNzaW9uIGZyb20gdXMuXG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgNS4gPGI+UHJvaGliaXRlZCBVc2VzPC9iPlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIFlvdSBtYXkgdXNlIFNlcnZpY2Ugb25seSBmb3IgbGF3ZnVsIHB1cnBvc2VzIGFuZCBpbiBhY2NvcmRhbmNlIHdpdGhcbiAgICAgICAgVGVybXMuIFlvdSBhZ3JlZSBub3QgdG8gdXNlIFNlcnZpY2U6XG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgMC4xLiBJbiBhbnkgd2F5IHRoYXQgdmlvbGF0ZXMgYW55IGFwcGxpY2FibGUgbmF0aW9uYWwgb3IgaW50ZXJuYXRpb25hbFxuICAgICAgICBsYXcgb3IgcmVndWxhdGlvbi5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICAwLjIuIEZvciB0aGUgcHVycG9zZSBvZiBleHBsb2l0aW5nLCBoYXJtaW5nLCBvciBhdHRlbXB0aW5nIHRvIGV4cGxvaXQgb3JcbiAgICAgICAgaGFybSBtaW5vcnMgaW4gYW55IHdheSBieSBleHBvc2luZyB0aGVtIHRvIGluYXBwcm9wcmlhdGUgY29udGVudCBvclxuICAgICAgICBvdGhlcndpc2UuXG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgMC4zLiBUbyB0cmFuc21pdCwgb3IgcHJvY3VyZSB0aGUgc2VuZGluZyBvZiwgYW55IGFkdmVydGlzaW5nIG9yXG4gICAgICAgIHByb21vdGlvbmFsIG1hdGVyaWFsLCBpbmNsdWRpbmcgYW55IOKAnGp1bmsgbWFpbOKAnSwg4oCcY2hhaW4gbGV0dGVyLOKAnSDigJxzcGFtLOKAnVxuICAgICAgICBvciBhbnkgb3RoZXIgc2ltaWxhciBzb2xpY2l0YXRpb24uXG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgMC40LiBUbyBpbXBlcnNvbmF0ZSBvciBhdHRlbXB0IHRvIGltcGVyc29uYXRlIENvbXBhbnksIGEgQ29tcGFueVxuICAgICAgICBlbXBsb3llZSwgYW5vdGhlciB1c2VyLCBvciBhbnkgb3RoZXIgcGVyc29uIG9yIGVudGl0eS5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICAwLjUuIEluIGFueSB3YXkgdGhhdCBpbmZyaW5nZXMgdXBvbiB0aGUgcmlnaHRzIG9mIG90aGVycywgb3IgaW4gYW55IHdheVxuICAgICAgICBpcyBpbGxlZ2FsLCB0aHJlYXRlbmluZywgZnJhdWR1bGVudCwgb3IgaGFybWZ1bCwgb3IgaW4gY29ubmVjdGlvbiB3aXRoXG4gICAgICAgIGFueSB1bmxhd2Z1bCwgaWxsZWdhbCwgZnJhdWR1bGVudCwgb3IgaGFybWZ1bCBwdXJwb3NlIG9yIGFjdGl2aXR5LlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIDAuNi4gVG8gZW5nYWdlIGluIGFueSBvdGhlciBjb25kdWN0IHRoYXQgcmVzdHJpY3RzIG9yIGluaGliaXRzIGFueW9uZeKAmXNcbiAgICAgICAgdXNlIG9yIGVuam95bWVudCBvZiBTZXJ2aWNlLCBvciB3aGljaCwgYXMgZGV0ZXJtaW5lZCBieSB1cywgbWF5IGhhcm0gb3JcbiAgICAgICAgb2ZmZW5kIENvbXBhbnkgb3IgdXNlcnMgb2YgU2VydmljZSBvciBleHBvc2UgdGhlbSB0byBsaWFiaWxpdHkuXG4gICAgICA8L3A+XG4gICAgICA8cD5BZGRpdGlvbmFsbHksIHlvdSBhZ3JlZSBub3QgdG86PC9wPlxuICAgICAgPHA+XG4gICAgICAgIDAuMS4gVXNlIFNlcnZpY2UgaW4gYW55IG1hbm5lciB0aGF0IGNvdWxkIGRpc2FibGUsIG92ZXJidXJkZW4sIGRhbWFnZSxcbiAgICAgICAgb3IgaW1wYWlyIFNlcnZpY2Ugb3IgaW50ZXJmZXJlIHdpdGggYW55IG90aGVyIHBhcnR54oCZcyB1c2Ugb2YgU2VydmljZSxcbiAgICAgICAgaW5jbHVkaW5nIHRoZWlyIGFiaWxpdHkgdG8gZW5nYWdlIGluIHJlYWwgdGltZSBhY3Rpdml0aWVzIHRocm91Z2hcbiAgICAgICAgU2VydmljZS5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICAwLjIuIFVzZSBhbnkgcm9ib3QsIHNwaWRlciwgb3Igb3RoZXIgYXV0b21hdGljIGRldmljZSwgcHJvY2Vzcywgb3IgbWVhbnNcbiAgICAgICAgdG8gYWNjZXNzIFNlcnZpY2UgZm9yIGFueSBwdXJwb3NlLCBpbmNsdWRpbmcgbW9uaXRvcmluZyBvciBjb3B5aW5nIGFueVxuICAgICAgICBvZiB0aGUgbWF0ZXJpYWwgb24gU2VydmljZS5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICAwLjMuIFVzZSBhbnkgbWFudWFsIHByb2Nlc3MgdG8gbW9uaXRvciBvciBjb3B5IGFueSBvZiB0aGUgbWF0ZXJpYWwgb25cbiAgICAgICAgU2VydmljZSBvciBmb3IgYW55IG90aGVyIHVuYXV0aG9yaXplZCBwdXJwb3NlIHdpdGhvdXQgb3VyIHByaW9yIHdyaXR0ZW5cbiAgICAgICAgY29uc2VudC5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICAwLjQuIFVzZSBhbnkgZGV2aWNlLCBzb2Z0d2FyZSwgb3Igcm91dGluZSB0aGF0IGludGVyZmVyZXMgd2l0aCB0aGVcbiAgICAgICAgcHJvcGVyIHdvcmtpbmcgb2YgU2VydmljZS5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICAwLjUuIEludHJvZHVjZSBhbnkgdmlydXNlcywgdHJvamFuIGhvcnNlcywgd29ybXMsIGxvZ2ljIGJvbWJzLCBvciBvdGhlclxuICAgICAgICBtYXRlcmlhbCB3aGljaCBpcyBtYWxpY2lvdXMgb3IgdGVjaG5vbG9naWNhbGx5IGhhcm1mdWwuXG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgMC42LiBBdHRlbXB0IHRvIGdhaW4gdW5hdXRob3JpemVkIGFjY2VzcyB0bywgaW50ZXJmZXJlIHdpdGgsIGRhbWFnZSwgb3JcbiAgICAgICAgZGlzcnVwdCBhbnkgcGFydHMgb2YgU2VydmljZSwgdGhlIHNlcnZlciBvbiB3aGljaCBTZXJ2aWNlIGlzIHN0b3JlZCwgb3JcbiAgICAgICAgYW55IHNlcnZlciwgY29tcHV0ZXIsIG9yIGRhdGFiYXNlIGNvbm5lY3RlZCB0byBTZXJ2aWNlLlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIDAuNy4gQXR0YWNrIFNlcnZpY2UgdmlhIGEgZGVuaWFsLW9mLXNlcnZpY2UgYXR0YWNrIG9yIGEgZGlzdHJpYnV0ZWRcbiAgICAgICAgZGVuaWFsLW9mLXNlcnZpY2UgYXR0YWNrLlxuICAgICAgPC9wPlxuICAgICAgPHA+MC44LiBUYWtlIGFueSBhY3Rpb24gdGhhdCBtYXkgZGFtYWdlIG9yIGZhbHNpZnkgQ29tcGFueSByYXRpbmcuPC9wPlxuICAgICAgPHA+XG4gICAgICAgIDAuOS4gT3RoZXJ3aXNlIGF0dGVtcHQgdG8gaW50ZXJmZXJlIHdpdGggdGhlIHByb3BlciB3b3JraW5nIG9mIFNlcnZpY2UuXG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgNi4gPGI+QW5hbHl0aWNzPC9iPlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIFdlIG1heSB1c2UgdGhpcmQtcGFydHkgU2VydmljZSBQcm92aWRlcnMgdG8gbW9uaXRvciBhbmQgYW5hbHl6ZSB0aGUgdXNlXG4gICAgICAgIG9mIG91ciBTZXJ2aWNlLlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIDcuIDxiPk5vIFVzZSBCeSBNaW5vcnM8L2I+XG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgU2VydmljZSBpcyBpbnRlbmRlZCBvbmx5IGZvciBhY2Nlc3MgYW5kIHVzZSBieSBpbmRpdmlkdWFscyBhdCBsZWFzdFxuICAgICAgICBlaWdodGVlbiAoMTgpIHllYXJzIG9sZC4gQnkgYWNjZXNzaW5nIG9yIHVzaW5nIFNlcnZpY2UsIHlvdSB3YXJyYW50IGFuZFxuICAgICAgICByZXByZXNlbnQgdGhhdCB5b3UgYXJlIGF0IGxlYXN0IGVpZ2h0ZWVuICgxOCkgeWVhcnMgb2YgYWdlIGFuZCB3aXRoIHRoZVxuICAgICAgICBmdWxsIGF1dGhvcml0eSwgcmlnaHQsIGFuZCBjYXBhY2l0eSB0byBlbnRlciBpbnRvIHRoaXMgYWdyZWVtZW50IGFuZFxuICAgICAgICBhYmlkZSBieSBhbGwgb2YgdGhlIHRlcm1zIGFuZCBjb25kaXRpb25zIG9mIFRlcm1zLiBJZiB5b3UgYXJlIG5vdCBhdFxuICAgICAgICBsZWFzdCBlaWdodGVlbiAoMTgpIHllYXJzIG9sZCwgeW91IGFyZSBwcm9oaWJpdGVkIGZyb20gYm90aCB0aGUgYWNjZXNzXG4gICAgICAgIGFuZCB1c2FnZSBvZiBTZXJ2aWNlLlxuICAgICAgPC9wPlxuXG4gICAgICA8cD5cbiAgICAgICAgOC4gPGI+SW50ZWxsZWN0dWFsIFByb3BlcnR5PC9iPlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIFNlcnZpY2UgYW5kIGl0cyBvcmlnaW5hbCBjb250ZW50IChleGNsdWRpbmcgQ29udGVudCBwcm92aWRlZCBieSB1c2VycyksXG4gICAgICAgIGZlYXR1cmVzIGFuZCBmdW5jdGlvbmFsaXR5IGFyZSBhbmQgd2lsbCByZW1haW4gdGhlIGV4Y2x1c2l2ZSBwcm9wZXJ0eSBvZlxuICAgICAgICBWYWxoYWxsYSBNZWRpYSBHcm91cCBhbmQgaXRzIGxpY2Vuc29ycy4gU2VydmljZSBpcyBwcm90ZWN0ZWQgYnlcbiAgICAgICAgY29weXJpZ2h0LCB0cmFkZW1hcmssIGFuZCBvdGhlciBsYXdzIG9mIGFuZCBmb3JlaWduIGNvdW50cmllcy4gT3VyXG4gICAgICAgIHRyYWRlbWFya3MgbWF5IG5vdCBiZSB1c2VkIGluIGNvbm5lY3Rpb24gd2l0aCBhbnkgcHJvZHVjdCBvciBzZXJ2aWNlXG4gICAgICAgIHdpdGhvdXQgdGhlIHByaW9yIHdyaXR0ZW4gY29uc2VudCBvZiBWYWxoYWxsYSBNZWRpYSBHcm91cC5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICA5LiA8Yj5Db3B5cmlnaHQgUG9saWN5PC9iPlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIFdlIHJlc3BlY3QgdGhlIGludGVsbGVjdHVhbCBwcm9wZXJ0eSByaWdodHMgb2Ygb3RoZXJzLiBJdCBpcyBvdXIgcG9saWN5XG4gICAgICAgIHRvIHJlc3BvbmQgdG8gYW55IGNsYWltIHRoYXQgQ29udGVudCBwb3N0ZWQgb24gU2VydmljZSBpbmZyaW5nZXMgb24gdGhlXG4gICAgICAgIGNvcHlyaWdodCBvciBvdGhlciBpbnRlbGxlY3R1YWwgcHJvcGVydHkgcmlnaHRzICjigJxJbmZyaW5nZW1lbnTigJ0pIG9mIGFueVxuICAgICAgICBwZXJzb24gb3IgZW50aXR5LlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIElmIHlvdSBhcmUgYSBjb3B5cmlnaHQgb3duZXIsIG9yIGF1dGhvcml6ZWQgb24gYmVoYWxmIG9mIG9uZSwgYW5kIHlvdVxuICAgICAgICBiZWxpZXZlIHRoYXQgdGhlIGNvcHlyaWdodGVkIHdvcmsgaGFzIGJlZW4gY29waWVkIGluIGEgd2F5IHRoYXRcbiAgICAgICAgY29uc3RpdHV0ZXMgY29weXJpZ2h0IGluZnJpbmdlbWVudCwgcGxlYXNlIHN1Ym1pdCB5b3VyIGNsYWltIHZpYSBlbWFpbFxuICAgICAgICB0byB2YWxoYWxsYW1lZGlhZ3JvdXBAZ21haWwuY29tLCB3aXRoIHRoZSBzdWJqZWN0IGxpbmU6IOKAnENvcHlyaWdodFxuICAgICAgICBJbmZyaW5nZW1lbnTigJ0gYW5kIGluY2x1ZGUgaW4geW91ciBjbGFpbSBhIGRldGFpbGVkIGRlc2NyaXB0aW9uIG9mIHRoZVxuICAgICAgICBhbGxlZ2VkIEluZnJpbmdlbWVudCBhcyBkZXRhaWxlZCBiZWxvdywgdW5kZXIg4oCcRE1DQSBOb3RpY2UgYW5kIFByb2NlZHVyZVxuICAgICAgICBmb3IgQ29weXJpZ2h0IEluZnJpbmdlbWVudCBDbGFpbXPigJ1cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICBZb3UgbWF5IGJlIGhlbGQgYWNjb3VudGFibGUgZm9yIGRhbWFnZXMgKGluY2x1ZGluZyBjb3N0cyBhbmQgYXR0b3JuZXlz4oCZXG4gICAgICAgIGZlZXMpIGZvciBtaXNyZXByZXNlbnRhdGlvbiBvciBiYWQtZmFpdGggY2xhaW1zIG9uIHRoZSBpbmZyaW5nZW1lbnQgb2ZcbiAgICAgICAgYW55IENvbnRlbnQgZm91bmQgb24gYW5kL29yIHRocm91Z2ggU2VydmljZSBvbiB5b3VyIGNvcHlyaWdodC5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICAxMC4gPGI+RE1DQSBOb3RpY2UgYW5kIFByb2NlZHVyZSBmb3IgQ29weXJpZ2h0IEluZnJpbmdlbWVudCBDbGFpbXM8L2I+XG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgWW91IG1heSBzdWJtaXQgYSBub3RpZmljYXRpb24gcHVyc3VhbnQgdG8gdGhlIERpZ2l0YWwgTWlsbGVubml1bVxuICAgICAgICBDb3B5cmlnaHQgQWN0IChETUNBKSBieSBwcm92aWRpbmcgb3VyIENvcHlyaWdodCBBZ2VudCB3aXRoIHRoZSBmb2xsb3dpbmdcbiAgICAgICAgaW5mb3JtYXRpb24gaW4gd3JpdGluZyAoc2VlIDE3IFUuUy5DIDUxMihjKSgzKSBmb3IgZnVydGhlciBkZXRhaWwpOlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIDAuMS4gYW4gZWxlY3Ryb25pYyBvciBwaHlzaWNhbCBzaWduYXR1cmUgb2YgdGhlIHBlcnNvbiBhdXRob3JpemVkIHRvIGFjdFxuICAgICAgICBvbiBiZWhhbGYgb2YgdGhlIG93bmVyIG9mIHRoZSBjb3B5cmlnaHTigJlzIGludGVyZXN0O1xuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIDAuMi4gYSBkZXNjcmlwdGlvbiBvZiB0aGUgY29weXJpZ2h0ZWQgd29yayB0aGF0IHlvdSBjbGFpbSBoYXMgYmVlblxuICAgICAgICBpbmZyaW5nZWQsIGluY2x1ZGluZyB0aGUgVVJMIChpLmUuLCB3ZWIgcGFnZSBhZGRyZXNzKSBvZiB0aGUgbG9jYXRpb25cbiAgICAgICAgd2hlcmUgdGhlIGNvcHlyaWdodGVkIHdvcmsgZXhpc3RzIG9yIGEgY29weSBvZiB0aGUgY29weXJpZ2h0ZWQgd29yaztcbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICAwLjMuIGlkZW50aWZpY2F0aW9uIG9mIHRoZSBVUkwgb3Igb3RoZXIgc3BlY2lmaWMgbG9jYXRpb24gb24gU2VydmljZVxuICAgICAgICB3aGVyZSB0aGUgbWF0ZXJpYWwgdGhhdCB5b3UgY2xhaW0gaXMgaW5mcmluZ2luZyBpcyBsb2NhdGVkO1xuICAgICAgPC9wPlxuICAgICAgPHA+MC40LiB5b3VyIGFkZHJlc3MsIHRlbGVwaG9uZSBudW1iZXIsIGFuZCBlbWFpbCBhZGRyZXNzOzwvcD5cbiAgICAgIDxwPlxuICAgICAgICAwLjUuIGEgc3RhdGVtZW50IGJ5IHlvdSB0aGF0IHlvdSBoYXZlIGEgZ29vZCBmYWl0aCBiZWxpZWYgdGhhdCB0aGVcbiAgICAgICAgZGlzcHV0ZWQgdXNlIGlzIG5vdCBhdXRob3JpemVkIGJ5IHRoZSBjb3B5cmlnaHQgb3duZXIsIGl0cyBhZ2VudCwgb3IgdGhlXG4gICAgICAgIGxhdztcbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICAwLjYuIGEgc3RhdGVtZW50IGJ5IHlvdSwgbWFkZSB1bmRlciBwZW5hbHR5IG9mIHBlcmp1cnksIHRoYXQgdGhlIGFib3ZlXG4gICAgICAgIGluZm9ybWF0aW9uIGluIHlvdXIgbm90aWNlIGlzIGFjY3VyYXRlIGFuZCB0aGF0IHlvdSBhcmUgdGhlIGNvcHlyaWdodFxuICAgICAgICBvd25lciBvciBhdXRob3JpemVkIHRvIGFjdCBvbiB0aGUgY29weXJpZ2h0IG93bmVy4oCZcyBiZWhhbGYuXG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgWW91IGNhbiBjb250YWN0IG91ciBDb3B5cmlnaHQgQWdlbnQgdmlhIGVtYWlsIGF0XG4gICAgICAgIHZhbGhhbGxhbWVkaWFncm91cEBnbWFpbC5jb20uXG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgMTEuIDxiPkVycm9yIFJlcG9ydGluZyBhbmQgRmVlZGJhY2s8L2I+XG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgWW91IG1heSBwcm92aWRlIHVzIGVpdGhlciBkaXJlY3RseSBhdCB2YWxoYWxsYW1lZGlhZ3JvdXBAZ21haWwuY29tIG9yXG4gICAgICAgIHZpYSB0aGlyZCBwYXJ0eSBzaXRlcyBhbmQgdG9vbHMgd2l0aCBpbmZvcm1hdGlvbiBhbmQgZmVlZGJhY2sgY29uY2VybmluZ1xuICAgICAgICBlcnJvcnMsIHN1Z2dlc3Rpb25zIGZvciBpbXByb3ZlbWVudHMsIGlkZWFzLCBwcm9ibGVtcywgY29tcGxhaW50cywgYW5kXG4gICAgICAgIG90aGVyIG1hdHRlcnMgcmVsYXRlZCB0byBvdXIgU2VydmljZSAo4oCcRmVlZGJhY2vigJ0pLiBZb3UgYWNrbm93bGVkZ2UgYW5kXG4gICAgICAgIGFncmVlIHRoYXQ6IChpKSB5b3Ugc2hhbGwgbm90IHJldGFpbiwgYWNxdWlyZSBvciBhc3NlcnQgYW55IGludGVsbGVjdHVhbFxuICAgICAgICBwcm9wZXJ0eSByaWdodCBvciBvdGhlciByaWdodCwgdGl0bGUgb3IgaW50ZXJlc3QgaW4gb3IgdG8gdGhlIEZlZWRiYWNrO1xuICAgICAgICAoaWkpIENvbXBhbnkgbWF5IGhhdmUgZGV2ZWxvcG1lbnQgaWRlYXMgc2ltaWxhciB0byB0aGUgRmVlZGJhY2s7IChpaWkpXG4gICAgICAgIEZlZWRiYWNrIGRvZXMgbm90IGNvbnRhaW4gY29uZmlkZW50aWFsIGluZm9ybWF0aW9uIG9yIHByb3ByaWV0YXJ5XG4gICAgICAgIGluZm9ybWF0aW9uIGZyb20geW91IG9yIGFueSB0aGlyZCBwYXJ0eTsgYW5kIChpdikgQ29tcGFueSBpcyBub3QgdW5kZXJcbiAgICAgICAgYW55IG9ibGlnYXRpb24gb2YgY29uZmlkZW50aWFsaXR5IHdpdGggcmVzcGVjdCB0byB0aGUgRmVlZGJhY2suIEluIHRoZVxuICAgICAgICBldmVudCB0aGUgdHJhbnNmZXIgb2YgdGhlIG93bmVyc2hpcCB0byB0aGUgRmVlZGJhY2sgaXMgbm90IHBvc3NpYmxlIGR1ZVxuICAgICAgICB0byBhcHBsaWNhYmxlIG1hbmRhdG9yeSBsYXdzLCB5b3UgZ3JhbnQgQ29tcGFueSBhbmQgaXRzIGFmZmlsaWF0ZXMgYW5cbiAgICAgICAgZXhjbHVzaXZlLCB0cmFuc2ZlcmFibGUsIGlycmV2b2NhYmxlLCBmcmVlLW9mLWNoYXJnZSwgc3ViLWxpY2Vuc2FibGUsXG4gICAgICAgIHVubGltaXRlZCBhbmQgcGVycGV0dWFsIHJpZ2h0IHRvIHVzZSAoaW5jbHVkaW5nIGNvcHksIG1vZGlmeSwgY3JlYXRlXG4gICAgICAgIGRlcml2YXRpdmUgd29ya3MsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUgYW5kIGNvbW1lcmNpYWxpemUpIEZlZWRiYWNrIGluIGFueVxuICAgICAgICBtYW5uZXIgYW5kIGZvciBhbnkgcHVycG9zZS5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICAxMi4gPGI+TGlua3MgVG8gT3RoZXIgV2ViIFNpdGVzPC9iPlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIE91ciBTZXJ2aWNlIG1heSBjb250YWluIGxpbmtzIHRvIHRoaXJkIHBhcnR5IHdlYiBzaXRlcyBvciBzZXJ2aWNlcyB0aGF0XG4gICAgICAgIGFyZSBub3Qgb3duZWQgb3IgY29udHJvbGxlZCBieSBWYWxoYWxsYSBNZWRpYSBHcm91cC5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICBWYWxoYWxsYSBNZWRpYSBHcm91cCBoYXMgbm8gY29udHJvbCBvdmVyLCBhbmQgYXNzdW1lcyBubyByZXNwb25zaWJpbGl0eVxuICAgICAgICBmb3IgdGhlIGNvbnRlbnQsIHByaXZhY3kgcG9saWNpZXMsIG9yIHByYWN0aWNlcyBvZiBhbnkgdGhpcmQgcGFydHkgd2ViXG4gICAgICAgIHNpdGVzIG9yIHNlcnZpY2VzLiBXZSBkbyBub3Qgd2FycmFudCB0aGUgb2ZmZXJpbmdzIG9mIGFueSBvZiB0aGVzZVxuICAgICAgICBlbnRpdGllcy9pbmRpdmlkdWFscyBvciB0aGVpciB3ZWJzaXRlcy5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICBZT1UgQUNLTk9XTEVER0UgQU5EIEFHUkVFIFRIQVQgQ09NUEFOWSBTSEFMTCBOT1QgQkUgUkVTUE9OU0lCTEUgT1JcbiAgICAgICAgTElBQkxFLCBESVJFQ1RMWSBPUiBJTkRJUkVDVExZLCBGT1IgQU5ZIERBTUFHRSBPUiBMT1NTIENBVVNFRCBPUiBBTExFR0VEXG4gICAgICAgIFRPIEJFIENBVVNFRCBCWSBPUiBJTiBDT05ORUNUSU9OIFdJVEggVVNFIE9GIE9SIFJFTElBTkNFIE9OIEFOWSBTVUNIXG4gICAgICAgIENPTlRFTlQsIEdPT0RTIE9SIFNFUlZJQ0VTIEFWQUlMQUJMRSBPTiBPUiBUSFJPVUdIIEFOWSBTVUNIIFRISVJEIFBBUlRZXG4gICAgICAgIFdFQiBTSVRFUyBPUiBTRVJWSUNFUy5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICBXRSBTVFJPTkdMWSBBRFZJU0UgWU9VIFRPIFJFQUQgVEhFIFRFUk1TIE9GIFNFUlZJQ0UgQU5EIFBSSVZBQ1kgUE9MSUNJRVNcbiAgICAgICAgT0YgQU5ZIFRISVJEIFBBUlRZIFdFQiBTSVRFUyBPUiBTRVJWSUNFUyBUSEFUIFlPVSBWSVNJVC5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICAxMy4gPGI+RGlzY2xhaW1lciBPZiBXYXJyYW50eTwvYj5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICBUSEVTRSBTRVJWSUNFUyBBUkUgUFJPVklERUQgQlkgQ09NUEFOWSBPTiBBTiDigJxBUyBJU+KAnSBBTkQg4oCcQVMgQVZBSUxBQkxF4oCdXG4gICAgICAgIEJBU0lTLiBDT01QQU5ZIE1BS0VTIE5PIFJFUFJFU0VOVEFUSU9OUyBPUiBXQVJSQU5USUVTIE9GIEFOWSBLSU5ELFxuICAgICAgICBFWFBSRVNTIE9SIElNUExJRUQsIEFTIFRPIFRIRSBPUEVSQVRJT04gT0YgVEhFSVIgU0VSVklDRVMsIE9SIFRIRVxuICAgICAgICBJTkZPUk1BVElPTiwgQ09OVEVOVCBPUiBNQVRFUklBTFMgSU5DTFVERUQgVEhFUkVJTi4gWU9VIEVYUFJFU1NMWSBBR1JFRVxuICAgICAgICBUSEFUIFlPVVIgVVNFIE9GIFRIRVNFIFNFUlZJQ0VTLCBUSEVJUiBDT05URU5ULCBBTkQgQU5ZIFNFUlZJQ0VTIE9SXG4gICAgICAgIElURU1TIE9CVEFJTkVEIEZST00gVVMgSVMgQVQgWU9VUiBTT0xFIFJJU0suXG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgTkVJVEhFUiBDT01QQU5ZIE5PUiBBTlkgUEVSU09OIEFTU09DSUFURUQgV0lUSCBDT01QQU5ZIE1BS0VTIEFOWVxuICAgICAgICBXQVJSQU5UWSBPUiBSRVBSRVNFTlRBVElPTiBXSVRIIFJFU1BFQ1QgVE8gVEhFIENPTVBMRVRFTkVTUywgU0VDVVJJVFksXG4gICAgICAgIFJFTElBQklMSVRZLCBRVUFMSVRZLCBBQ0NVUkFDWSwgT1IgQVZBSUxBQklMSVRZIE9GIFRIRSBTRVJWSUNFUy4gV0lUSE9VVFxuICAgICAgICBMSU1JVElORyBUSEUgRk9SRUdPSU5HLCBORUlUSEVSIENPTVBBTlkgTk9SIEFOWU9ORSBBU1NPQ0lBVEVEIFdJVEhcbiAgICAgICAgQ09NUEFOWSBSRVBSRVNFTlRTIE9SIFdBUlJBTlRTIFRIQVQgVEhFIFNFUlZJQ0VTLCBUSEVJUiBDT05URU5ULCBPUiBBTllcbiAgICAgICAgU0VSVklDRVMgT1IgSVRFTVMgT0JUQUlORUQgVEhST1VHSCBUSEUgU0VSVklDRVMgV0lMTCBCRSBBQ0NVUkFURSxcbiAgICAgICAgUkVMSUFCTEUsIEVSUk9SLUZSRUUsIE9SIFVOSU5URVJSVVBURUQsIFRIQVQgREVGRUNUUyBXSUxMIEJFIENPUlJFQ1RFRCxcbiAgICAgICAgVEhBVCBUSEUgU0VSVklDRVMgT1IgVEhFIFNFUlZFUiBUSEFUIE1BS0VTIElUIEFWQUlMQUJMRSBBUkUgRlJFRSBPRlxuICAgICAgICBWSVJVU0VTIE9SIE9USEVSIEhBUk1GVUwgQ09NUE9ORU5UUyBPUiBUSEFUIFRIRSBTRVJWSUNFUyBPUiBBTlkgU0VSVklDRVNcbiAgICAgICAgT1IgSVRFTVMgT0JUQUlORUQgVEhST1VHSCBUSEUgU0VSVklDRVMgV0lMTCBPVEhFUldJU0UgTUVFVCBZT1VSIE5FRURTIE9SXG4gICAgICAgIEVYUEVDVEFUSU9OUy5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICBDT01QQU5ZIEhFUkVCWSBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgT0YgQU5ZIEtJTkQsIFdIRVRIRVIgRVhQUkVTUyBPUlxuICAgICAgICBJTVBMSUVELCBTVEFUVVRPUlksIE9SIE9USEVSV0lTRSwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBBTllcbiAgICAgICAgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIE5PTi1JTkZSSU5HRU1FTlQsIEFORCBGSVRORVNTIEZPUlxuICAgICAgICBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgVEhFIEZPUkVHT0lORyBET0VTIE5PVCBBRkZFQ1QgQU5ZIFdBUlJBTlRJRVMgV0hJQ0ggQ0FOTk9UIEJFIEVYQ0xVREVEIE9SXG4gICAgICAgIExJTUlURUQgVU5ERVIgQVBQTElDQUJMRSBMQVcuXG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgMTQuIDxiPkxpbWl0YXRpb24gT2YgTGlhYmlsaXR5PC9iPlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIEVYQ0VQVCBBUyBQUk9ISUJJVEVEIEJZIExBVywgWU9VIFdJTEwgSE9MRCBVUyBBTkQgT1VSIE9GRklDRVJTLFxuICAgICAgICBESVJFQ1RPUlMsIEVNUExPWUVFUywgQU5EIEFHRU5UUyBIQVJNTEVTUyBGT1IgQU5ZIElORElSRUNULCBQVU5JVElWRSxcbiAgICAgICAgU1BFQ0lBTCwgSU5DSURFTlRBTCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0UsIEhPV0VWRVIgSVQgQVJJU0VTXG4gICAgICAgIChJTkNMVURJTkcgQVRUT1JORVlT4oCZIEZFRVMgQU5EIEFMTCBSRUxBVEVEIENPU1RTIEFORCBFWFBFTlNFUyBPRlxuICAgICAgICBMSVRJR0FUSU9OIEFORCBBUkJJVFJBVElPTiwgT1IgQVQgVFJJQUwgT1IgT04gQVBQRUFMLCBJRiBBTlksIFdIRVRIRVIgT1JcbiAgICAgICAgTk9UIExJVElHQVRJT04gT1IgQVJCSVRSQVRJT04gSVMgSU5TVElUVVRFRCksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GXG4gICAgICAgIENPTlRSQUNULCBORUdMSUdFTkNFLCBPUiBPVEhFUiBUT1JUSU9VUyBBQ1RJT04sIE9SIEFSSVNJTkcgT1VUIE9GIE9SIElOXG4gICAgICAgIENPTk5FQ1RJT04gV0lUSCBUSElTIEFHUkVFTUVOVCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgQ0xBSU1cbiAgICAgICAgRk9SIFBFUlNPTkFMIElOSlVSWSBPUiBQUk9QRVJUWSBEQU1BR0UsIEFSSVNJTkcgRlJPTSBUSElTIEFHUkVFTUVOVCBBTkRcbiAgICAgICAgQU5ZIFZJT0xBVElPTiBCWSBZT1UgT0YgQU5ZIEZFREVSQUwsIFNUQVRFLCBPUiBMT0NBTCBMQVdTLCBTVEFUVVRFUyxcbiAgICAgICAgUlVMRVMsIE9SIFJFR1VMQVRJT05TLCBFVkVOIElGIENPTVBBTlkgSEFTIEJFRU4gUFJFVklPVVNMWSBBRFZJU0VEIE9GXG4gICAgICAgIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS4gRVhDRVBUIEFTIFBST0hJQklURUQgQlkgTEFXLCBJRiBUSEVSRSBJU1xuICAgICAgICBMSUFCSUxJVFkgRk9VTkQgT04gVEhFIFBBUlQgT0YgQ09NUEFOWSwgSVQgV0lMTCBCRSBMSU1JVEVEIFRPIFRIRSBBTU9VTlRcbiAgICAgICAgUEFJRCBGT1IgVEhFIFBST0RVQ1RTIEFORC9PUiBTRVJWSUNFUywgQU5EIFVOREVSIE5PIENJUkNVTVNUQU5DRVMgV0lMTFxuICAgICAgICBUSEVSRSBCRSBDT05TRVFVRU5USUFMIE9SIFBVTklUSVZFIERBTUFHRVMuIFNPTUUgU1RBVEVTIERPIE5PVCBBTExPVyBUSEVcbiAgICAgICAgRVhDTFVTSU9OIE9SIExJTUlUQVRJT04gT0YgUFVOSVRJVkUsIElOQ0lERU5UQUwgT1IgQ09OU0VRVUVOVElBTFxuICAgICAgICBEQU1BR0VTLCBTTyBUSEUgUFJJT1IgTElNSVRBVElPTiBPUiBFWENMVVNJT04gTUFZIE5PVCBBUFBMWSBUTyBZT1UuXG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgMTUuIDxiPlRlcm1pbmF0aW9uPC9iPlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIFdlIG1heSB0ZXJtaW5hdGUgb3Igc3VzcGVuZCB5b3VyIGFjY291bnQgYW5kIGJhciBhY2Nlc3MgdG8gU2VydmljZVxuICAgICAgICBpbW1lZGlhdGVseSwgd2l0aG91dCBwcmlvciBub3RpY2Ugb3IgbGlhYmlsaXR5LCB1bmRlciBvdXIgc29sZVxuICAgICAgICBkaXNjcmV0aW9uLCBmb3IgYW55IHJlYXNvbiB3aGF0c29ldmVyIGFuZCB3aXRob3V0IGxpbWl0YXRpb24sIGluY2x1ZGluZ1xuICAgICAgICBidXQgbm90IGxpbWl0ZWQgdG8gYSBicmVhY2ggb2YgVGVybXMuXG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgSWYgeW91IHdpc2ggdG8gdGVybWluYXRlIHlvdXIgYWNjb3VudCwgeW91IG1heSBzaW1wbHkgZGlzY29udGludWUgdXNpbmdcbiAgICAgICAgU2VydmljZS5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICBBbGwgcHJvdmlzaW9ucyBvZiBUZXJtcyB3aGljaCBieSB0aGVpciBuYXR1cmUgc2hvdWxkIHN1cnZpdmUgdGVybWluYXRpb25cbiAgICAgICAgc2hhbGwgc3Vydml2ZSB0ZXJtaW5hdGlvbiwgaW5jbHVkaW5nLCB3aXRob3V0IGxpbWl0YXRpb24sIG93bmVyc2hpcFxuICAgICAgICBwcm92aXNpb25zLCB3YXJyYW50eSBkaXNjbGFpbWVycywgaW5kZW1uaXR5IGFuZCBsaW1pdGF0aW9ucyBvZlxuICAgICAgICBsaWFiaWxpdHkuXG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgMTYuIDxiPkdvdmVybmluZyBMYXc8L2I+XG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgVGhlc2UgVGVybXMgc2hhbGwgYmUgZ292ZXJuZWQgYW5kIGNvbnN0cnVlZCBpbiBhY2NvcmRhbmNlIHdpdGggdGhlIGxhd3NcbiAgICAgICAgb2YgS2VueWEsIHdoaWNoIGdvdmVybmluZyBsYXcgYXBwbGllcyB0byBhZ3JlZW1lbnQgd2l0aG91dCByZWdhcmQgdG8gaXRzXG4gICAgICAgIGNvbmZsaWN0IG9mIGxhdyBwcm92aXNpb25zLlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIE91ciBmYWlsdXJlIHRvIGVuZm9yY2UgYW55IHJpZ2h0IG9yIHByb3Zpc2lvbiBvZiB0aGVzZSBUZXJtcyB3aWxsIG5vdCBiZVxuICAgICAgICBjb25zaWRlcmVkIGEgd2FpdmVyIG9mIHRob3NlIHJpZ2h0cy4gSWYgYW55IHByb3Zpc2lvbiBvZiB0aGVzZSBUZXJtcyBpc1xuICAgICAgICBoZWxkIHRvIGJlIGludmFsaWQgb3IgdW5lbmZvcmNlYWJsZSBieSBhIGNvdXJ0LCB0aGUgcmVtYWluaW5nIHByb3Zpc2lvbnNcbiAgICAgICAgb2YgdGhlc2UgVGVybXMgd2lsbCByZW1haW4gaW4gZWZmZWN0LiBUaGVzZSBUZXJtcyBjb25zdGl0dXRlIHRoZSBlbnRpcmVcbiAgICAgICAgYWdyZWVtZW50IGJldHdlZW4gdXMgcmVnYXJkaW5nIG91ciBTZXJ2aWNlIGFuZCBzdXBlcnNlZGUgYW5kIHJlcGxhY2UgYW55XG4gICAgICAgIHByaW9yIGFncmVlbWVudHMgd2UgbWlnaHQgaGF2ZSBoYWQgYmV0d2VlbiB1cyByZWdhcmRpbmcgU2VydmljZS5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICAxNy4gPGI+Q2hhbmdlcyBUbyBTZXJ2aWNlPC9iPlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIFdlIHJlc2VydmUgdGhlIHJpZ2h0IHRvIHdpdGhkcmF3IG9yIGFtZW5kIG91ciBTZXJ2aWNlLCBhbmQgYW55IHNlcnZpY2VcbiAgICAgICAgb3IgbWF0ZXJpYWwgd2UgcHJvdmlkZSB2aWEgU2VydmljZSwgaW4gb3VyIHNvbGUgZGlzY3JldGlvbiB3aXRob3V0XG4gICAgICAgIG5vdGljZS4gV2Ugd2lsbCBub3QgYmUgbGlhYmxlIGlmIGZvciBhbnkgcmVhc29uIGFsbCBvciBhbnkgcGFydCBvZlxuICAgICAgICBTZXJ2aWNlIGlzIHVuYXZhaWxhYmxlIGF0IGFueSB0aW1lIG9yIGZvciBhbnkgcGVyaW9kLiBGcm9tIHRpbWUgdG8gdGltZSxcbiAgICAgICAgd2UgbWF5IHJlc3RyaWN0IGFjY2VzcyB0byBzb21lIHBhcnRzIG9mIFNlcnZpY2UsIG9yIHRoZSBlbnRpcmUgU2VydmljZSxcbiAgICAgICAgdG8gdXNlcnMsIGluY2x1ZGluZyByZWdpc3RlcmVkIHVzZXJzLlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIDE4LiA8Yj5BbWVuZG1lbnRzIFRvIFRlcm1zPC9iPlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIFdlIG1heSBhbWVuZCBUZXJtcyBhdCBhbnkgdGltZSBieSBwb3N0aW5nIHRoZSBhbWVuZGVkIHRlcm1zIG9uIHRoaXNcbiAgICAgICAgc2l0ZS4gSXQgaXMgeW91ciByZXNwb25zaWJpbGl0eSB0byByZXZpZXcgdGhlc2UgVGVybXMgcGVyaW9kaWNhbGx5LlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIFlvdXIgY29udGludWVkIHVzZSBvZiB0aGUgUGxhdGZvcm0gZm9sbG93aW5nIHRoZSBwb3N0aW5nIG9mIHJldmlzZWRcbiAgICAgICAgVGVybXMgbWVhbnMgdGhhdCB5b3UgYWNjZXB0IGFuZCBhZ3JlZSB0byB0aGUgY2hhbmdlcy4gWW91IGFyZSBleHBlY3RlZFxuICAgICAgICB0byBjaGVjayB0aGlzIHBhZ2UgZnJlcXVlbnRseSBzbyB5b3UgYXJlIGF3YXJlIG9mIGFueSBjaGFuZ2VzLCBhcyB0aGV5XG4gICAgICAgIGFyZSBiaW5kaW5nIG9uIHlvdS5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICBCeSBjb250aW51aW5nIHRvIGFjY2VzcyBvciB1c2Ugb3VyIFNlcnZpY2UgYWZ0ZXIgYW55IHJldmlzaW9ucyBiZWNvbWVcbiAgICAgICAgZWZmZWN0aXZlLCB5b3UgYWdyZWUgdG8gYmUgYm91bmQgYnkgdGhlIHJldmlzZWQgdGVybXMuIElmIHlvdSBkbyBub3RcbiAgICAgICAgYWdyZWUgdG8gdGhlIG5ldyB0ZXJtcywgeW91IGFyZSBubyBsb25nZXIgYXV0aG9yaXplZCB0byB1c2UgU2VydmljZS5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICAxOS4gPGI+V2FpdmVyIEFuZCBTZXZlcmFiaWxpdHk8L2I+XG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgTm8gd2FpdmVyIGJ5IENvbXBhbnkgb2YgYW55IHRlcm0gb3IgY29uZGl0aW9uIHNldCBmb3J0aCBpbiBUZXJtcyBzaGFsbFxuICAgICAgICBiZSBkZWVtZWQgYSBmdXJ0aGVyIG9yIGNvbnRpbnVpbmcgd2FpdmVyIG9mIHN1Y2ggdGVybSBvciBjb25kaXRpb24gb3IgYVxuICAgICAgICB3YWl2ZXIgb2YgYW55IG90aGVyIHRlcm0gb3IgY29uZGl0aW9uLCBhbmQgYW55IGZhaWx1cmUgb2YgQ29tcGFueSB0b1xuICAgICAgICBhc3NlcnQgYSByaWdodCBvciBwcm92aXNpb24gdW5kZXIgVGVybXMgc2hhbGwgbm90IGNvbnN0aXR1dGUgYSB3YWl2ZXIgb2ZcbiAgICAgICAgc3VjaCByaWdodCBvciBwcm92aXNpb24uXG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgSWYgYW55IHByb3Zpc2lvbiBvZiBUZXJtcyBpcyBoZWxkIGJ5IGEgY291cnQgb3Igb3RoZXIgdHJpYnVuYWwgb2ZcbiAgICAgICAgY29tcGV0ZW50IGp1cmlzZGljdGlvbiB0byBiZSBpbnZhbGlkLCBpbGxlZ2FsIG9yIHVuZW5mb3JjZWFibGUgZm9yIGFueVxuICAgICAgICByZWFzb24sIHN1Y2ggcHJvdmlzaW9uIHNoYWxsIGJlIGVsaW1pbmF0ZWQgb3IgbGltaXRlZCB0byB0aGUgbWluaW11bVxuICAgICAgICBleHRlbnQgc3VjaCB0aGF0IHRoZSByZW1haW5pbmcgcHJvdmlzaW9ucyBvZiBUZXJtcyB3aWxsIGNvbnRpbnVlIGluIGZ1bGxcbiAgICAgICAgZm9yY2UgYW5kIGVmZmVjdC5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICAyMC4gPGI+QWNrbm93bGVkZ2VtZW50PC9iPlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIEJZIFVTSU5HIFNFUlZJQ0UgT1IgT1RIRVIgU0VSVklDRVMgUFJPVklERUQgQlkgVVMsIFlPVSBBQ0tOT1dMRURHRSBUSEFUXG4gICAgICAgIFlPVSBIQVZFIFJFQUQgVEhFU0UgVEVSTVMgT0YgU0VSVklDRSBBTkQgQUdSRUUgVE8gQkUgQk9VTkQgQlkgVEhFTS5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICAyMS4gPGI+Q29udGFjdCBVczwvYj5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICBQbGVhc2Ugc2VuZCB5b3VyIGZlZWRiYWNrLCBjb21tZW50cywgcmVxdWVzdHMgZm9yIHRlY2huaWNhbCBzdXBwb3J0IGJ5XG4gICAgICAgIGVtYWlsOiA8Yj52YWxoYWxsYW1lZGlhZ3JvdXBAZ21haWwuY29tPC9iPi5cbiAgICAgIDwvcD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUZXJtc1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2J1aWxkL1wiOyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkc1tpXV0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtcIl0gPSBzZWxmW1wid2VicGFja0NodW5rXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19tYXRlcmlhbC11aV9jb3JlX2VzbV9BcHBCYXJfQXBwQmFyX2pzLW5vZGVfbW9kdWxlc19tYXRlcmlhbC11aV9jb3JlX2VzbV8tYzhjYmMxXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vYXNzZXRzL2pzL2luZGV4LmpzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOlsiY3JlYXRlVGhlbWUiLCJGYWIiLCJtYWtlU3R5bGVzIiwiVGhlbWVQcm92aWRlciIsInVzZVNjcm9sbFRyaWdnZXIiLCJab29tIiwiUmVhY3QiLCJQcm9wVHlwZXMiLCJLZXlib2FyZEFycm93VXAiLCJBcHBSb3V0ZXMiLCJDb250YWN0VXMiLCJGaWZ0aFNlY3Rpb24iLCJGb290ZXIiLCJOYXZCYXIiLCJTaXh0aFNlY3Rpb24iLCJ1c2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJwb3NpdGlvbiIsImJvdHRvbSIsInNwYWNpbmciLCJyaWdodCIsIkFwcCIsInBhbGV0dGUiLCJwcmltYXJ5IiwibWFpbiIsInNlY29uZGFyeSIsIlNjcm9sbFRvcCIsImNoaWxkcmVuIiwiY2xhc3NlcyIsInRyaWdnZXIiLCJkaXNhYmxlSHlzdGVyZXNpcyIsInRocmVzaG9sZCIsImhhbmRsZUNsaWNrIiwiZXZlbnQiLCJhbmNob3IiLCJ0YXJnZXQiLCJvd25lckRvY3VtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImJsb2NrIiwicHJvcFR5cGVzIiwiZWxlbWVudCIsImlzUmVxdWlyZWQiLCJSb3V0ZSIsIlJvdXRlcyIsIkFueGlldHlEaXNvcmRlciIsIkNhcmVlclN0dWRpZXMiLCJEZXByZXNzaW9uIiwiTWVudGFsQXdhcmVuZXNzIiwiTWVudGFsSGVhbHRoRGlzb3JkZXJzIiwiTWVudGFsU3RpZ21hIiwiTWVudGFsU3VwcG9ydCIsIk1vb2REaXNvcmRlciIsIk92ZXJ2aWV3TWVudGFsIiwiU3RvcnlPZkhvcGUiLCJIb21lVmlkZW9TZWN0aW9uRG93biIsIkZvdXJ0aFNlY3Rpb24iLCJIZXJvU2VjdGlvbiIsIlNlY29uZFNlY3Rpb24iLCJUaGlyZFNlY3Rpb24iLCJQcml2YWN5IiwiVGVybXMiLCJ1c2VFZmZlY3QiLCJ1c2VMb2NhdGlvbiIsIlNjcm9sbFRvVG9wIiwicGF0aG5hbWUiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsIlR5cG9ncmFwaHkiLCJBcnRpY2xlV3JhcHBlciIsInBob3RvIiwiUHVsbFF1b3RlIiwibWFyZ2luVG9wIiwiQXZhdGFyIiwiQm94IiwiQ29udGFpbmVyIiwiR3JpZCIsIkljb25CdXR0b24iLCJNZW51IiwiTWVudUl0ZW0iLCJMaXN0SXRlbUljb24iLCJMaXN0SXRlbVRleHQiLCJkZWVwUHVycGxlIiwidXNlU3RhdGUiLCJGaWx0ZXJOb25lVHdvVG9uZSIsIk1vcmVWZXJ0IiwiU2hhcmVUd29Ub25lIiwidGl0bGUiLCJjb2xvciIsImZvbnRTaXplIiwiYnJlYWtwb2ludHMiLCJ1cCIsImxpbmVIZWlnaHQiLCJjb250ZW50Iiwiam9pbiIsIm1hcmdpbiIsInRoZW1lUGhvdG8iLCJzdGF0ZSIsImFuY2hvckVsIiwic2V0QW5jaG9yRWwiLCJoYW5kbGVNb3JlT3B0aW9uc0NsaWNrIiwiZSIsImN1cnJlbnRUYXJnZXQiLCJoYW5kbGVNb3JlT3B0aW9uc0Nsb3NlIiwiaGFuZGxlQ29weUxpbmsiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJsb2NhdGlvbiIsIm9yaWdpbiIsInNsdWciLCJoYW5kbGVTaGFyZUNsaWNrIiwic2hhcmUiLCJ0ZXh0IiwiaW50cm8iLCJ1cmwiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ3aWR0aCIsImhlaWdodCIsImluaXRpYWxzIiwiYXV0aG9yTmFtZSIsIkJvb2xlYW4iLCJtaW5XaWR0aCIsIm9iamVjdEZpdCIsIm1hcmdpbkJvdHRvbSIsInN0cmluZyIsImRlZmF1bHRQcm9wcyIsImJvb2tzIiwiQXJ0aWNsZUltYWdlIiwiYW5vdGhlckltYWdlIiwiZGVwcmVzc2lvblBob3RvIiwiYW5vdGhlclBob3RvIiwiTGlzdCIsInlldEFub3RoZXJQaG90byIsImFueGlldHlQaG90byIsInBhcmFncmFwaCIsImZvbnRGYW1pbHkiLCJtZW50YWxIZWxwUGhvdG8iLCJsaXN0Iiwic2l6aW5nIiwiZm9udFN0eWxlIiwidGV4dEFsaWduIiwiTGluayIsIm1lbnRhbEtlIiwibGluayIsInRleHREZWNvcmF0aW9uIiwiQXJ0aWNsZVByZXZpZXciLCJpbWFnZSIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFJlcGVhdCIsImJvcmRlclJhZGl1cyIsImJhY2tncm91bmRCbGVuZE1vZGUiLCJ0b3AiLCJsZWZ0IiwiSW5zdGFncmFtIiwiTWFpbCIsIlR3aXR0ZXIiLCJZb3VUdWJlIiwid29yZFNpemUiLCJkb3duIiwibWFyZ2luTGVmdCIsIndpdGhTdHlsZXMiLCJCdXR0b24iLCJCdXR0b25PdXRsaW5lZCIsImJveFNoYWRvdyIsInRleHRUcmFuc2Zvcm0iLCJwYWRkaW5nIiwiYm9yZGVyIiwiYm9yZGVyQ29sb3IiLCJiYWNrZ3JvdW5kIiwiZGlzYWJsZWQiLCJDb250YWluZWRCbHVlQnV0dG9uIiwib25DbGljayIsIm90aGVycyIsImZ1bmMiLCJPdXRsaW5lZFByaW1hcnlBcHBCdXR0b24iLCJzcGlyYWwiLCJzdGFyIiwiYm94IiwiTmV3c0xldHRlckRpYWxvZyIsIm9wZW5OZXdzTGV0dGVyRGlhbG9nIiwic2V0T3Blbk5ld3NMZXR0ZXJEaWFsb2ciLCJ6SW5kZXgiLCJtaW5IZWlnaHQiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJoYW5kbGVDb250YWN0VXNDbGljayIsIm1hcmdpblJpZ2h0IiwiYWxpZ25JdGVtcyIsImN1cnNvciIsInN0b3JpZXNPZkhvcGUiLCJTZWNvbmRhcnlBcHBCdXR0b24iLCJjb250YWluZXIiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJQYXR0ZXJucyIsImhlcm8iLCJWaWRlb1BhcGVyIiwibGlnaHRCbHVlQmxvY2siLCJwYXR0ZXJucyIsImhlcm9JbWFnZSIsImhlcm9Xb3JkcyIsImhpZGVWaWRlb1BhcGVyIiwiaGFuZGxlRXhwbG9yZU1vcmVDbGljayIsIkFwcEJhciIsIlRvb2xiYXIiLCJ1c2VNZWRpYVF1ZXJ5IiwidXNlVGhlbWUiLCJsb2dvIiwic21hbGxTY3JlZW5Mb2dvIiwiV2hvQXJlV2VEaWFsb2ciLCJuYXZMaW5rIiwib3BlbkRpYWxvZyIsInNldE9wZW5EaWFsb2ciLCJzbWFsbFNjcmVlbiIsImhhbmRsZVNjcm9sbFRvSG9wZVNlY3Rpb24iLCJwaG9uZUFGcmllbmQiLCJsaWZ0WW91ck1vb2QiLCJoYW5kcyIsImhvcGUiLCJtZWRpdGF0aW5nIiwid2VIdXJ0IiwiaGFwcHlCYWxsb29ucyIsImhhcHB5RmFjZSIsImludHJvMTAxIiwia2VueWFuRmxhZyIsImRpZmZpY3VsdFJvYWQiLCJob2xkaW5nSGFuZHMiLCJ0ZXh0U2l6ZVNtYWxsIiwibmVlZEhlbHAiLCJoZXNpdGF0ZSIsImhpZGVCZ0ltYWdlcyIsImZsZXhEaXJlY3Rpb24iLCJib3JkZXJUb3BSaWdodFJhZGl1cyIsImJvcmRlclRvcExlZnRSYWRpdXMiLCJEaWFsb2ciLCJEaWFsb2dBY3Rpb25zIiwiRGlhbG9nQ29udGVudCIsIkRpYWxvZ0NvbnRlbnRUZXh0IiwiRGlhbG9nVGl0bGUiLCJTbGlkZSIsInF1ZXN0aW9uTWFyayIsIlRyYW5zaXRpb24iLCJmb3J3YXJkUmVmIiwicHJvcHMiLCJyZWYiLCJvcGVuIiwic2V0T3BlbiIsImZ1bGxTY3JlZW4iLCJoYW5kbGVDbG9zZSIsImJvb2wiLCJDaXJjdWxhclByb2dyZXNzIiwiRW1iZWRlZFZpZGVvRGlhbG9nIiwibG9hZGluZ1ZpZGVvIiwic2V0TG9hZGluZ1ZpZGVvIiwiUGFwZXIiLCJBY2Nlc3NUaW1lIiwiUGxheUFycm93IiwibWVudGFsSGVhbHRoSW1hZ2UiLCJ3YXRjaFZpZGVvUGFwZXIiLCJpbmZvIiwib3BlblZpZGVvRGlhbG9nIiwic2V0T3BlblZpZGVvRGlhbG9nIiwiU25hY2tiYXIiLCJUZXh0RmllbGQiLCJBbGVydCIsImVtYWlsIiwic2V0RW1haWwiLCJuYW1lIiwic2V0TmFtZSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsIm9wZW5TbmFjayIsInNldE9wZW5TbmFjayIsImhhbmRsZUNsb3NlU25hY2siLCJyZWFzb24iLCJoYW5kbGVPblN1Ym1pdCIsInNldFRpbWVvdXQiLCJ2ZXJ0aWNhbCIsImhvcml6b250YWwiLCJ2YWx1ZSIsInRyaW0iLCJyZW5kZXIiLCJCcm93c2VyUm91dGVyIiwiUm91dGVyIiwiSW5kZXgiLCJnZXRFbGVtZW50QnlJZCJdLCJzb3VyY2VSb290IjoiIn0=