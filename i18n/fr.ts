<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="fr" sourcelanguage="en">
<context>
    <name>@default</name>
    <message>
        <location filename="../test/test_translations.py" line="48"/>
        <source>Good morning</source>
        <translation>Bonjour</translation>
    </message>
</context>
<context>
    <name>DownloadSharedFilesAlgorithm</name>
    <message>
        <location filename="../download_shared_files_algorithm.py" line="94"/>
        <source>Download shared files</source>
        <translation>Télécharger fichiers partagés</translation>
    </message>
    <message>
        <location filename="../download_shared_files_algorithm.py" line="102"/>
        <source>File tools</source>
        <translation>Outils fichiers</translation>
    </message>
    <message>
        <location filename="../download_shared_files_algorithm.py" line="263"/>
        <source>Download report</source>
        <translation>Rapport de téléchargement</translation>
    </message>
    <message>
        <location filename="../download_shared_files_algorithm.py" line="135"/>
        <source>HTML files (*.html)</source>
        <translation>Fichiers HTML (*.html)</translation>
    </message>
    <message>
        <location filename="../download_shared_files_algorithm.py" line="148"/>
        <source>gis_data_home not found. You have to set gis_data_home global variable to the path of your main GIS folder (in Preferences -&gt; Settings dialog, Variables tab).</source>
        <translation>La variable gis_data_home n'a pas été trouvée. Vous devez définir cette variable en indiquant le chemin vers votre dossier SIG principal (dans le menu Préférences -&gt; Options, onglet Variables).</translation>
    </message>
    <message>
        <location filename="../download_shared_files_algorithm.py" line="167"/>
        <source>Aborting on user request</source>
        <translation>Annulation à la demande de l'utilisateur</translation>
    </message>
    <message>
        <location filename="../download_shared_files_algorithm.py" line="182"/>
        <source>Downloading file {}...</source>
        <translation>Téléchargement du fichier {}...</translation>
    </message>
    <message>
        <location filename="../download_shared_files_algorithm.py" line="198"/>
        <source>Unable to download file {fname}</source>
        <translation>Impossible de télécharger le fichier {fname}</translation>
    </message>
    <message>
        <location filename="../download_shared_files_algorithm.py" line="203"/>
        <source>Download complete for file {}. Now checking file integrity</source>
        <translation>Téléchargement du fichier {} terminé. Vérification de l'intégrité du fichier</translation>
    </message>
    <message>
        <location filename="../download_shared_files_algorithm.py" line="208"/>
        <source>SHA1 checksum of downloaded file does not match expected one. Something went wrong during download of file {}. Please try again.</source>
        <translation>La clé de contrôle SHA1 du fichier téléchargé ne correspond pas à celle attendue. Le téléchargement du fichier {} ne s'est pas déroule correctement. Merci d'essayer à nouveau.</translation>
    </message>
    <message>
        <location filename="../download_shared_files_algorithm.py" line="215"/>
        <source>File {} sucessfully downloaded.</source>
        <translation>Fichier {} téléchargé avec succès.</translation>
    </message>
    <message>
        <location filename="../download_shared_files_algorithm.py" line="218"/>
        <source>File {i} of {count} successfully downloaded.</source>
        <translation>Fichier {i} sur {count} téléchargé avec succès.</translation>
    </message>
    <message>
        <location filename="../download_shared_files_algorithm.py" line="238"/>
        <source>&lt;p&gt;All files are up-to-date. No files downloaded&lt;/p&gt;</source>
        <translation>&lt;p&gt;Tous les fichiers sont à jour. Aucun fichier téléchargé.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../download_shared_files_algorithm.py" line="241"/>
        <source>&lt;p&gt;{fname} (version: {version})&lt;/p&gt;
&lt;p&gt;&lt;strong&gt;Release notes&lt;/strong&gt;. {new}&lt;/p&gt;</source>
        <translation>&lt;p&gt;{fname} (version : {version})&lt;/p&gt;
&lt;p&gt;&lt;strong&gt;Notes de version&lt;/strong&gt;. {new}&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../download_shared_files_algorithm.py" line="263"/>
        <source>Downloaded files</source>
        <translation>Fichiers téléchargés</translation>
    </message>
    <message>
        <location filename="../download_shared_files_algorithm.py" line="293"/>
        <source>Unable to read version file for {}. Download it again.</source>
        <translation>Impossible de lire la version du fichier {}. Nouveau téléchargement.</translation>
    </message>
    <message>
        <location filename="../download_shared_files_algorithm.py" line="298"/>
        <source>File {} up-to-date. Nothing to do.</source>
        <translation>Fichier {} à jour. Rien à faire.</translation>
    </message>
    <message>
        <location filename="../download_shared_files_algorithm.py" line="318"/>
        <source>dest_folder empty or not set for file {}.</source>
        <translation>Paramètre dest_folder vide ou non défini pour le fichier {}.</translation>
    </message>
    <message>
        <location filename="../download_shared_files_algorithm.py" line="324"/>
        <source>dest_folder cannot be an absolute path for {}.</source>
        <translation>Le paramètre dest_folder ne peut pas être un chemin absolu pour {}.</translation>
    </message>
    <message>
        <location filename="../download_shared_files_algorithm.py" line="106"/>
        <source>This algorithm downloads GIS shared files from given web repository. Only files that have been added or updated on the repository are downloaded. Existing files will replaced by the new version on local hard drive.

After successful download, an HTML report is generated showing what files have been downloaded.</source>
        <translation>Cet algorithme télécharge les fichiers GIS partagés sur le dépôt sélectionné. Seuls les fichiers qui ont été ajouté ou mis à jour sur le dépôt sont téléchargés. Les fichiers existants seront remplacés par les nouvelles versions sur le disque dur local.

Après les téléchargements réussis, un rapport HTML est généré qui montre les fichiers téléchargés.</translation>
    </message>
    <message>
        <location filename="../download_shared_files_algorithm.py" line="126"/>
        <source>No repository configured</source>
        <translation>Aucun dépôt configuré</translation>
    </message>
    <message>
        <location filename="../download_shared_files_algorithm.py" line="128"/>
        <source>Repository</source>
        <translation>Dépôt</translation>
    </message>
</context>
<context>
    <name>DownloadSharedFilesPlugin</name>
    <message>
        <location filename="../download_shared_files.py" line="87"/>
        <source>Files have been added or updated in this repository. Please run the Download Shared Files algorithm.</source>
        <translation>Des fichiers ont été ajoutés ou mis à jour dans ce dépôt. Veuillez exécuter l'algorithme Télécharger fichiers partagés.</translation>
    </message>
</context>
<context>
    <name>DownloadSharedFilesProvider</name>
    <message>
        <location filename="../download_shared_files_provider.py" line="77"/>
        <source>Download Shared Files</source>
        <translation>Télécharger fichiers partagés</translation>
    </message>
</context>
</TS>
