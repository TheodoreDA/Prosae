export default function PrivacyPolicyPage() {
  return (
    <div className="w-extra text-2xl text-justify pb-20">
      {/* First page */}
      <h1 className="text-5xl mt-20">Mentions légales</h1>
      <div className="flex justify-between mt-12">
        <div>
          <h2 className="underline mb-8">Éditeur et directeur de publication</h2>
          <p>Raison sociale : Jeanne Sabiron | Prosae</p>
          <p>Statut : micro-entreprise </p>
          <p>Siège social : 4 rue d&apos;Allonville 44000 Nantes</p>
          <p>Numéro de téléphone : 06 07 04 50 87</p>
          <p>Courriel : jeanne.sabiron@prosae.net</p>
          <p>Numéro de SIRET : 982 840 472 00012</p>
        </div>
        <div className="max-w-md">
          <div className="underline mb-8">Hébergeur</div>
          <div>Raison sociale : o2switch</div>
          <div>Siège social : Chemin des Pardiaux 63000 Clermont-Ferrand</div>
          <div>Numéro de téléphone : 04 44 44 60 40</div>
        </div>
      </div>
      <p className="mt-10">Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l&apos;économie numérique, il est précisé ci-dessus aux utilisateurs du site Prosae, accessible à l&apos;URL www.prosae.net (le « Site »), l&apos;identité des différents intervenants dans le cadre de sa réalisation et de son suivi. Le site est accessible en tout endroit, 7j/7, 24h/24 sauf cas de force majeure, interruption programmée ou non et pouvant découler d&apos;une nécessité de maintenance.</p>
      <p className="mt-10">Le site internet www.prosae.net ne récupère pas de cookies ou quelque donnée que ce soit.</p>
      
      {/* Second page */}
      <h1 className="text-5xl mt-20">Conditions générales de vente (dernière révision le 10.11.2024)</h1>
      <p className="mt-12">Les présentes conditions générales de vente régissent les relations entre d&apos;une part Jeanne SABIRON, correctrice, biographe et interprète, et d&apos;autre part ses clients. Toute acceptation de devis implique l&apos;adhésion entière et sans réserve du client aux présentes conditions générales de vente. Elles entrent en vigueur à la date de la signature du devis par le client. Celui-ci déclare être majeur ou posséder une autorisation parentale. Ce document peut être révisé à tout moment et sans préavis.</p>
      <h2 className="uppercase mt-12">article 1 : les services</h2>
      <p className="mt-12">Jeanne SABIRON propose des services de correction, de biographie et d&apos;interprétariat.</p>
      <h3 className="mt-12">Correction :</h3>
      <ul className="list-disc mt-2 ml-10 space-y-5">
        <li>Une première révision (pour tout document) comprend la suppression des coquilles et des erreurs d&apos;orthographe, la vérification de la grammaire, conjugaison, syntaxe, orthotypographie, cohérence interne au récit ainsi que historique et géographique, l&apos;harmonisation des termes et l&apos;application des règles de mise en page officielles.</li>
        <li>Une seconde révision permet de vérifier l&apos;application des changements et de traquer les dernières erreurs.</li>
      </ul>
      <p className="mt-12">Des propositions de reformulation peuvent être faites si nécessaire. Elles se feront en accord avec le style de l&apos;auteur. Les documents très courts ne feront l&apos;objet que d&apos;une révision sauf demande explicite du client.</p>

      {/* Third page */}
      <h3 className="mt-12">Biographie :</h3>
      <ul className="list-disc mt-2 ml-10 space-y-5">
        <li>Le travail s&apos;organise en séances. Entre chacune d&apos;elles, Jeanne SABIRON transmet ses écrits pour modifications de la part du client. Celui-ci a le contrôle sur chaque élément écrit et pourra décider de supprimer des passages à tout moment. Le livre ne contiendra pas de propos contraires aux lois en vigueur (racisme, sexisme, homophobie, diffamation, injures, etc.). Avec l&apos;accord du client, les séances seront enregistrées pour une meilleure qualité d&apos;écriture. Les enregistrements ne seront réécoutés que si nécessaire et seulement dans le cadre de l&apos;écriture.</li>
      </ul>
      <h3 className="mt-12">Interprétariat :</h3>
      <ul className="list-disc mt-2 ml-10 space-y-5">
        <li>Deux types d&apos;interprétation sont réalisés par Jeanne SABIRON : de liaison et consécutive en français / anglais ainsi qu&apos;en français / espagnol. Elles se font en présentiel de préférence mais sont aussi réalisables par téléphone.</li>
      </ul>
      <p className="mt-12">Jeanne SABIRON se réserve le droit de refuser toute prestation contraire à sa déontologie et aux lois en vigueur.</p>

      {/* Fourth page */}
      <h2 className="uppercase mt-12">article 2 : devis, factures, tarifs et règlement</h2>
      <p className="mt-12">Après demande téléphonique, écrite ou en entretien et une fois le travail évalué, un devis est transmis au client. Il stipule les détails de la prestation, les tarifs, les conditions de règlement ainsi que toute autre mention spéciale négociée avec le client (frais de déplacement ou d&apos;hébergement éventuels, acompte, etc.)</p>
      <p className="mt-12">En biographie, aucun devis n&apos;est transmis (sauf demande explicite du client) car il est impossible de s&apos;engager sur un nombre de séances précis. Une facture pour chaque séance est transmise et le règlement de celle-ci doit se faire à réception des écrits. Les tarifs ne comprennent pas les frais d&apos;impression.</p>
      <p className="mt-12">En correction, un extrait du document est nécessaire pour établir un devis. </p>
      <p className="mt-12">En correction et interprétariat, les devis sont valables deux mois après envoi. La prestation de correction ne débutera qu&apos;après signature du devis et réception de l&apos;acompte.</p>
      <p className="mt-12">Les frais de déplacement peuvent être facturés mais le temps de déplacement.</p>
      <p className="mt-12">Les tarifs sont libres et peuvent être révisés sans aucune justification. Toutefois, les tarifs définis sur un devis préalablement accepté ne seront pas modifiés.</p>
      <p className="mt-12">Le client peut payer par virement bancaire. Les chèques et espèces sont acceptés si remis en main propre. Les dates d&apos;encaissement sont négociables.</p>

      {/* Fith page */}
      <p className="mt-12">Le délais de paiement de chaque facture est de trente jours. Des pénalités de retard en cas de défaut de paiement après un délais de trente jours sont fixées à hauteur de 10 % du montant de la facture. L&apos;indemnité forfaitaire pour frais de recouvrement est de 40 euros (loi n° 2012-387 du 22 mars 2012 en vigueur depuis le 1er janvier 2013).</p>
      <p className="mt-12">En cas d&apos;impayé, le travail ne sera pas poursuivi.</p>
      <h2 className="uppercase mt-12">article 3 : délais de réalisation de la prestation</h2>
      <p className="mt-12">Jeanne SABIRON s&apos;engage à respecter les délais de réalisation de toute prestation. Toutefois, elle se réserve le droit d&apos;allonger ce délais en cas de force majeure (maladie, problème familial, accident, décès de Jeanne SABIRON ou de l&apos;un de ses proches, problème informatique grave, etc.) après en avoir informé le client. </p>
      <p className="mt-12">En cas de retard non imputable à la force majeure, le montant de la facture pourra être négocié à la baisse.</p>
      <h2 className="uppercase mt-12">article 4 : communication des données</h2>
      <p className="mt-12">Le client s&apos;engage à fournir toutes les données nécessaires à la mise en œuvre des travaux. En cas de retard, d&apos;insuffisance ou d&apos;absence de transmission de ces éléments, Jeanne SABIRON ne saurait être tenue responsable du report de livraison de la commande. Aucun remboursement ne pourra être appliqué. Le client s&apos;assure d&apos;avoir un double de ces documents.</p>

      {/* Sixth page */}
      <h2 className="uppercase mt-12">article 5 : responsabilité de Jeanne sabiron</h2>
      <p className="mt-12">Le travail étant fait manuellement, malgré l&apos;extrême vigilance de Jeanne SABIRON, il peut arriver qu&apos;il reste une coquille ou une erreur ayant échappé à la prestataire. Dans ce cas, le client étant en droit d&apos;attendre un travail de qualité, il peut retourner l&apos;ouvrage dans le 72 heures pour un court document ou dans la semaine suivant la livraison pour un roman. Le document sera revu gratuitement (aucun remboursement ou dédommagement ne pourra être demandé). Passé ce délais, le travail sera considéré comme accepté par le client.</p>
      <p className="mt-12">En correction, Jeanne SABIRON ne saurait être tenue responsable du contenu des textes ayant fait l&apos;objet de la mission, de leur utilisation et des conséquences préjudiciables. De plus, elle ne peut être tenue responsable d&apos;erreurs apportées au document à la suite de modifications du texte après livraison.</p>
      <p className="mt-12">En tant qu&apos;interprète, Jeanne SABIRON s&apos;engage à traduire les propos exacts des interlocuteurs. Elle ne saurait être tenue responsable du contenu des paroles des interlocuteurs ou des problèmes techniques en cas d&apos;interprétation par téléphone.</p>
      <h2 className="uppercase mt-12">ARTICLE 6 : CONFIDENTIALITÉ</h2>
      <p className="mt-12">Jeanne SABIRON s&apos;engage à ne rien divulguer du contenudes documents corrigés, du contenu des dires exprimés lors de mission d&apos;interprétariat ou du contenu des paroles des biographiés lors des entretiens. Les documents, enregistrements et données ne seront pas conservés après la livraison de la prestation.</p>
      
      {/* Seventh page */}
      <h2 className="uppercase mt-12">article 7 : rétractation</h2>
      <p className="mt-12">Le client dispose de quatorze jours francs après la signature du devis pour se rétracter (article L. 221-18 du Code de la consommation). Toute rétractation doit se faire par courrier électronique à l&apos;adresse jeanne.sabiron@prosae.net et ne sera considérée comme effective qu&apos;après confirmation par retour de mail de la part de Jeanne SABIRON.</p>
      <p className="mt-12">Si le client souhaite que l&apos;exécution de la prestation de service commence avant la fin du délai de rétractation prévu à l&apos;article L. 221-18, il doit en faire la demande par écrit à l&apos;adresse jeanne.sabiron@prosae.net et devra remplir une attestation de renoncement au droit de rétractation.</p>
      <p className="mt-12">En cas de d&apos;annulation d&apos;une commande en cours de réalisation, les sommes déjà versées ne seront pas remboursées et le client devra s&apos;acquitter du montant correspondant au travail déjà effectué.</p>
      <p className="mt-12">Jeanne SABIRON peut également se rétracter avant le début de la prestation. Elle s&apos;engage à rembourser l&apos;intégralité de l&apos;acompte versé à la signature du devis. La résiliation de la commande à l&apos;initiative de Jeanne SABIRON quand le travail est déjà commencé ne peut se faire que pour des motifs justes et raisonnables tels que :</p>
      <ul className="list-disc mt-2 ml-10 space-y-5">
        <li>perte de confiance manifestée par le client (relation dégradée, refus de paiement d&apos;une facture en totalité ou partiellement, etc.)</li>
        <li>l&apos;impossibilité pour le prestataire de réaliser sa mission convenablement en raison d&apos;un manquement de la part du client (défaut dans la fourniture des informations nécessaires, etc.) ou d&apos;exigences du client dépassant les capacités de la prestataire.</li>
        <li>la violation par le client d&apos;une ou plusieurs clauses des présentes conditions générales de vente.</li>
      </ul>
    </div>
  );
}
