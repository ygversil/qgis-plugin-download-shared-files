# -*- coding: utf-8 -*-
"""
/***************************************************************************
 DownloadSharedFiles
                                 A QGIS plugin
 This plugin provides a processing algorithm to download files hosted on one or
 multiple web repositories.
 Generated by Plugin Builder: http://g-sherman.github.io/Qgis-Plugin-Builder/
                              -------------------
        begin                : 2021-10-28
        copyright            : (C) 2021 by Yann Voté
        email                : ygversil@lilo.org
 ***************************************************************************/

/***************************************************************************
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 ***************************************************************************/
 This script initializes the plugin, making it known to QGIS.
"""

__author__ = 'Yann Voté'
__date__ = '2021-10-28'
__copyright__ = '(C) 2021 by Yann Voté'


# noinspection PyPep8Naming
def classFactory(iface):  # pylint: disable=invalid-name
    """Load DownloadSharedFiles class from file DownloadSharedFiles.

    :param iface: A QGIS interface instance.
    :type iface: QgsInterface
    """
    #
    from .download_shared_files import DownloadSharedFilesPlugin
    return DownloadSharedFilesPlugin(iface)
