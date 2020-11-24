const express = require('express');
const routerTemplate = express.Router();
const path = require('path');

// Dashboard


routerTemplate.get('/app-calender', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/app-calender.ejs')
})

routerTemplate.get('/app-chat', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/app-chat.ejs')
})

routerTemplate.get('/app-ecommerce-checkout', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/app-ecommerce-checkout.ejs')
})

routerTemplate.get('/app-ecommerce-shop', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/app-ecommerce-shop.ejs')
})

routerTemplate.get('/app-ecommerce-details', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/app-ecommerce-details.ejs')
})

routerTemplate.get('/app-ecommerce-wishlist', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/app-ecommerce-wishlist.ejs')
})

routerTemplate.get('/app-email', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/app-email.ejs')
})

routerTemplate.get('/app-todo', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/app-todo.ejs')
})

routerTemplate.get('/app-user-list', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/app-user-list.ejs')
})

routerTemplate.get('/app-user-view', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/app-user-view.ejs')
})

routerTemplate.get('/auth-lock-screen', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/auth-lock-screen.ejs')
})

routerTemplate.get('/card-actions', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/card-actions.ejs')
})

routerTemplate.get('/card-advance', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/card-advance.ejs')
})

routerTemplate.get('/card-analytics', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/card-analytics.ejs')
})

routerTemplate.get('/card-basic', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/card-basic.ejs')
})

routerTemplate.get('/card-statics', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/card-statics.ejs')
})

routerTemplate.get('/chart-apex', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/chart-apex.ejs')
})

routerTemplate.get('/chart-echarts', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/chart-echarts.ejs')
})

routerTemplate.get('/chart-chartjs', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/chart-chartjs.ejs')
})

routerTemplate.get('/colors', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/colors.ejs')
})

routerTemplate.get('/component-alerts', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/component-alerts.ejs')
})

routerTemplate.get('/component-badges', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/component-badges.ejs')
})

routerTemplate.get('/component-breadcrumbs', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/component-breadcrumbs.ejs')
})

routerTemplate.get('/component-bs-toast', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/component-bs-toast.ejs')
})

routerTemplate.get('/component-buttons-basic', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/component-buttons-basic.ejs')
})

routerTemplate.get('/component-carousel', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/component-carousel.ejs')
})

routerTemplate.get('/component-collapse', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/component-collapse.ejs')
})

routerTemplate.get('/component-dropdowns', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/component-dropdowns.ejs')
})

routerTemplate.get('/component-list-group', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/component-list-group.ejs')
})

routerTemplate.get('/component-media-objects', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/component-media-objects.ejs')
})

routerTemplate.get('/component-modals', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/component-modals.ejs')
})

routerTemplate.get('/component-navbar', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/component-navbar.ejs')
})

routerTemplate.get('/component-navs-component', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/component-navs-component.ejs')
})

routerTemplate.get('/component-pagination', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/component-pagination.ejs')
})

routerTemplate.get('/component-pill-badges', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/component-pill-badges.ejs')
})

routerTemplate.get('/component-pills-component', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/component-pills-component.ejs')
})

routerTemplate.get('/component-popovers', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/component-popovers.ejs')
})

routerTemplate.get('/component-progress', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/component-progress.ejs')
})

routerTemplate.get('/component-spinner', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/component-spinner.ejs')
})

routerTemplate.get('/component-tabs-component', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/component-tabs-component.ejs')
})

routerTemplate.get('/component-tooltips', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/component-tooltips.ejs')
})

routerTemplate.get('/content-grid', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/content-grid.ejs')
})

routerTemplate.get('/content-helper-classes', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/content-helper-classes.ejs')
})

routerTemplate.get('/content-syntax-highlighter', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/content-syntax-highlighter.ejs')
})

routerTemplate.get('/content-text-utilities', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/content-text-utilities.ejs')
})

routerTemplate.get('/content-typography', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/content-typography.ejs')
})

routerTemplate.get('/dashboard-analytics', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/dashboard-analytics.ejs')
})

routerTemplate.get('/dashboard-ecommerce', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/dashboard-ecommerce.ejs')
})

routerTemplate.get('/data-list-view', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/data-list-view.ejs')
})

