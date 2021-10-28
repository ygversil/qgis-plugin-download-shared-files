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


from collections import namedtuple
import pathlib

from qgis.core import (
    QgsExpressionContextScope,
    QgsExpressionContextUtils,
)

from .context_managers import qgis_group_settings
from .path_tools import is_absolute_folder_path


# Shorter names for these functions
qgis_variable = QgsExpressionContextScope.variable
global_scope = QgsExpressionContextUtils.globalScope


SETTINGS_GROUP = 'Plugin-DownloadSharedFiles/repositories'


RepoSettings = namedtuple('Settings', (
    'url',
    'files_version',
))


def read_gis_data_home():
    """Read global ``gis_data_home`` QGIS variable and return a
    ``pathlib.Path`` object with it, or ``None`` if it is not valid."""
    path = qgis_variable(global_scope(), 'gis_data_home')
    path = pathlib.Path(path) if path else None
    return path if is_absolute_folder_path(path) else None


def read_repository_settings(repo_title):
    """Read given web repository settings from config file."""
    with qgis_group_settings(SETTINGS_GROUP) as s:
        d = dict()
        d['url'] = s.value('{}/url'.format(repo_title))
        d['files_version'] = s.value('{}/files_version'.format(repo_title), 0)
        return RepoSettings(**d)
