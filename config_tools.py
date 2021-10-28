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
"""

__author__ = 'Yann Voté'
__date__ = '2021-10-28'
__copyright__ = '(C) 2021 by Yann Voté'

# This will get replaced with a git SHA1 when you do a git archive

__revision__ = '$Format:%H$'


import pathlib

from qgis.core import (
    QgsExpressionContextScope,
    QgsExpressionContextUtils,
)

from .path_tools import is_absolute_folder_path


# Shorter names for these functions
qgis_variable = QgsExpressionContextScope.variable
global_scope = QgsExpressionContextUtils.globalScope


def read_gis_data_home():
    """Read global ``gis_data_home`` QGIS variable and return a
    ``pathlib.Path`` object with it, or ``None`` if it is not valid."""
    path = qgis_variable(global_scope(), 'gis_data_home')
    path = pathlib.Path(path) if path else None
    return path if is_absolute_folder_path(path) else None