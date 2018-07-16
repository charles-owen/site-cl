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
 */