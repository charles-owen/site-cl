<?php
/**
 * @file
 * Site.start options documentation
 */

/**
 * @page start-options Site.start options
 * @tableofcontents
 *
 * @section site-components Site components
 *
 * @subsection site-open open
 *
 * The open option on start indicates that the page does not require authentication. This allows
 * for the creation of pages that are publicly viewable. Some pages, must be accessible without
 * authentication, such as the login pages.
 *
 * The option is only set when explicitly set to true.
 *
 * \code
 * $view = new CL\Site\View($site, ['open'=>true]);
 * \endcode
 *
 * @subsection site-nojs nojs
 *
 * This nojs option is recognized by the view classes and will prevent JavaScript from
 * being included in the generated page. This is used mainly to prevent sending JavaScript
 * to browsers that can't handle modern JavaScript, like the one in Visual Studio.
 *
 */