routerTemplate.get('/data-thumb-view', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/data-thumb-view.ejs')
})

routerTemplate.get('/error-404', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/error-404.ejs')
})

routerTemplate.get('/error-500', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/error-500.ejs')
})

routerTemplate.get('/ex-component-avatar', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/ex-component-avatar.ejs')
})

routerTemplate.get('/ex-component-chips', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/ex-component-chips.ejs')
})

routerTemplate.get('/ex-component-divider', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/ex-component-divider.ejs')
})

routerTemplate.get('/ext-component-clipboard', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/ext-component-clipboard.ejs')
})

routerTemplate.get('/ext-component-context-menu', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/ext-component-context-menu.ejs')
})

routerTemplate.get('/ext-component-drag-drop', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/ext-component-drag-drop.ejs')
})

routerTemplate.get('/ext-component-file-uploader', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/ext-component-file-uploader.ejs')
})

routerTemplate.get('/ext-component-i18n', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/ext-component-i18n.ejs')
})

routerTemplate.get('/ext-component-noui-slider', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/ext-component-noui-slider.ejs')
})

routerTemplate.get('/ext-component-plyr', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/ext-component-plyr.ejs')
})

routerTemplate.get('/ext-component-quill-editor', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/ext-component-quill-editor.ejs')
})

routerTemplate.get('/ext-component-sweet-alerts', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/ext-component-sweet-alerts.ejs')
})

routerTemplate.get('/ext-component-swiper', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/ext-component-swiper.ejs')
})

routerTemplate.get('/ext-component-toastr', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/ext-component-toastr.ejs')
})

routerTemplate.get('/ext-component-tour', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/ext-component-tour.ejs')
})

routerTemplate.get('/form-checkbox', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/form-checkbox.ejs')
})

routerTemplate.get('/form-date-time-picker', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/form-date-time-picker.ejs')
})

routerTemplate.get('/form-input-groups', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/form-input-groups.ejs')
})

routerTemplate.get('/form-inputs', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/form-inputs.ejs')
})

routerTemplate.get('/form-layout', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/form-layout.ejs')
})

routerTemplate.get('/form-number-input', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/form-number-input.ejs')
})

routerTemplate.get('/form-radio', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/form-radio.ejs')
})

routerTemplate.get('/form-select', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/form-select.ejs')
})

routerTemplate.get('/form-switch', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/form-switch.ejs')
})

routerTemplate.get('/form-textarea', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/form-textarea.ejs')
})

routerTemplate.get('/form-validation', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/form-validation.ejs')
})

routerTemplate.get('/form-wizard', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/form-wizard.ejs')
})

routerTemplate.get('/icons-feather', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/icons-feather.ejs')
})

routerTemplate.get('/icons-font-awesome', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/icons-font-awesome.ejs')
})

routerTemplate.get('/index', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/index.ejs')
})

routerTemplate.get('/maps-google', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/maps-google.ejs')
})

routerTemplate.get('/page-account-settings', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/page-account-settings.ejs')
})

routerTemplate.get('/page-coming-soon', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/page-coming-soon.ejs')
})

routerTemplate.get('/page-faq', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/page-faq.ejs')
})

routerTemplate.get('/page-invoice', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/page-invoice.ejs')
})

routerTemplate.get('/page-kb-category', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/page-kb-category.ejs')
})

routerTemplate.get('/page-kb-question', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/page-kb-question.ejs')
})

routerTemplate.get('/page-knowlege-base', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/page-knowlege-base.ejs')
})

routerTemplate.get('/page-maintance', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/page-maintance.ejs')
})

routerTemplate.get('/page-not-authorized', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/page-not-authorized.ejs')
})

routerTemplate.get('/page-search', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/page-search.ejs')
})

routerTemplate.get('/page-user-profile', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/page-user-profile.ejs')
})

routerTemplate.get('/table', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/table.ejs')
})

routerTemplate.get('/table-ag-grid', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/table-ag-grid.ejs')
})

routerTemplate.get('/table-datatable', (req, res) => {
    res.render('ltr/vertical-menu-template-dark/table-datatable.ejs')
})

module.exports = routerTemplate;