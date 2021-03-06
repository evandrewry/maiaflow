<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme and one of the
 * two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * For example, it puts together the home page when no home.php file exists.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage Twenty_Thirteen
 * @since Twenty Thirteen 1.0
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<div id="content" class="site-content" role="main">
		<?php if ( have_posts() ) : ?>


      <div class="content-header">
        <div class="content-header-tags">
         <?php
           $tags = get_tags( array('orderby' => 'count', 'order' => 'DESC') );
           foreach ( (array) $tags as $tag ) : ?>
             <a ng-class="{active: activeTag == '<?php echo $tag->slug; ?>'}" mf-tag-filter-toggle="<?php echo $tag->slug; ?>" rel="tag"><?php echo $tag->name . ' '; ?></a>
         <?php endforeach;?>
        </div>
        <h1 class="site-title content-header-title">maiaflow</h1>
      </div>
      <div style="height:200px;"></div>

			<?php /* The loop */ ?>
			<?php while ( have_posts() ) : the_post(); ?>
				<?php get_template_part( 'content', get_post_format() ); ?>
			<?php endwhile; ?>

      <div class="col left"></div>
      <div class="col middle"></div>
      <div class="col right"></div>

			<?php twentythirteen_paging_nav(); ?>

		<?php else : ?>
			<?php get_template_part( 'content', 'none' ); ?>
		<?php endif; ?>

		</div><!-- #content -->
	</div><!-- #primary -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>
