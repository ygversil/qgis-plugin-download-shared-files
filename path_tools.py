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


import hashlib


def is_absolute_file_path(path):
    """Return ``True`` if the given path is an absolute path to an existing
    file."""
    return (bool(path) and path.exists() and path.is_file() and
            path.is_absolute())


def is_absolute_folder_path(path):
    """Return ``True`` if the given path is an absolute path to an existing
    folder."""
    return (bool(path) and path.exists() and path.is_dir() and
            path.is_absolute())


def sha1sum(fpath, blocksize=65536):
    """Return the SHA1 checksum for the given file."""
    hasher = hashlib.sha1()
    with fpath.open('rb') as f:
        buf = f.read(blocksize)
        while len(buf) > 0:
            hasher.update(buf)
            buf = f.read(blocksize)
    return hasher.hexdigest()